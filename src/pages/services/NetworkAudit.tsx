import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Search,
  Eye,
  Lock,
  Zap,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
  Network,
  TrendingUp,
  Shield,
} from "lucide-react";

const NetworkAudit = () => {
  const benefits = [
    {
      icon: Eye,
      title: "Complete Visibility",
      desc: "See exactly what's happening across your entire network infrastructure"
    },
    {
      icon: Lock,
      title: "Security Gaps Identified",
      desc: "Discover vulnerabilities before attackers do"
    },
    {
      icon: TrendingUp,
      title: "Performance Optimization",
      desc: "Identify bottlenecks and inefficiencies affecting your business"
    },
    {
      icon: CheckCircle2,
      title: "Best Practices Alignment",
      desc: "Ensure your network meets industry standards and compliance requirements"
    },
  ];

  const auditProcess = [
    {
      icon: Search,
      title: "Discovery Phase",
      desc: "Comprehensive mapping of your network topology, devices, and connections"
    },
    {
      icon: BarChart3,
      title: "Assessment",
      desc: "Analyze design, configuration, performance metrics, and security posture"
    },
    {
      icon: AlertTriangle,
      title: "Vulnerability Analysis",
      desc: "Identify weaknesses, misconfigurations, and potential risks"
    },
    {
      icon: Zap,
      title: "Performance Testing",
      desc: "Evaluate bandwidth utilization, latency, and throughput"
    },
    {
      icon: Shield,
      title: "Security Audit",
      desc: "Check compliance with security standards (GDPR, HIPAA, PCI-DSS)"
    },
    {
      icon: Network,
      title: "Actionable Report",
      desc: "Receive detailed findings with prioritized recommendations"
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Network Audit"
        description="See Clearly. Secure Fully. Perform Better"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Network Audit", path: "/services/network-audit" }
        ]}
      />

      {/* What are Network Audits */}
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
              What are Network Audits?
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                In a rapidly evolving digital environment, network health, security, and performance are critical to business continuity. At Avira Technologies, our Network Audit Services offer deep visibility into your infrastructure, identifying gaps, risks, and inefficiencies so you can operate with confidence.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                We conduct comprehensive assessments of your network's design, configuration, performance, and security to ensure everything is aligned with industry best practices and your business objectives.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Whether you're preparing for an upgrade, facing performance issues, or simply want to validate your network integrity, our audits deliver clear, actionable insights.
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
              Key Benefits
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

      {/* Audit Process */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
              Our Audit Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {auditProcess.map((item, i) => {
                const Icon = item.icon;
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
                      <h3 className="font-semibold text-card-foreground text-base md:text-lg">{item.title}</h3>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground ml-9 md:ml-12">{item.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default NetworkAudit;
