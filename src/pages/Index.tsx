import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield, Server, Phone, Fingerprint, Zap, Camera,
  Settings, Network, Cable, FileCheck, Users,
  ChevronRight, CheckCircle, Star, ArrowRight,
  Building, Landmark, Stethoscope, GraduationCap, ShoppingCart, Factory,
  Handshake, Lightbulb, ExternalLink
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const partners = [
  { name: "APC", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F5ee1870c964f4bb2965e1625b8297c86?format=webp&width=800&height=1200" },
  { name: "VMware", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2Fbccf7e40d94f482189d68480ae179ea1?format=webp&width=800&height=1200" },
  { name: "Logitech", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F02875d362f364a76891ff940e8790d89?format=webp&width=800&height=1200" },
  { name: "Yeastar", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F136c854318644607a8e0e93eb8c393ab?format=webp&width=800&height=1200" },
  { name: "Seagate", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F889b06676640423b94834bc951ef3003?format=webp&width=800&height=1200" },
  { name: "Western Digital", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2Fc743a2aa102648608e0f66625b3b43e7?format=webp&width=800&height=1200" },
  { name: "Dell EMC", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2Fcd98d298dd0846c2a89c0dc27423652a?format=webp&width=800&height=1200" },
  { name: "HPE Aruba", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F4685ecae3c2a4a75bfb19338fdaadfb7?format=webp&width=800&height=1200" },
  { name: "D-Link", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F4c18c25b5d7d45a78d94e935e0c42057?format=webp&width=800&height=1200" },
  { name: "Lenovo", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F6ffba5b490824376a8be2345b6827ceb?format=webp&width=800&height=1200" },
  { name: "Trend Micro", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2Fa9685f090abf4885bbef510721a9db27?format=webp&width=800&height=1200" },
  { name: "TP-Link", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F801d1690f59043ea9495c5c33be294bf?format=webp&width=800&height=1200" },
  { name: "Acer", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F8c5af0c73dd04212b172d26bc2cfbf53?format=webp&width=800&height=1200" },
  { name: "ZKTeco", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F050a794f6b3445188fe01be051700857?format=webp&width=800&height=1200" },
  { name: "Sophos", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F42be23264b0e42daae3249a116f37b8d?format=webp&width=800&height=1200" },
  { name: "Huawei", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F1b1cb0414387443abaf45c5d2c3f6b0e?format=webp&width=800&height=1200" },
  { name: "Fortinet", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F90baaf3d6bc946eeade3a55eccef023b?format=webp&width=800&height=1200" },
  { name: "Ruijie", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F251e0a19c06d41bea2a7c1d8dad0409f?format=webp&width=800&height=1200" },
  { name: "Molex", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F41266f7ac81e477b9cf7cf8e6a7a0506?format=webp&width=800&height=1200" },
  { name: "Jabra", logo: "https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2F5095bc98112c49fd95bb6ffb2f22743a?format=webp&width=800&height=1200" },
];

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
    // Preload hero images for buttery smooth transitions
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      {/* Hero Carousel */}
      <motion.section
        className="relative h-[420px] md:h-[650px] overflow-hidden bg-[#1B3058] isolate"
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={`image-${currentSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none will-change-opacity"
          >
            <img
              src={heroSlides[currentSlide].image}
              alt=""
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              // @ts-ignore - fetchpriority is a valid attribute but might not be in the types
              fetchpriority={currentSlide === 0 ? "high" : "low"}
            />
          </motion.div>
        </AnimatePresence>

        {/* Carousel Slide Title */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`text-${currentSlide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 flex items-center justify-start pointer-events-none z-10 pt-64 md:pt-80 will-change-[opacity,transform]"
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
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-5 md:py-2 rounded-full border-2 border-red-600 bg-white mb-6 shadow-sm">
              <span className="text-red-600 font-bold text-xs md:text-sm tracking-widest uppercase">Welcome to Innovation</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-center text-foreground mb-4 tracking-tight">
              Avira <span className="text-red-600">Technologies</span>
            </h1>
            <p className="text-xl md:text-3xl text-gray-700 font-medium text-center mb-8 leading-relaxed">
              Your Strategic Technology Partner for <span className="text-electric">Innovative Solutions</span>
            </p>
            <div className="w-24 h-1.5 bg-gradient-electric mx-auto rounded-full mb-8"></div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              We empower businesses with future-ready IT infrastructure, cybersecurity, and managed services that drive growth and operational excellence.
            </p>
          </motion.div>
        </div>
      </section>


      {/* Key Features */}
      <section className="py-20 bg-secondary bg-cover bg-center bg-fixed relative" style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.pexels.com/photos/7652050/pexels-photo-7652050.jpeg?auto=compress&cs=tinysrgb&w=1200')`}}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "End-to-End Solutions", desc: "Complete IT solutions from consultation to implementation", image: null },
              { icon: Zap, title: "Cutting-Edge Technology", desc: "Latest innovations in cybersecurity and cloud computing", image: null },
              { icon: Users, title: "Expert Team", desc: "Certified professionals with 10+ years experience", image: null },
            ].map((feature, i) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }} className="rounded-xl bg-card border border-border shadow-card overflow-hidden flex flex-col h-full">
                {feature.image && (
                  <div className="h-40 overflow-hidden">
                    <img src={feature.image} alt={feature.title} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                  </div>
                )}
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <feature.icon className="w-8 h-8 text-electric mb-4" />
                    <h3 className="font-display font-semibold text-lg text-card-foreground mb-3">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* Mission & Vision Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Mission Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">OUR MISSION</h2>
                <div className="w-12 h-1 bg-gradient-electric rounded-full mb-6"></div>
                <p className="text-lg text-foreground leading-relaxed">
                  Our mission is to empower businesses by providing them with cutting-edge technology solutions that not only enhance their operational efficiency but also drive sustainable growth and ensure long-term success in a competitive market. We aim to equip organizations with the tools they need to thrive in today's fast-paced business environment.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src="https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="IT professionals monitoring data servers"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>

            {/* Vision Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-8 flex flex-col-reverse md:flex-col"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl group hidden md:block">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Diverse professionals collaborating in a meeting"
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>

              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 mt-8 md:mt-0">OUR VISION</h2>
                <div className="w-12 h-1 bg-gradient-electric rounded-full mb-6"></div>
                <p className="text-lg text-foreground leading-relaxed">
                  Our vision is to establish ourselves as a global leader in IT innovation, dedicated to shaping the future of various industries through the transformative power of technology. We aspire to lead the way in developing groundbreaking solutions that not only enhance operational efficiency but also drive growth and progress across diverse sectors on a worldwide scale.
                </p>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-2xl group md:hidden mt-8">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Diverse professionals collaborating in a meeting"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="w-full">
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
                We're not just selling technology, we're building long-term partnerships through service excellence, technical expertise, and strategic insight. Join thousands of enterprises and individuals who trust Avira Technologies for a safer, faster, and smarter digital experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="w-full">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              Our Approach
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12 mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8 rounded-xl bg-card border border-border shadow-card flex flex-col h-full"
              >
                <Handshake className="w-8 h-8 text-electric mb-4 flex-shrink-0" />
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-3">Premier Partnership</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We're committed to establishing lasting relationships as a premier company to partner with, delivering optimal solutions and cutting-edge products with industry-leading practices.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-8 rounded-xl bg-card border border-border shadow-card flex flex-col h-full"
              >
                <Lightbulb className="w-8 h-8 text-electric mb-4 flex-shrink-0" />
                <h3 className="font-display font-semibold text-lg text-card-foreground mb-3">Continuous Innovation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Through innovation and process improvement, we enhance our capabilities, ensuring seamless delivery of tailored solutions and superior support services.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Strategic Partners Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Our Partners
                </h2>
                <div className="w-12 h-1 bg-gradient-electric rounded-full mb-6"></div>
                <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
                  Partners & Technologies we are working with
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that strong partnerships are the foundation of delivering powerful, future-ready solutions. Through strategic alliances with global technology providers, system manufacturers, and service innovators, we are able to bring world-class solutions to our clients backed by trusted expertise and proven performance.
                </p>
              </div>
              <Link
                to="/partners"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all group"
              >
                Learn more
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center mb-12">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="p-4 transition-all duration-300 flex items-center justify-center bg-card rounded-xl h-36 border border-border shadow-card hover:shadow-lg"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="max-h-full max-w-full object-contain"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              Our partnerships extend beyond logos they represent shared vision, mutual growth, and collaborative innovation. Together with our technology partners, we deliver integrated solutions that ensure reliability, scalability, and competitive advantage across industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 24-Hour Hotline - Main Contact CTA */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="w-full">
            <div className="bg-[#1B3058] rounded-2xl p-10 md:p-16 border border-gray-800 shadow-2xl hover:shadow-[#1B3058]/20 transition-shadow">
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
