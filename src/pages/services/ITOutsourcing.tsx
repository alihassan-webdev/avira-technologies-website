import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  DollarSign,
  TrendingUp,
  Users,
  Zap,
  Target,
  Briefcase,
  Clock,
  FileCheck,
  Network,
  Headphones,
  Server,
  Cloud,
  Code,
  Shield,
  Database,
} from "lucide-react";

const ITOutsourcing = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      desc: "Reduce operational costs by eliminating full-time hiring and training expenses."
    },
    {
      icon: TrendingUp,
      title: "Scalability & Flexibility",
      desc: "Scale your IT team up or down based on project or business needs."
    },
    {
      icon: Users,
      title: "Access to Skilled Talent",
      desc: "Get certified professionals with proven expertise, ready to work."
    },
    {
      icon: Zap,
      title: "Faster Deployment",
      desc: "Avoid long recruitment cycles and onboard resources quickly."
    },
    {
      icon: Target,
      title: "Focus on Core Business",
      desc: "Leave the technical work to us, so you can concentrate on growth."
    },
    {
      icon: Briefcase,
      title: "Reduced HR Overhead",
      desc: "We handle resource sourcing, payroll, and administrative processes."
    },
    {
      icon: Clock,
      title: "24/7 Availability Options",
      desc: "Round-the-clock support for mission-critical operations."
    },
    {
      icon: FileCheck,
      title: "Contractual Clarity",
      desc: "Clearly defined SLAs and deliverables for peace of mind."
    },
  ];

  const roles = [
    { icon: Network, title: "Network Engineers & Administrators" },
    { icon: Headphones, title: "IT Support & Helpdesk Technicians" },
    { icon: Server, title: "System Administrators" },
    { icon: Cloud, title: "Cloud & DevOps Engineers" },
    { icon: Code, title: "Software Developers" },
    { icon: Briefcase, title: "Project Managers & Business Analysts" },
    { icon: Shield, title: "Security Analysts & Compliance Officers" },
    { icon: Database, title: "Database & Infrastructure Specialists" },
  ];

  const offerings = [
    "Onsite & Remote IT Professionals",
    "Dedicated or Shared Resources",
    "Short-Term Contracts & Long-Term Placements",
    "Role-Based Staffing for Projects or Operations",
  ];

  return (
    <Layout>
      <PageHero
        title="IT Resource Outsourcing"
        description="Expert Talent, On Demand"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "IT Resource Outsourcing", path: "/services/it-outsourcing" }
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
              Flexible. Scalable. Expert IT Talent — When You Need It.
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                In today's fast-paced business environment, maintaining a comprehensive in-house IT team can be costly and divert focus from core objectives. Avira Technologies offers IT Resource Outsourcing services to provide access to certified and reliable IT professionals without the overhead of full-time staff.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Whether you need short-term support for specific challenges or long-term staffing solutions, our outsourcing model is tailored to your needs, allowing for agile scaling and improved operational efficiency. With our dedicated IT experts, you can focus on driving your business forward and achieving your strategic goals.
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
              Key Benefits of IT Resource Outsourcing
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

      {/* Available IT Roles */}
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
              Available IT Roles We Provide
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {roles.map((role, i) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card flex items-center gap-4"
                  >
                    <Icon className="w-6 md:w-8 h-6 md:h-8 text-electric flex-shrink-0" />
                    <h3 className="font-semibold text-card-foreground text-base md:text-lg">{role.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
              What We Offer
            </h2>
            <div className="space-y-3 md:space-y-4">
              {offerings.map((offering, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-lg border border-border"
                >
                  <div className="w-3 h-3 rounded-full bg-electric flex-shrink-0 mt-2 md:mt-2.5" />
                  <p className="text-sm md:text-base text-card-foreground">{offering}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ITOutsourcing;
