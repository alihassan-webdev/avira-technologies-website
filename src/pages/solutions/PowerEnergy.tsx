import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Sun, Zap, Battery, Home, Building2, Factory, Grid3x3, Wind, Shield, CheckCircle2, Smartphone, Clock, TrendingDown, Leaf, Award } from "lucide-react";

const PowerEnergy = () => (
  <Layout>
    <PageHero
      title="Power & Energy"
      description="Clean, Continuous, and Connected Energy Solutions"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Power & Energy", path: "/solutions/power-energy" }
      ]}
    />

    {/* Hero Statement Section */}
    <section className="py-12 md:py-20 bg-gradient-to-r from-electric/10 to-yellow-500/10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full text-center"
        >
          <div className="space-y-3 md:space-y-4">
            <p className="font-display text-2xl md:text-4xl font-bold text-foreground">
              In the future, energy will be clean,
            </p>
            <p className="font-display text-2xl md:text-4xl font-bold text-electric">
              Continuous, and Connected.
            </p>
            <p className="font-display text-xl md:text-3xl font-bold text-foreground mt-6">
              Avira brings that future to your doorstep today.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Solar & Power Energy Section */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 mb-4 md:mb-6">
            <Sun className="w-6 md:w-8 h-6 md:h-8 text-yellow-500 flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
                Solar and Power Energy
              </h2>
              <p className="text-sm md:text-lg text-electric font-semibold mb-3 md:mb-4">
                Smart Solar and Backup Solutions for Smart Businesses.
              </p>
              <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-muted-foreground leading-relaxed">
                <p className="italic">Invest in Solar Today, Lead in Sustainability Tomorrow.</p>
                <p className="italic">Sustainable Power. Limitless Possibilities.</p>
                <p>
                  We believe that energy shouldn't be a burden on the planet or your finances. Our solar energy solutions are crafted to help homes, offices, and industries lower their electricity costs, reduce their environmental footprint, and seize control of their energy future.
                </p>
                <p>
                  Whether you're aiming to offset your grid consumption or transition completely off-grid, we provide customized solar solutions tailored to your energy requirements and budget. From advanced inverters and photovoltaic panels to hybrid battery systems, Avira offers comprehensive solar integration with monitoring, performance optimization, and ongoing maintenance support.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* What Sets Us Apart */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3 md:mb-6 text-center">
            What Sets Us Apart
          </h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
            {[
              { title: "Customized Solutions", icon: Wind },
              { title: "Proven Expertise", icon: Award },
              { title: "End-to-End Services", icon: CheckCircle2 },
              { title: "Sustainable Focus", icon: Leaf },
              { title: "24/7 Support", icon: Clock },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card flex items-start gap-3"
                >
                  <Icon className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4 md:mb-8 text-center">
            Why Choose Us for Solar Solutions
          </h2>
          <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
            <p>
              We deliver solar solutions tailored to your specific energy needs, whether for homes, businesses, or industrial facilities. Our mission is to help you save on electricity bills, ensure long-term system reliability, and support a cleaner, greener future.
            </p>
            <p>
              We combine high-quality components with expert engineering and installation, ensuring every solar system performs efficiently for years to come.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {[
              { text: "Custom Solar Solutions designed to match your usage and goals", icon: Sun },
              { text: "Premium Products and Professional Installation for lasting performance", icon: Zap },
              { text: "Reduced Energy Costs with an eco-friendly footprint", icon: TrendingDown },
              { text: "Sustainable Power that supports a low-carbon future", icon: Leaf },
              { text: "Advanced Solar Technology for homes, offices, and industries", icon: Building2 },
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
                  <div className="flex gap-3 md:gap-4">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                    <p className="text-xs md:text-sm text-card-foreground">{item.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Solution Types */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Our Solution Types
          </h2>
          <div className="grid md:grid-cols-3 gap-3 md:gap-4 mb-8">
            {[
              { label: "Residential", icon: Home },
              { label: "Commercial", icon: Building2 },
              { label: "Industrial", icon: Factory },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card text-center"
                >
                  <Icon className="w-8 md:w-10 h-8 md:h-10 text-electric mx-auto mb-2 md:mb-3" />
                  <p className="font-semibold text-card-foreground text-sm md:text-base">{item.label}</p>
                </motion.div>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-3 md:gap-4">
            {[
              { label: "On-Grid Solution", icon: Grid3x3 },
              { label: "Off-Grid Solution", icon: Wind },
              { label: "Hybrid Solution", icon: Battery },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card text-center"
                >
                  <Icon className="w-8 md:w-10 h-8 md:h-10 text-electric mx-auto mb-2 md:mb-3" />
                  <p className="font-semibold text-card-foreground text-sm md:text-base">{item.label}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>

    {/* UPS Power Solutions */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex flex-col md:flex-row md:items-start gap-3 md:gap-4 mb-4 md:mb-6">
            <Battery className="w-6 md:w-8 h-6 md:h-8 text-electric flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-2 md:mb-3">
                UPS Power Solutions
              </h2>
              <p className="text-sm md:text-lg text-electric font-semibold mb-3 md:mb-4">
                Reliability When It Matters Most
              </p>
              <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-muted-foreground leading-relaxed">
                <p>
                  Reliable Power Solutions and Services for all Environments. Empower your infrastructure with APC because every second of uptime counts.
                </p>
                <p className="font-semibold text-foreground">APC by Schneider Electric</p>
                <p>
                  At Avira Technologies, we proudly offer APC by Schneider Electric UPS systems, globally trusted for their performance, reliability, and innovation. Whether you're protecting home electronics or critical enterprise infrastructure, APC UPS solutions provide uninterrupted power and peace of mind.
                </p>
                <p className="italic text-electric">
                  Because Downtime Is Not an Option.
                </p>
                <p>
                  At Avira Technologies, we understand that an Uninterrupted Power Supply (UPS) is vital for every business, whether it's a small office or a large enterprise. Power outages can disrupt operations, cause data loss, and impact productivity. Our UPS solutions ensure that your systems stay running when the grid goes down.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Key Features */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 text-center">
            Key Features and Benefits of APC UPS Systems
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              { title: "Reliable Power Protection", desc: "APC UPS units deliver consistent battery backup during outages, protecting critical IT systems, servers, and sensitive electronics from unexpected shutdowns or damage, ensuring uninterrupted business continuity." },
              { title: "Advanced Battery Management", desc: "With intelligent charging and real-time battery diagnostics, APC's battery management technology maximizes performance and lifespan, so your backup power is always ready when it matters most." },
              { title: "Energy Efficiency", desc: "Select APC models include green-mode operation and energy-saving architecture, helping reduce energy consumption and operational costs, while supporting your organization's sustainability goals." },
              { title: "Scalable Runtime Options", desc: "APC UPS systems can be extended with additional battery packs, providing customizable runtime for businesses that require longer backup during extended outages or controlled system shutdowns." },
              { title: "Intuitive LCD Interface", desc: "User-friendly LCD displays offer real-time system insights, including load levels, battery health, and configuration options, making monitoring and management simple and accessible." },
              { title: "Network and Remote Manageability", desc: "APC UPS units can be equipped with network management cards for remote access, allowing IT administrators to manage, monitor, and troubleshoot power systems across multiple sites with ease." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card"
              >
                <div className="flex gap-3 md:gap-4">
                  <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-card-foreground text-sm md:text-base mb-2">{item.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Our UPS Solution Covers */}
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
            Our UPS Solutions Cover
          </h2>
          <div className="space-y-2 md:space-y-3">
            {[
              "Online and Line-Interactive UPS Systems (Single-phase and Three-phase)",
              "Premium Products and Professional Installation for lasting performance",
              "Reduced Energy Costs with an eco-friendly footprint",
              "Sustainable Power that supports a low-carbon future",
              "Advanced Power Technology for homes, offices, and industries",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-2 md:gap-3 text-xs md:text-sm text-muted-foreground"
              >
                <Zap className="w-4 md:w-5 h-4 md:h-5 text-electric flex-shrink-0 mt-1" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Customers Trust Avira */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Why Customers Trust Avira
          </h2>
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Customized Solutions", desc: "Tailored energy solutions for your specific needs and budget" },
              { title: "Compliance-Aligned", desc: "Meets global standards and regulatory requirements" },
              { title: "24/7 Support", desc: "Continuous monitoring and rapid response when you need us" },
              { title: "Expert Installations", desc: "Professional team ensures optimal system performance" },
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
                  <Shield className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground ml-8 md:ml-10">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default PowerEnergy;
