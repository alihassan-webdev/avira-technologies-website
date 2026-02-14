import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Camera, Brain, Cloud, Network, Eye, Wrench, Home, Briefcase, Warehouse, Hospital, UtensilsCrossed, School } from "lucide-react";

const VideoSurveillance = () => (
  <Layout>
    <PageHero
      title="Video Surveillance"
      description="Real-Time Monitoring. Real-World Protection."
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Video Surveillance", path: "/solutions/video-surveillance" }
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
            Security isn't just about walls and locks - it's about having eyes where it counts.
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
            Advanced Video Surveillance Solutions
          </h2>
          <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-muted-foreground leading-relaxed">
            <p>
              In an era of rising security challenges, having reliable and intelligent surveillance is more important than ever. Avira Technologies provides end-to-end video surveillance solutions tailored for businesses, institutions, and critical infrastructure. Our systems are designed for real-time monitoring, proactive threat detection, and 24/7 recording - keeping your people, property, and assets safe.
            </p>
            <p>
              Whether you need a basic CCTV setup or an enterprise-grade smart surveillance system, we deliver customized solutions backed by expert installation, configuration, and support.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Our Services Include */}
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
            Our Services Include
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                icon: Camera,
                title: "CCTV System Design & Installation",
                desc: "Analog and IP-based systems tailored to your building layout and risk level."
              },
              {
                icon: Brain,
                title: "Smart Video Analytics",
                desc: "Motion detection, facial recognition, line crossing, object tracking, and more."
              },
              {
                icon: Cloud,
                title: "Cloud & Local Storage Solutions",
                desc: "Hybrid and cloud storage for secure access and long-term video retention."
              },
              {
                icon: Network,
                title: "System Integration",
                desc: "Integrate CCTV with access control, fire alarms, and building automation systems."
              },
              {
                icon: Eye,
                title: "Remote Monitoring & Mobile Access",
                desc: "View live feeds, receive alerts, and manage footage from any device."
              },
              {
                icon: Wrench,
                title: "Maintenance & Health Monitoring",
                desc: "Routine checks, performance tuning, and quick fault resolution."
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

    {/* Industries We Serve */}
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
            Industries We Serve
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { label: "Residential", icon: Home },
              { label: "Corporate Offices & IT Parks", icon: Briefcase },
              { label: "Warehouses & Industrial Zones", icon: Warehouse },
              { label: "Hospitals & Healthcare Facilities", icon: Hospital },
              { label: "Restaurants", icon: UtensilsCrossed },
              { label: "Schools, Colleges & Universities", icon: School },
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
                    <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.label}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Our Partners */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Trusted Brands We Represent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex justify-center"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F75bf0a9efde44f3a84e9108df55910a1?format=webp&width=800&height=1200"
                alt="HikVision"
                className="max-h-12 object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F73ea0191fe6749adb0354ce43d0df302?format=webp&width=800&height=1200"
                alt="UniView"
                className="max-h-12 object-contain"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F949c3023b4194b3996f2853017794bf5?format=webp&width=800&height=1200"
                alt="UniView"
                className="max-h-12 object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default VideoSurveillance;
