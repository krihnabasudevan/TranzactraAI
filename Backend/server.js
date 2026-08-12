// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174",
      "http://localhost:5175",
      "https://your-frontend.onrender.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

console.log("🚀 Starting server...");
console.log("📧 Using email:", process.env.RECIPIENT_EMAIL);
console.log("🔑 App password set:", !!process.env.GMAIL_APP_PASSWORD);

// File upload configuration
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "image/jpeg",
      "image/png",
      "text/plain",
    ];
    cb(null, allowedTypes.includes(file.mimetype));
  },
});

// ✅ Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date().toISOString(),
    email: process.env.RECIPIENT_EMAIL || "not set",
  });
});

// ✅ Email endpoint
app.post("/api/send-email", upload.single("attachment"), async (req, res) => {
  try {
    console.log("📧 Received contact form submission");
    const { name, email, company, phone, subject, message } = req.body;

    if (!process.env.GMAIL_APP_PASSWORD || !process.env.RECIPIENT_EMAIL) {
      console.error("❌ Missing email credentials");
      return res.status(500).json({
        success: false,
        error: "Server configuration error",
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.RECIPIENT_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.verify();
    console.log("✅ Email transporter verified");

    const mailOptions = {
      from: `"${name}" <${process.env.RECIPIENT_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `
        Name: ${name}
        Email: ${email}
        Company: ${company || "N/A"}
        Phone: ${phone || "N/A"}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "N/A"}</p>
        <p><strong>Phone:</strong> ${phone || "N/A"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    if (req.file) {
      mailOptions.attachments = [
        {
          filename: req.file.originalname,
          content: req.file.buffer,
          contentType: req.file.mimetype,
        },
      ];
    }

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully!");

    res.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
});

// ✅ NO app.options line here - CORS is already handled by app.use(cors())

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Using email: ${process.env.RECIPIENT_EMAIL}`);
});
