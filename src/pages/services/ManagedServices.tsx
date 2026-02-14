import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  DollarSign,
  Shield,
  CheckCircle,
  Users,
  Lock,
  AlertTriangle,
  BarChart3,
  FileCheck,
  Database,
  Cloud,
  Phone,
  Camera,
  Video,
  Server,
  ArrowRight,
} from "lucide-react";

const ManagedServices = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Control",
      desc: "No expensive emergency repairs and budget-friendly flat-rate pricing"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      desc: "Automated compliance with regulations"
    },
    {
      icon: CheckCircle,
      title: "Business Continuity",
      desc: "99.9%+ system uptime guarantees"
    },
    {
      icon: Users,
      title: "Expert Access",
      desc: "On-demand help desk (phone/chat/email)"
    },
  ];

  const services = [
    {
      icon: Lock,
      title: "Managed Security Operations (SecOps)",
      items: ["Managed firewall & intrusion prevention", "Vulnerability scanning & remediation", "Security incident event management (SIEM)", "Compliance reporting (GDPR, HIPAA, PCI-DSS)"]
    },
    {
      icon: Database,
      title: "Managed Data Protection Services",
      items: ["Automated cloud/on-prem backups", "Ransomware protection", "Data recovery testing"]
    },
    {
      icon: Phone,
      title: "Managed Contact Center",
      desc: "From optimizing call flows to ensuring exceptional customer experiences, our comprehensive solution is designed to empower your contact center's performance."
    },
    {
      icon: Camera,
      title: "Managed Surveillance",
      desc: "Our comprehensive solution ensures not just surveillance but smart protection, offering peace of mind like never before."
    },
    {
      icon: Video,
      title: "Managed Video Conferencing",
      desc: "Elevate your virtual collaboration experience. Join us in redefining the way you connect, communicate, and collaborate."
    },
    {
      icon: Server,
      title: "Managed Data Center",
      desc: "Your digital ambitions find their home. Beyond the servers and cables, we offer a symphony of efficiency and reliability."
    },
    {
      icon: Users,
      title: "IT Resource Outsourcing",
      desc: "It's not just about outsourcing; it's about gaining a strategic partner invested in your success. Let's redefine productivity together."
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure Management",
      items: ["AWS/Azure/GCP resource optimization", "Cloud security configuration", "Backup & disaster recovery oversight"]
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Managed Services"
        description="Proactive IT Support, Seamless Business Operations"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Managed Services", path: "/services/managed-services" }
        ]}
      />

      {/* What are Managed Services */}
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
              What are Managed Services?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-6">
              Managed IT Services mean we become your outsourced IT department – proactively monitoring, securing, and maintaining your technology so you can focus on your business.
            </p>
            <div className="space-y-4">
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-muted-foreground">Having a 24/7 team of IT experts (without hiring them)</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-muted-foreground">Paying a predictable monthly fee (no surprise bills)</p>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <p className="text-sm md:text-base text-muted-foreground">Preventing problems before they happen</p>
              </div>
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
              Key Benefits of Managed Services
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

      {/* Main Message */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4">
              Proactive, Predictable, and Scalable IT Operations
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed mb-2">
              So You Can Focus on Growth
            </p>
            <p className="text-base md:text-lg text-electric font-semibold mb-6">
              Using Managed IT Services by Avira Technologies
            </p>
            <p className="text-sm md:text-base text-muted-foreground">
              We handle your IT, so you can focus on your business. Our Managed Services included but not limited to:
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
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
                    <h3 className="font-semibold text-card-foreground text-base md:text-lg">{service.title}</h3>
                  </div>
                  {service.items ? (
                    <ul className="space-y-2">
                      {service.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-xs md:text-sm text-muted-foreground">
                          <ArrowRight className="w-3 h-3 flex-shrink-0 mt-1" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-xs md:text-sm text-muted-foreground">{service.desc}</p>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ManagedServices;
