import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Cog, Search, Network, CheckCircle2, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => (
  <Layout>
    <PageHero
      title="Services"
      description="Comprehensive IT Solutions, Tailored for Your Success"
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]}
    />

    {/* Services Section */}
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
            Our Services
          </h2>
          <div className="space-y-6 md:space-y-8">
            {[
              {
                icon: Cog,
                title: "Managed Services",
                desc: "Ensure smooth, secure, and uninterrupted IT operations with our proactive Managed Services. We provide 24/7 monitoring, support, and maintenance to reduce downtime and enhance performance.",
                link: "/services/managed-services",
                linkText: "Learn more about our Managed Services"
              },
              {
                icon: Search,
                title: "Network Audit",
                desc: "Gain full visibility into your network infrastructure with our expert Network Audit Services. We identify risks, inefficiencies, and security gaps to help you optimize performance and stay compliant.",
                link: "/services/network-audit",
                linkText: "Explore Network Audit Services"
              },
              {
                icon: Network,
                title: "Structured Cabling",
                desc: "Build a reliable, scalable foundation for your IT systems with our Structured Cabling Solutions. From planning to implementation, we deliver neat, organized, and high-performance cabling infrastructure.",
                link: "/services/structured-cabling",
                linkText: "Discover Structured Cabling Solutions"
              },
              {
                icon: CheckCircle2,
                title: "Service Level Agreements (SLA)",
                desc: "Guarantee uptime, rapid response, and reliable IT performance with our tailored SLA Services. Backed by defined service metrics and 24/7 support, we ensure your critical systems run smoothly and securely.",
                link: "/services/sla",
                linkText: "Learn more about our SLA Services"
              },
              {
                icon: Users,
                title: "IT Resource Outsourcing",
                desc: "Access skilled IT professionals without the overhead through our IT Resource Outsourcing services. We provide certified experts to support your projects, streamline operations, and reduce staffing costs.",
                link: "/services/it-outsourcing",
                linkText: "Explore IT Resource Outsourcing"
              }
            ].map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 md:p-8 bg-card rounded-xl border border-border shadow-card"
                >
                  <div className="flex gap-4 md:gap-6 mb-4 md:mb-6">
                    <Icon className="w-8 md:w-10 h-8 md:h-10 text-electric flex-shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-display text-xl md:text-2xl font-bold text-card-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                        {service.desc}
                      </p>
                      <Link
                        to={service.link}
                        className="inline-block text-electric font-semibold hover:text-electric/80 transition-colors text-sm md:text-base"
                      >
                        {service.linkText}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Services;
