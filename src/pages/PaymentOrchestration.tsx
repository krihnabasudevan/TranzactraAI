import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  GitBranch,
  Zap,
  TrendingUp,
  Shield,
  Globe,
  BarChart3,
  Route,
  RefreshCw,
  Clock,
  CreditCard,
  Building2,
  Layers,
  Network,
  DollarSign,
  Activity,
  Server,
  Brain,
  ArrowLeftRight,
  Gauge,
  Sparkles,
} from 'lucide-react';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import SectionHeading from '../components/ui/SectionHeading';
import Reveal from '../components/animations/Reveal';
import Counter from '../components/animations/Counter';

export default function PaymentOrchestration() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <GatewayNetworkSection />
      <OrchestratorEngineSection />
      <MerchantRoutingSection />
      <BenefitsSection />
      <IntegrationCapabilitiesSection />
      <HowItWorksSection />
      <PricingOptimizationSection />
      <CTASection />
    </>
  );
}

/* ───────────────────────── HERO ───────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-ink-50 pt-20">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="absolute inset-0 grid-bg opacity-60" />
      
      <motion.div
        className="absolute top-1/4 -left-32 w-96 h-96 bg-accent-400/20 rounded-full blur-[120px]"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-400/20 rounded-full blur-[120px]"
        animate={{ x: [0, -40, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative container-8xl grid lg:grid-cols-2 gap-12 items-center py-20">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>
              <span className="flex h-2 w-2 rounded-full bg-accent-500 animate-pulse" />
              Intelligent Payment Orchestration
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-ink-900 text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Smart routing across{' '}
            <span className="gradient-text">10+ gateways</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-ink-500 leading-relaxed max-w-xl"
          >
            Dynamically route payments across Razorpay, Stripe, Cashfree, Adyen, PayU, 
            Chargebee, and more. Maximize success rates, minimize costs, and deliver 
            the best customer experience — all automatically.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button to="/contact" variant="primary" size="lg">
              Start Optimizing Payments
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/api-docs" variant="outline" size="lg">
              <Route className="h-4 w-4" />
              View Orchestrator Docs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500"
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-500" /> 99.98% uptime
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-500" /> 10+ gateways
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-accent-500" /> Real-time routing
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative"
        >
          <OrchestrationVisual />
        </motion.div>
      </div>
    </section>
  );
}

function OrchestrationVisual() {
  const gateways = [
    { name: 'Razorpay', color: 'bg-primary-500', success: '98.7%', latency: '240ms' },
    { name: 'Stripe', color: 'bg-accent-500', success: '97.2%', latency: '310ms' },
    { name: 'Cashfree', color: 'bg-success-500', success: '96.8%', latency: '280ms' },
    { name: 'Adyen', color: 'bg-warning-500', success: '95.4%', latency: '450ms' },
    { name: 'PayU', color: 'bg-primary-400', success: '96.1%', latency: '350ms' },
    { name: 'Chargebee', color: 'bg-accent-400', success: '97.8%', latency: '290ms' },
  ];

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-gradient-to-br from-accent-400/30 to-primary-400/30 rounded-3xl blur-2xl" />
      
      <div className="relative glass-card rounded-3xl p-6 lg:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-danger-500" />
            <div className="h-3 w-3 rounded-full bg-warning-500" />
            <div className="h-3 w-3 rounded-full bg-success-500" />
          </div>
          <span className="text-xs font-mono text-ink-400">orchestrator.engine</span>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-xl bg-accent-50 border border-accent-200">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-accent-100">
                <Brain className="h-5 w-5 text-accent-600" />
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">Orchestrator Engine</div>
                <div className="text-xs text-ink-500">Active • Routing 10+ gateways</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm font-bold text-accent-600">Optimized</div>
              <div className="text-xs text-ink-500">Success rate: 99.2%</div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {gateways.map((gw) => (
              <motion.div
                key={gw.name}
                className="p-3 rounded-xl bg-ink-50 border border-ink-100 hover:border-accent-200 transition-all"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className={`h-2 w-2 rounded-full ${gw.color}`} />
                  <span className="text-xs font-medium text-ink-900">{gw.name}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-ink-500">Success</span>
                  <span className="font-semibold text-success-600">{gw.success}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-ink-500">Latency</span>
                  <span className="font-semibold text-ink-700">{gw.latency}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="p-3 rounded-xl bg-gradient-to-r from-accent-500/10 to-primary-500/10 border border-accent-200"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-accent-600 animate-spin" />
                <span className="text-xs font-medium text-ink-700">Routing decision in progress...</span>
              </div>
              <Badge variant="accent">Live</Badge>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 shadow-xl"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-success-100">
            <TrendingUp className="h-5 w-5 text-success-600" />
          </div>
          <div>
            <div className="text-xs text-ink-500">Avg. Improvement</div>
            <div className="text-lg font-bold text-ink-900">+15.3%</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

/* ───────────────────────── STATS ───────────────────────── */
function StatsSection() {
  const stats = [
    { value: 99.98, suffix: '%', label: 'Success Rate' },
    { value: 240, suffix: 'ms', label: 'Avg. Latency' },
    { value: 10, suffix: '+', label: 'Integrated Gateways' },
    { value: 180, suffix: '+', label: 'Countries' },
  ];

  return (
    <section className="py-20 bg-primary-900 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="relative container-8xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold gradient-text-light">
                  <Counter
                    value={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.value % 1 !== 0 ? 2 : 0}
                  />
                </div>
                <div className="mt-2 text-sm text-ink-300 font-medium">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── GATEWAY NETWORK ───────────────────────── */
function GatewayNetworkSection() {
  const gateways = [
    { name: 'Razorpay', logo: '/partners/razorpay.png' },
    { name: 'Stripe', logo: '/partners/stripe.png' },
    { name: 'Cashfree', logo: '/partners/cashfree.png' },
    { name: 'Adyen', logo: '/partners/adyen.png' },
    { name: 'PayU', logo: '/partners/payu.png' },
    { name: 'BennuPay', logo: '/partners/bennupay.png' },
    { name: 'Chargebee', logo: '/partners/chargebee.png' },
    { name: 'Easebuzz', logo: '/partners/easebuzz.png' },
    { name: 'SabPaisa', logo: '/partners/sabpaisa.png' },
    { name: 'SafePay', logo: '/partners/safepay.png' },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Gateway Network"
            title="Connect to 10+ gateways instantly"
            subtitle="Add, remove, or switch payment gateways without changing a single line of code."
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {gateways.map((gw) => (
            <Reveal key={gw.name} delay={0.05}>
              <div className="group bg-ink-50 rounded-2xl p-6 text-center border border-ink-100 hover:border-accent-300 hover:shadow-xl hover:bg-white transition-all duration-300">
                {gw.logo && (
                  <img 
                    src={gw.logo} 
                    alt={gw.name} 
                    className="h-12 w-auto object-contain mx-auto mb-3 group-hover:scale-110 transition-transform"
                  />
                )}
                <span className="text-sm font-medium text-ink-700">{gw.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── ORCHESTRATOR ENGINE ───────────────────────── */
function OrchestratorEngineSection() {
  const features = [
    {
      icon: Brain,
      title: 'Intelligent Routing Engine',
      desc: 'Routes payments to the optimal gateway based on success rates, cost, latency, and merchant preferences.',
    },
    {
      icon: Network,
      title: 'Multi-Gateway Integration',
      desc: 'Seamless integration with Razorpay, Stripe, Cashfree, Adyen, PayU, Chargebee, and more.',
    },
    {
      icon: Gauge,
      title: 'Real-time Performance Monitoring',
      desc: 'Continuous health checks and performance monitoring of all connected gateways.',
    },
    {
      icon: Shield,
      title: 'Risk-based Routing',
      desc: 'Automatically route high-risk transactions through gateways with better fraud detection.',
    },
    {
      icon: Activity,
      title: 'Dynamic Failover',
      desc: 'Automatic failover to backup gateways during downtime or high failure rates.',
    },
    {
      icon: Server,
      title: 'Merchant-Specific Rules',
      desc: 'Configure routing rules per merchant based on their business requirements and preferences.',
    },
  ];

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Orchestrator Engine"
            title="Powerful orchestration at scale"
            subtitle="Our orchestrator controller and service handle everything from routing decisions to gateway integration."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 0.1}>
              <div className="group h-full bg-white rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── MERCHANT ROUTING ───────────────────────── */
function MerchantRoutingSection() {
  const routingStrategies = [
    {
      icon: ArrowLeftRight,
      title: 'Smart Routing',
      desc: 'Route based on success rates, cost, latency, and gateway availability.',
    },
    {
      icon: DollarSign,
      title: 'Cost-Optimized Routing',
      desc: 'Route to lowest-cost gateways while maintaining acceptable success rates.',
    },
    {
      icon: Zap,
      title: 'Speed-Optimized Routing',
      desc: 'Route to fastest gateways for better customer experience.',
    },
    {
      icon: Shield,
      title: 'Risk-Optimized Routing',
      desc: 'Route to gateways with better fraud detection for high-risk transactions.',
    },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Merchant Routing"
            title="Flexible routing for every merchant"
            subtitle="Configure routing rules per merchant based on their specific business needs and preferences."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {routingStrategies.map((strategy, i) => (
            <Reveal key={strategy.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl p-8 bg-ink-50 border border-ink-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 shrink-0">
                    <strategy.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-ink-900">{strategy.title}</h3>
                    <p className="text-sm text-ink-500 mt-1">{strategy.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── BENEFITS ───────────────────────── */
function BenefitsSection() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Higher Success Rates',
      desc: 'Intelligent routing increases transaction success rates by 12-15% on average.',
      stat: '+15.3%',
    },
    {
      icon: Zap,
      title: 'Reduced Latency',
      desc: 'Route to the fastest gateways to minimize transaction processing time.',
      stat: '240ms',
    },
    {
      icon: RefreshCw,
      title: 'Automatic Failover',
      desc: 'Instant failover to backup gateways during downtime or high failure rates.',
      stat: '99.98%',
    },
    {
      icon: DollarSign,
      title: 'Optimized Costs',
      desc: 'Route to lower-cost gateways while maintaining high success rates.',
      stat: '-22%',
    },
  ];

  return (
    <section className="section-pad bg-ink-50">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Business Impact"
            title="What you gain with intelligent routing"
            subtitle="Real results that drive your business forward."
          />
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl p-8 bg-white border border-ink-100 hover:border-accent-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500">
                      <benefit.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink-900">{benefit.title}</h3>
                      <p className="text-sm text-ink-500 mt-1">{benefit.desc}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold gradient-text">{benefit.stat}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── INTEGRATION CAPABILITIES ───────────────────────── */
function IntegrationCapabilitiesSection() {
  const capabilities = [
    {
      icon: Layers,
      title: 'Single API Integration',
      desc: 'One API to connect to all gateways. No need to integrate each gateway separately.',
    },
    {
      icon: Network,
      title: 'Webhook Management',
      desc: 'Centralized webhook handling for all gateways with event routing and logging.',
    },
    {
      icon: Server,
      title: 'Gateway Pricing & Rates',
      desc: 'Manage gateway pricing, rates, and fee structures from a single dashboard.',
    },
    {
      icon: Building2,
      title: 'Merchant Registration',
      desc: 'Streamlined merchant onboarding with document verification and KYC.',
    },
    {
      icon: Shield,
      title: 'HMAC Security',
      desc: 'HMAC-signed webhooks and API requests for enhanced security.',
    },
    {
      icon: Globe,
      title: 'Multi-Currency Support',
      desc: 'Accept payments in multiple currencies with automatic FX rate management.',
    },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Integration Capabilities"
            title="Everything you need in one platform"
            subtitle="From merchant registration to webhook management — complete payment infrastructure."
          />
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, i) => (
            <Reveal key={capability.title} delay={(i % 3) * 0.1}>
              <div className="group h-full bg-ink-50 rounded-2xl p-8 border border-ink-100 hover:border-accent-300 hover:bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary-600 to-accent-500 w-fit mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                  <capability.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-ink-900 mb-2">{capability.title}</h3>
                <p className="text-sm text-ink-500 leading-relaxed">{capability.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── HOW IT WORKS ───────────────────────── */
function HowItWorksSection() {
  const steps = [
    {
      icon: CreditCard,
      title: 'Payment Initiated',
      desc: 'Customer initiates payment through your checkout or application.',
    },
    {
      icon: Brain,
      title: 'Smart Decision',
      desc: 'Orchestrator analyzes success rates, costs, and latency of all gateways.',
    },
    {
      icon: Route,
      title: 'Optimal Routing',
      desc: 'Payment is routed to the best gateway based on your configured rules.',
    },
    {
      icon: CheckCircle,
      title: 'Success Confirmed',
      desc: 'Transaction completes with maximum success rate and minimal latency.',
    },
  ];

  return (
    <section className="section-pad bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full" />

      <div className="relative container-8xl">
        <Reveal>
          <SectionHeading
            badge="How It Works"
            dark
            title="Smart routing in 4 steps"
            subtitle="Every transaction is optimized through our intelligent orchestration layer."
          />
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 via-accent-500 to-accent-600" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.15}>
                <div className="flex flex-col items-center text-center">
                  <motion.div
                    className="relative z-10 p-5 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 shadow-2xl"
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                  >
                    <step.icon className="h-7 w-7 text-white" />
                    <div className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-white text-ink-900 text-xs font-bold flex items-center justify-center shadow-lg">
                      {i + 1}
                    </div>
                  </motion.div>
                  <h3 className="mt-6 text-lg font-bold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm text-ink-400 max-w-xs">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── PRICING OPTIMIZATION ───────────────────────── */
function PricingOptimizationSection() {
  const gateways = [
    { name: 'Razorpay', cost: '1.99%', success: '98.7%' },
    { name: 'Stripe', cost: '2.99%', success: '97.2%' },
    { name: 'Cashfree', cost: '1.75%', success: '96.8%' },
    { name: 'Adyen', cost: '2.49%', success: '95.4%' },
  ];

  return (
    <section className="section-pad bg-white">
      <div className="container-8xl">
        <Reveal>
          <SectionHeading
            badge="Pricing Optimization"
            title="Balance cost and performance"
            subtitle="Route to the optimal gateway based on cost, success rate, and latency."
          />
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-2xl border border-ink-100">
          <table className="w-full">
            <thead className="bg-ink-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink-700">Gateway</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink-700">Cost</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink-700">Success Rate</th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-ink-700">Optimized</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink-100 bg-white">
              {gateways.map((gw) => (
                <tr key={gw.name} className="hover:bg-ink-50 transition-colors">
                  <td className="px-6 py-4 text-sm font-medium text-ink-900">{gw.name}</td>
                  <td className="px-6 py-4 text-sm text-ink-600">{gw.cost}</td>
                  <td className="px-6 py-4 text-sm text-ink-600">{gw.success}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-100 text-accent-700 text-xs font-medium">
                      <Sparkles className="h-3 w-3" />
                      Recommended
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── CTA ───────────────────────── */
function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-ink-950 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg-dark opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-accent-500/15 to-primary-500/15 blur-[130px] rounded-full" />

      <div className="relative container-8xl text-center">
        <Reveal>
          <Badge variant="dark">
            <GitBranch className="h-3 w-3" />
            Start Optimizing
          </Badge>
          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl text-balance">
            Ready to maximize your <span className="gradient-text-light">payment success?</span>
          </h2>
          <p className="mt-4 text-lg text-ink-400 max-w-2xl mx-auto">
            Start routing payments intelligently today. Talk to our team and see how our
            orchestrator engine can transform your payment performance across 10+ gateways.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/contact" variant="primary" size="lg">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button to="/api-docs" variant="dark" size="lg">
              Explore Orchestrator API
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}