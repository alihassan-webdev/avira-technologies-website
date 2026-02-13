import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Network, Wifi, Lock, Server, Database, Cable, Cloud, BarChart3 } from "lucide-react";

const EnterpriseWork = () => (
  <Layout>
    <PageHero
      title="Enterprise Network Solutions"
      description="Build resilient, scalable enterprise networks with intelligent routing and advanced connectivity"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Enterprise Network", path: "/solutions/enterprise-work" }
      ]}
    />

    {/* Enterprise Network Solutions */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Enterprise Network Solutions
          </h2>
          <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12 mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Software-Defined Networking */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Network className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Software-Defined Networking (SDN/SD-WAN)
              </h3>
              <p className="text-muted-foreground text-sm">Advanced networking architecture for flexible, scalable enterprise connectivity</p>
            </motion.div>

            {/* Wireless & Mobility */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Wifi className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Wireless & Mobility Solutions
              </h3>
              <p className="text-muted-foreground text-sm">Enterprise-grade WiFi and mobile connectivity for seamless workforce mobility</p>
            </motion.div>

            {/* Unified Communications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <BarChart3 className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Unified Communications
              </h3>
              <p className="text-muted-foreground text-sm">Integrated voice, video, and messaging platforms for enhanced collaboration</p>
            </motion.div>

            {/* Network Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Lock className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Network Security
              </h3>
              <p className="text-muted-foreground text-sm">Comprehensive security solutions protecting your network infrastructure</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Network Infrastructure Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Network Infrastructure
          </h3>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Robust Foundations for Digital Transformation
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            IT Infrastructure Solutions encompass all foundational hardware, software, and services that support the delivery of business-critical applications and operations. Avira Technologies provides end-to-end IT infrastructure services to ensure reliability, scalability, and security for growing businesses.
          </p>
        </motion.div>
      </div>
    </section>

    {/* IT Infrastructure Solutions */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Solutions under IT Infrastructure
          </h2>
          <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12 mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Data Center Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Server className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Data Center Solutions
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ Hyper Converged Infrastructure (HCI)</li>
                <li>✨ Server Virtualization (VMware/Nutanix)</li>
                <li>✨ Cloud Infrastructure and Hybrid Cloud Deployment</li>
              </ul>
            </motion.div>

            {/* Servers & Storage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Database className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Servers, Storage & Backup
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ Backup, Disaster Recovery, and Business Continuity</li>
                <li>✨ Data Center Solutions and Colocation Services</li>
                <li>✨ Power Solutions (UPS Systems)</li>
              </ul>
            </motion.div>

            {/* Structured Cabling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Cable className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Structured Cabling
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ CAT6/CAT7 Cabling</li>
                <li>✨ Fiber Optic Backbone Deployment</li>
                <li>✨ Cable Management Audits</li>
              </ul>
            </motion.div>

            {/* Network Operations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <BarChart3 className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Network Operations
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ AI-Powered Network Monitoring</li>
                <li>✨ Predictive Maintenance System</li>
                <li>✨ Capacity Planning Services</li>
              </ul>
            </motion.div>

            {/* Cloud Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Cloud className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Multi-Cloud Management
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ Hybrid Cloud Infrastructure</li>
                <li>✨ Private Cloud Deployment</li>
                <li>✨ Cloud Migration Services</li>
              </ul>
            </motion.div>

            {/* IT Asset Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Lock className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                IT Asset & Security
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✨ IT Asset Procurement, Deployment & Management</li>
                <li>✨ Infrastructure Security (Endpoint Protection)</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Avira */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Why Choose Avira for Enterprise Networks?
          </h2>
          <div className="w-12 h-1 bg-gradient-electric rounded-full mb-8 mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "End-to-End Solutions",
                desc: "From networks to infrastructure, we design complete solutions tailored to your enterprise",
                icon: Network
              },
              {
                title: "Scalable Architecture",
                desc: "Infrastructure that grows with your business needs without compromising performance",
                icon: Cloud
              },
              {
                title: "24/7 Support",
                desc: "Round-the-clock monitoring and support to ensure maximum uptime",
                icon: BarChart3
              },
              {
                title: "Security First",
                desc: "Enterprise-grade security integrated throughout your network infrastructure",
                icon: Lock
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="rounded-xl bg-card border border-border shadow-card p-8 flex flex-col h-full"
                >
                  <Icon className="w-8 h-8 text-electric mb-4 flex-shrink-0" />
                  <h3 className="font-display font-semibold text-lg text-card-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default EnterpriseWork;
