import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Server, Phone, Fingerprint, Zap, Camera,
  Settings, Network, Cable, FileCheck, Users,
  ChevronRight, CheckCircle, Star, ArrowRight,
  Building, Landmark, Stethoscope, GraduationCap, ShoppingCart, Factory
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroSlides = [
  { image: hero1, title: "Securing Your Digital Future", tagline: "End-to-end cyber security & IT solutions for modern enterprises.", cta: "Get a Quote", ctaLink: "/contact" },
  { image: hero2, title: "Enterprise IT Infrastructure", tagline: "Build resilient, scalable infrastructure that powers your business forward.", cta: "Explore Solutions", ctaLink: "/solutions" },
  { image: hero3, title: "Expert IT Team at Your Service", tagline: "Managed services, outsourcing, and 24/7 support for peace of mind.", cta: "Contact Us", ctaLink: "/contact" },
];

const solutions = [
  { icon: Shield, title: "Cyber Security", description: "Comprehensive protection against evolving digital threats.", link: "/solutions/cyber-security" },
  { icon: Server, title: "Enterprise Work", description: "Digital transformation and infrastructure optimization.", link: "/solutions/enterprise-work" },
  { icon: Phone, title: "Unified Communications", description: "VoIP, collaboration tools, and cloud communications.", link: "/solutions/unified-communications" },
  { icon: Fingerprint, title: "Access Control", description: "Biometric, RFID, and smart lock solutions.", link: "/solutions/access-control" },
  { icon: Zap, title: "Power & Energy", description: "UPS, solar, and energy monitoring systems.", link: "/solutions/power-energy" },
  { icon: Camera, title: "Video Surveillance", description: "AI-based CCTV and remote monitoring.", link: "/solutions/video-surveillance" },
];

const services = [
  { icon: Settings, title: "Managed Services", description: "Complete IT infrastructure management and support.", link: "/services/managed-services" },
  { icon: Network, title: "Network Audit", description: "Assessment, optimization, and security testing.", link: "/services/network-audit" },
  { icon: Cable, title: "Structured Cabling", description: "LAN/WAN, fiber optics, and data center cabling.", link: "/services/structured-cabling" },
  { icon: FileCheck, title: "Service Level Agreement", description: "Tailored support plans with guaranteed response times.", link: "/services/sla" },
  { icon: Users, title: "IT Resource Outsourcing", description: "Dedicated staff and project-based IT support.", link: "/services/it-outsourcing" },
];

const industries = [
  { icon: Building, label: "Corporate" },
  { icon: Landmark, label: "Government" },
  { icon: Stethoscope, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: ShoppingCart, label: "Retail" },
  { icon: Factory, label: "Manufacturing" },
];

