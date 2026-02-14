import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Clock,
  Shield,
  Zap,
  DollarSign,
  TrendingUp,
  Lock,
  Phone,
  Wrench,
  AlertTriangle,
  BarChart3,
  CheckCircle,
} from "lucide-react";

const SLA = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Guaranteed Response and Resolution Times",
      desc: "Clearly defined timelines ensure swift action on incidents, minimizing downtime and service disruptions."
    },
    {
      icon: CheckCircle,
      title: "Improved Service Quality and Accountability",
      desc: "SLAs hold the IT provider accountable for maintaining consistent service levels and performance metrics."
    },
    {
      icon: Zap,
      title: "Proactive Monitoring and Maintenance",
      desc: "Most SLAs include proactive system monitoring to detect and address issues before they impact operations."
    },
    {
      icon: DollarSign,
      title: "Predictable IT Costs",
      desc: "SLAs offer a fixed pricing structure, making it easier to budget for IT support without unexpected expenses."
    },
    {
      icon: TrendingUp,
      title: "Increased Operational Efficiency",
      desc: "With IT systems consistently maintained and optimized, your team can focus on core business functions."
    },
    {
      icon: Shield,
      title: "Enhanced Security and Compliance",
      desc: "SLAs often cover regular security updates, patching, and compliance checks to meet industry standards."
    },
    {
      icon: Phone,
      title: "24/7 Support Availability",
      desc: "Round-the-clock support ensures your business is protected and operational at all times, including off-hours."
    },
    {
      icon: Wrench,
      title: "Customized Coverage for Business Needs",
      desc: "SLA tiers can be tailored to your specific operational requirements, from standard business hours to mission-critical 24/7 support."
    },
    {
      icon: AlertTriangle,
      title: "Reduced Risk of Downtime",
      desc: "By ensuring consistent uptime and rapid incident response, SLAs reduce the risk of costly outages."
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring and Reporting",
      desc: "Regular performance reports give you visibility into IT health, allowing for informed decision-making and continuous improvement."
    },
  ];

  const features = [
    "Defined SLAs with measurable performance",
    "Proactive issue prevention and fast incident response",
    "Flexible support plans - 8/5, 24/7, or custom hours",
    "Priority-based escalation and ticket resolution",
    "Security-focused monitoring and protection built-in",
    "Custom plans tailored to business size and industry",
  ];

  return (
    <Layout>
      <PageHero
        title="Service Level Agreements (SLA)"
        description="Guaranteed IT Support & Uptime"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Service Level Agreements", path: "/services/sla" }
        ]}
      />

      {/* Introduction */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
              SLA-Based IT Services by Avira Technologies
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                In a digital-first world, system downtime is not an option. That's why Avira Technologies offers tailored Service Level Agreements (SLAs) to ensure your business IT runs smoothly, securely, and without disruption.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Our SLA-backed services provide defined response times, proactive monitoring, scheduled maintenance, and guaranteed support availability, giving your business peace of mind and consistent performance.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Whether you need basic coverage or mission-critical 24/7 service, our SLAs are designed to align with your operational needs and risk tolerance.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
              Key Benefits of Service Level Agreements for IT Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, i) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card"
                  >
                    <div className="flex gap-3 md:gap-4 mb-3">
                      <Icon className="w-6 md:w-8 h-6 md:h-8 text-electric flex-shrink-0" />
                      <h3 className="font-semibold text-card-foreground text-base md:text-lg">{benefit.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground ml-9 md:ml-12">{benefit.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
              What Our SLA Services Include
            </h2>
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 md:gap-4 p-3 md:p-4 bg-secondary rounded-lg border border-border"
                >
                  <div className="w-3 h-3 rounded-full bg-electric flex-shrink-0 mt-2 md:mt-2.5" />
                  <p className="text-sm md:text-base text-card-foreground">{feature}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose SLA Service from Avira Technologies?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
              Our SLA-based IT support services are backed by industry expertise, proven reliability, and a commitment to your business continuity. With Avira Technologies, you get more than support – you get a strategic partner dedicated to keeping your systems running, secure, and optimized for growth.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SLA;
