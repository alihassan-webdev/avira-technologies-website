import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  MapPin,
  Wifi,
  Zap,
  Server,
  Camera,
  Box,
  CheckCircle2,
  FileText,
} from "lucide-react";

const StructuredCabling = () => {
  const services = [
    {
      icon: MapPin,
      title: "Site Assessment & Infrastructure Planning",
      desc: "Evaluate current and future network needs to design optimal cabling layouts."
    },
    {
      icon: Wifi,
      title: "Data & Voice Cabling (Cat5e, Cat6, Cat6A, Cat7)",
      desc: "Installation and termination of copper cabling for high-speed LAN, VoIP, and unified communications."
    },
    {
      icon: Zap,
      title: "Fiber Optic Cabling (Single-Mode & Multi-Mode)",
      desc: "High-bandwidth, long-distance backbone connectivity with minimal signal loss."
    },
    {
      icon: Server,
      title: "Server Room & Data Center Cabling",
      desc: "Rack-to-rack patch panel and structured installations for organized and efficient IT infrastructure."
    },
    {
      icon: Camera,
      title: "Cabling for IP Devices",
      desc: "Power and data cabling for IP phones, cameras, access control, and wireless access points."
    },
    {
      icon: Box,
      title: "Rack & Cabinet Setup",
      desc: "Installation of server racks, patch panels, cable trays, and structured enclosures."
    },
    {
      icon: CheckCircle2,
      title: "Testing & Certification",
      desc: "Full testing of all installed links to certify performance and compliance with industry standards."
    },
    {
      icon: FileText,
      title: "Documentation & Labeling",
      desc: "Clear labeling, layout diagrams, and maintenance documentation for easy future management."
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Structured Cabling"
        description="Strong Connections Start with Structured Foundations"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Services", path: "/services" },
          { label: "Structured Cabling", path: "/services/structured-cabling" }
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
              Structured Cabling Solutions by Avira Technologies
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                At Avira Technologies, we design and implement high-performance structured cabling systems that form the foundation of your IT and communication infrastructure. Whether it's for a corporate office, data center, campus, or industrial facility, our solutions ensure organized, scalable, and reliable connectivity for all your networked devices and systems.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                With a focus on quality, flexibility, and future-proof design, we deliver structured cabling systems that support everything from voice and data to video and automation, enabling your business to scale with confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-3 text-center">
              Our Structured Cabling Services Include
            </h2>
            <p className="text-sm md:text-base text-muted-foreground text-center mb-8 md:mb-12">
              Proactive, Predictable, and Scalable IT Operations - So You Can Focus on Growth
            </p>
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
                    <p className="text-xs md:text-sm text-muted-foreground ml-9 md:ml-12">{service.desc}</p>
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

export default StructuredCabling;