const testimonials = [
  { name: "Ahmed Al-Rashid", role: "CTO, Gulf Enterprises", text: "Avira Technologies transformed our IT infrastructure with seamless security solutions. Highly recommended.", rating: 5 },
  { name: "Sarah Mitchell", role: "IT Director, NovaCorp", text: "Their managed services team is exceptional. 24/7 support with incredibly fast response times.", rating: 5 },
  { name: "David Chen", role: "VP Operations, TechBridge", text: "From structured cabling to cyber security, they handle everything professionally and on schedule.", rating: 5 },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Carousel */}
      <motion.section
        className="relative h-[420px] md:h-[550px] overflow-hidden bg-black"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
          >
            <img src={heroSlides[currentSlide].image} alt="" className="w-full h-full object-cover" />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Slide Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-start pointer-events-none z-10 pt-64 md:pt-80"
          >
            <div className="p-8 md:p-12 w-full">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight drop-shadow-2xl mb-4" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)', fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif' }}>
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-sm md:text-lg text-white drop-shadow-lg" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5)', fontFamily: '"Segoe UI", "Helvetica Neue", sans-serif' }}>
                {heroSlides[currentSlide].tagline}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* Welcome Section */}
      <section className="py-10 bg-gradient-to-b from-white to-secondary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeInOut" }} className="w-full text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full border-2 border-red-600 bg-white mb-3">
              <span className="text-red-600 font-semibold text-xs md:text-sm tracking-wide">Welcome to Innovation</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold text-center text-foreground mb-2">
              Avira Technologies
            </h1>
            <p className="text-xl md:text-2xl text-red-600 font-semibold text-center mb-4">
              Your Technology Partner in Innovation
            </p>
            <div className="w-16 h-1 bg-gradient-electric mx-auto rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-secondary bg-cover bg-center relative" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/7652050/pexels-photo-7652050.jpeg')`}}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "End-to-End Solutions", desc: "Complete IT solutions from consultation to implementation" },
              { icon: Zap, title: "Cutting-Edge Technology", desc: "Latest innovations in cybersecurity and cloud computing" },
              { icon: Users, title: "Expert Team", desc: "Certified professionals with 10+ years experience" },
            ].map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.9, ease: "easeInOut" }} className="p-8 rounded-xl bg-card border border-border shadow-card">
                <feature.icon className="w-8 h-8 text-electric mb-4" />
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            About Our Mission
          </h2>
          <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12 mx-auto"></div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="space-y-6">
              <p className="text-lg text-foreground leading-relaxed">
                Avira Technologies is your trusted partner for end-to-end IT solutions, managed services, and technology integration. We empower businesses to scale, secure, and streamline operations with cutting-edge systems, expert support, and a future-ready mindset.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                Whether you're looking for enterprise networking, cloud computing, cybersecurity, unified communications, or smart energy solutions — we design and deliver custom technology strategies that align with your business goals.
              </p>
              <p className="text-lg text-foreground leading-relaxed">
                At Avira Technologies, we empower the future with cutting-edge digital solutions designed to elevate your business. As a leader in cybersecurity, cloud computing, and AI-driven innovations, we provide the tools and expertise to safeguard your digital journey.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut" }} className="rounded-xl overflow-hidden shadow-lg">
              <img src="https://images.pexels.com/photos/1181335/pexels-photo-1181335.jpeg" alt="IT professionals working with data servers" className="w-full h-full object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeInOut" }} className="w-full">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
              What Sets Us Apart?
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <h3 className="font-display text-2xl font-bold text-electric mb-2">10+</h3>
                <p className="text-card-foreground font-semibold mb-2">Years of Experience</p>
                <p className="text-muted-foreground">Decade of proven expertise in IT solutions and digital transformation</p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <h3 className="font-display text-2xl font-bold text-electric mb-2">100+</h3>
                <p className="text-card-foreground font-semibold mb-2">Clients Worldwide</p>
                <p className="text-muted-foreground">Building long-term partnerships across diverse industries</p>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-card border border-border shadow-card">
              <p className="text-lg text-card-foreground leading-relaxed">
                We're not just selling technology — we're building long-term partnerships through service excellence, technical expertise, and strategic insight. Join thousands of enterprises and individuals who trust Avira Technologies for a safer, faster, and smarter digital experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeInOut" }} className="w-full">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              Our Approach
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-8 mx-auto"></div>
            <div className="space-y-6">
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">Premier Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to establishing lasting relationships as a premier company to partner with, delivering optimal solutions and cutting-edge products with industry-leading practices.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-card border border-border shadow-card">
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">Continuous Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through innovation and process improvement, we enhance our capabilities, ensuring seamless delivery of tailored solutions and superior support services.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 24-Hour Hotline - Main Contact CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: "easeInOut" }} className="w-full">
            <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-10 md:p-16 border border-gray-800 shadow-2xl hover:shadow-red-900/20 transition-shadow">
              <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left Side - Text Content */}
                <div className="flex-1">
                  <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-3">
                    Need Help? Contact Us
                  </h2>
                  <p className="text-gray-400 text-base mb-8">
                    24/7 Support Available
                  </p>
                  <p className="text-gray-400 text-sm">
                    Immediate Assistance Available
                  </p>
                </div>

                {/* Right Side - Phone Button */}
                <div className="flex flex-col items-center gap-3 flex-shrink-0">
                  <Phone className="w-8 h-8 text-electric" />
                  <a href="tel:03111433316" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-electric text-white font-bold text-base hover:opacity-90 transition-opacity shadow-glow whitespace-nowrap">
                    <Phone className="w-4 h-4" />
                    03-111 433 316
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
