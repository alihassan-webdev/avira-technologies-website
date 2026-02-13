import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Phone, MessageSquare, Users, Clock, BarChart3, Lock, Smartphone, Settings, CheckCircle2, Headphones } from "lucide-react";

const IPPabx = () => (
  <Layout>
    <PageHero
      title="IP PABX"
      description="Enterprise Voice Solutions. Crystal Clear. Completely Connected."
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "IP PABX", path: "/solutions/ip-pabx" }
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
            Unified communications that empower your team to stay connected, anywhere, anytime.
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
            Modern IP PABX Telephony Systems
          </h2>
          <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-muted-foreground leading-relaxed">
            <p>
              IP PABX (Private Automatic Branch Exchange) systems represent the evolution of business telephony. Avira Technologies delivers enterprise-grade IP PABX solutions featuring advanced call routing, voicemail, conferencing, and integration with modern collaboration tools.
            </p>
            <p>
              Whether you're a growing startup or an established enterprise, our IP PABX systems reduce costs, eliminate infrastructure constraints, and deliver the flexibility and features your business demands. From on-premises to cloud-based solutions, we support every deployment model.
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
            Our IP PABX Services
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                icon: Phone,
                title: "IP PABX System Design & Deployment",
                desc: "Customized IP PABX solutions tailored to your organization's size, industry, and communication requirements."
              },
              {
                icon: MessageSquare,
                title: "Voicemail & Auto-Attendant",
                desc: "Intelligent voicemail systems, IVR, and automated call routing ensuring callers reach the right department."
              },
              {
                icon: Users,
                title: "Conference Calling & Collaboration",
                desc: "Built-in conference bridges, call transfer, and hold-queue management for seamless team communication."
              },
              {
                icon: Smartphone,
                title: "Mobile & Remote Extensions",
                desc: "Extend IP PABX capabilities to mobile devices, enabling employees to work from anywhere with full features."
              },
              {
                icon: Clock,
                title: "Call Timing & Management",
                desc: "Call recording, call logs, detailed billing reports, and analytics for complete communication visibility."
              },
              {
                icon: BarChart3,
                title: "Integration with Business Tools",
                desc: "Seamless integration with CRM systems, collaboration platforms, and business applications."
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
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10 text-center">
            Key Features & Benefits
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "Cost Reduction",
                desc: "Eliminate expensive traditional PBX infrastructure - IP PABX runs on standard network infrastructure reducing capital and operational expenses."
              },
              {
                title: "Scalability",
                desc: "Add or remove extensions easily without hardware changes, supporting business growth and organizational changes."
              },
              {
                title: "Advanced Call Features",
                desc: "Call transfer, conferencing, call waiting, call hold, call recording, and intelligent routing - all included."
              },
              {
                title: "Mobile Integration",
                desc: "Give employees the ability to make and receive business calls using the IP PABX system from any device, anywhere."
              },
              {
                title: "Reliability & Redundancy",
                desc: "Enterprise-grade uptime guarantees with backup systems ensuring continuous service availability."
              },
              {
                title: "Security",
                desc: "Encrypted communication, user authentication, and secure voice traffic protecting your business communications."
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
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Why Choose Avira for IP PABX
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Expert Implementation", desc: "Professional installation, configuration, and staff training ensuring smooth adoption." },
              { title: "24/7 Support", desc: "Dedicated support team ensuring your phone system is always up and running." },
              { title: "Vendor-Agnostic", desc: "We work with leading IP PABX platforms supporting your choice of technology." },
              { title: "Future-Ready", desc: "Solutions designed to scale with emerging communication technologies and standards." },
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
                  <Headphones className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground ml-8 md:ml-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default IPPabx;
