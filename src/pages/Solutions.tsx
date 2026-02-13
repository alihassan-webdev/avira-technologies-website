import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Shield, Network, Cloud, Phone, Lock, Zap, 
  Video, ArrowRight
} from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const solutionCategories = [
  {
    icon: Shield,
    title: "Cyber Security",
    description: "Advanced threat detection and comprehensive protection against evolving digital threats with intelligent security solutions.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2Ff0f51032d45e45ecb1322bd3e113d09e?format=webp&width=800&height=1200",
    link: "/solutions/cyber-security"
  },
  {
    icon: Network,
    title: "Enterprise Network",
    description: "Build resilient, scalable enterprise networks with intelligent routing, load balancing, and advanced connectivity solutions.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2F28a877e5d8a241b2adfbc6fddb8ef302?format=webp&width=800&height=1200",
    link: "/solutions/enterprise-work"
  },
  {
    icon: Cloud,
    title: "Network Infrastructure",
    description: "IT Infrastructure Solutions encompassing foundational hardware, software, and services for enterprise-grade performance.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2Fb1e54328476447a1a4567c45ab1ccc01?format=webp&width=800&height=1200",
    link: "/solutions/network-infrastructure"
  },
  {
    icon: Phone,
    title: "Unified Communications",
    description: "VoIP, collaboration tools, and seamless cloud communications to connect your organization globally.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2F98a465a6aa334131b7152b53b1b3ee4a?format=webp&width=800&height=1200",
    link: "/solutions/unified-communications"
  },
  {
    icon: Lock,
    title: "Access Control",
    description: "Intelligent, secure, and scalable access control systems with biometric, RFID, and smart lock solutions.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2Fb0c3ce93850c47abb8045f02f9cc2dfc?format=webp&width=800&height=1200",
    link: "/solutions/access-control"
  },
  {
    icon: Zap,
    title: "Power & Energy",
    description: "Energy-efficient solutions including UPS systems, solar integration, and real-time energy monitoring.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2F38c2fa815b9240eebf4201c6220906ba?format=webp&width=800&height=1200",
    link: "/solutions/power-energy"
  },
  {
    icon: Phone,
    title: "IP PABX",
    description: "Enterprise-grade voice solutions with advanced call routing, voicemail, and unified telecommunications.",
    image: "https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2Fb1cf9e76dae948b29210e68955b281af?format=webp&width=800&height=1200",
    link: "/solutions/ip-pabx"
  },
  {
    icon: Video,
    title: "Video Conferencing",
    description: "High-quality meetings and webinars powered by Zoom, Microsoft Teams, and Webex integration.",
    image: "https://images.pexels.com/photos/3182845/pexels-photo-3182845.jpeg",
    link: "/solutions/video-conferencing"
  },
  {
    icon: Video,
    title: "Video Surveillance",
    description: "Monitor, protect, and manage your premises with AI-based CCTV and advanced remote monitoring solutions.",
    image: "https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg",
    link: "/solutions/video-surveillance"
  }
];

const Solutions = () => {
  return (
    <Layout>
      <PageHero
        title="Complete IT Infrastructure"
        description="Seamless Integration & Scalable Growth – From Networks to Cloud, Your Digital Transformation Starts Here!"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Solutions", path: "/solutions" }]}
      />

      {/* IT Solutions Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">IT Solutions</h2>
            <p className="text-lg text-muted-foreground">
              Innovate, Integrate, and Elevate your enterprise with future-ready IT solutions designed for today's business challenges.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionCategories.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group h-full"
                >
                  <Link to={solution.link} className="block h-full">
                    <div className="h-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                      {/* Image - Larger Airbnb style */}
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                          decoding="async"
                        />
                      </div>

                      {/* Content - Clean Airbnb style */}
                      <div className="p-5 flex flex-col flex-grow">
                        {/* Icon and Title Row */}
                        <div className="flex items-start gap-3 mb-3">
                          <Icon className="w-6 h-6 text-electric flex-shrink-0 mt-1" />
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-electric transition-colors">
                            {solution.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed line-clamp-3">
                          {solution.description}
                        </p>

                        {/* Read More Link */}
                        <div className="flex items-center text-electric font-medium text-sm hover:gap-2 transition-all">
                          Read more
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
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
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Choose the Best Solution you want
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-8 mx-auto"></div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Avira Technologies is an end-to-end IT Solution provider company focusing on the solution of IT infrastructure, IT security, Software & applications, end to end managed services, Cloud & Collaborations. Focusing on enterprise-class solutions that provide accessible and agile answers to today's business challenges.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
