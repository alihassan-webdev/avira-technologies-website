import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Network, Cloud, Phone, Lock, Zap,
  Video, Users, Settings, ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const solutionCategories = [
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Advanced threat detection and comprehensive protection against evolving digital threats with intelligent security solutions.",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
    link: "/solutions/cyber-security"
  },
  {
    icon: Network,
    title: "Enterprise Network",
    description: "Build resilient, scalable enterprise networks with intelligent routing, load balancing, and advanced connectivity solutions.",
    image: "https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg",
    link: "/solutions/enterprise-work"
  },
  {
    icon: Cloud,
    title: "Network Infrastructure",
    description: "IT Infrastructure Solutions encompassing foundational hardware, software, and services for enterprise-grade performance.",
    image: "https://images.pexels.com/photos/3498597/pexels-photo-3498597.jpeg",
    link: "/solutions/network-infrastructure"
  },
  {
    icon: Phone,
    title: "Unified Communications",
    description: "VoIP, collaboration tools, and seamless cloud communications to connect your organization globally.",
    image: "https://images.pexels.com/photos/1181405/pexels-photo-1181405.jpeg",
    link: "/solutions/unified-communications"
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Intelligent, secure, and scalable access control systems with biometric, RFID, and smart lock solutions.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
    link: "/solutions/access-control"
  },
  {
    icon: Zap,
    title: "Power & Energy",
    description: "Energy-efficient solutions including UPS systems, solar integration, and real-time energy monitoring.",
    image: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg",
    link: "/solutions/power-energy"
  },
  {
    icon: Phone,
    title: "IP PABX",
    description: "Enterprise-grade voice solutions with advanced call routing, voicemail, and unified telecommunications.",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg",
    link: "/solutions/ip-pabx"
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description: "High-quality meetings and webinars powered by Zoom, Microsoft Teams, and Webex integration.",
    image: "https://images.pexels.com/photos/3839969/pexels-photo-3839969.jpeg",
    link: "/solutions/video-conferencing"
  },
  {
    icon: Video,
    title: "Video Surveillance",
    description: "Monitor, protect, and manage your premises with AI-based CCTV and advanced remote monitoring solutions.",
    image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg",
    link: "/solutions/video-surveillance"
  }
];

const Solutions = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <Layout>
      {/* Custom Hero Section */}
      <motion.section
        className="relative h-[420px] md:h-[550px] overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900"
      >
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.pexels.com/photos/3498597/pexels-photo-3498597.jpeg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="text-center px-8 md:px-12 max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Complete IT Infrastructure
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-blue-100 mb-6"
            >
              Seamless Integration & Scalable Growth
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white"
            >
              From Networks to Cloud – Your Digital Transformation Starts Here!
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* IT Solutions Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">IT Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Innovate, Integrate, and Elevate your enterprise with future-ready IT solutions designed for today's business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionCategories.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onMouseEnter={() => setHoveredCard(solution.title)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group cursor-pointer"
              >
                <Link to={solution.link} className="block h-full">
                  <div className="h-full rounded-xl overflow-hidden shadow-lg bg-white border border-border hover:shadow-2xl transition-all duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative h-40 overflow-hidden bg-secondary">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="mb-3">
                        <solution.icon className="w-8 h-8 text-electric" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-electric transition-colors">
                        {solution.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 flex-grow">
                        {solution.description}
                      </p>
                      <div className="flex items-center text-electric font-semibold text-sm">
                        Read more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              Choose the Best Solution you want
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12 mx-auto"></div>

            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-foreground leading-relaxed">
                Avira Technologies is an end-to-end IT Solution provider company focusing on the solution of IT infrastructure, IT security, Software & applications, end-to-end managed services, Cloud & Collaborations. Focusing on enterprise-class solutions that provide accessible and agile answers to today's business challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
