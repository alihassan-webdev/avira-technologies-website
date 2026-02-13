import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Network, Server, Lock, Wifi, Globe, Zap, CheckCircle2, Database, Cable, Activity } from "lucide-react";

const NetworkInfrastructure = () => (
  <Layout>
    <PageHero
      title="Network Infrastructure"
      description="Robust, Scalable, and Secure Network Solutions"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Network Infrastructure", path: "/solutions/network-infrastructure" }
      ]}
    />

    {/* Introduction Section */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed italic">
            Your network is the backbone of your business - make it strong, secure, and future-ready.
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
            Enterprise-Grade Network Infrastructure Solutions
          </h2>
          <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-muted-foreground leading-relaxed">
            <p>
              In today's hyperconnected world, a reliable network infrastructure is critical to business success. Avira Technologies designs, deploys, and manages robust network solutions that enable seamless connectivity, ensure data security, and support your organization's growth.
            </p>
            <p>
              From local area networks and wide area networks to cloud integration and network security, we provide end-to-end infrastructure solutions backed by enterprise expertise and 24/7 support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Our Services */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10 text-center">
            Our Network Solutions Include
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                icon: Cable,
                title: "Structured Cabling & Copper Solutions",
                desc: "Organized, standardized cabling infrastructure that supports reliable data transmission across your facilities."
              },
              {
                icon: Wifi,
                title: "Wireless Networks & WiFi Coverage",
                desc: "Enterprise-grade WiFi solutions providing seamless connectivity and high-speed data access throughout your organization."
              },
              {
                icon: Server,
                title: "Server & Storage Solutions",
                desc: "Scalable server infrastructure and storage systems designed for performance, reliability, and data protection."
              },
              {
                icon: Lock,
                title: "Network Security & Firewalls",
                desc: "Multi-layered security solutions protecting your network from threats, unauthorized access, and data breaches."
              },
              {
                icon: Globe,
                title: "Wide Area Networks & Connectivity",
                desc: "Secure WAN solutions connecting multiple offices and remote locations for unified business operations."
              },
              {
                icon: Database,
                title: "Network Monitoring & Management",
                desc: "Real-time monitoring and proactive management ensuring optimal network performance and uptime."
              },
            ].map((item, i) => {
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
                  <div className="flex gap-3 md:gap-4 mb-2 md:mb-3">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                    <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground ml-8 md:ml-10 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10 text-center">
            Why Choose Avira for Network Infrastructure
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "End-to-End Design & Implementation",
                desc: "From network planning to deployment and optimization, we handle every aspect of your infrastructure."
              },
              {
                title: "Enterprise-Grade Security",
                desc: "Built-in security protocols protecting your network from evolving threats and compliance requirements."
              },
              {
                title: "Scalability & Future-Ready",
                desc: "Networks designed to grow with your business, supporting new users, applications, and technologies."
              },
              {
                title: "24/7 Monitoring & Support",
                desc: "Continuous network monitoring and rapid response to issues ensuring maximum uptime and performance."
              },
              {
                title: "Cost Optimization",
                desc: "Efficient network design reducing operational costs while maintaining performance and reliability."
              },
              {
                title: "Expert Team",
                desc: "Certified network engineers and architects with proven expertise in enterprise infrastructure."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card"
              >
                <div className="flex gap-3 md:gap-4 mb-2 md:mb-3">
                  <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground ml-8 md:ml-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Industries Served */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Network Solutions for Every Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              "Corporate Offices and IT Parks",
              "Financial Institutions and Banks",
              "Healthcare Facilities and Hospitals",
              "Educational Institutions",
              "Manufacturing and Warehouses",
              "Hospitality and Retail",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card flex items-center gap-3 md:gap-4"
              >
                <Activity className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0" />
                <p className="text-sm md:text-base font-semibold text-card-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default NetworkInfrastructure;
