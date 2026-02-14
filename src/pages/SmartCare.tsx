import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Phone,
  HardDrive,
  BarChart3,
  Shield,
  Users,
  Wrench,
  Server,
  Camera,
  Network,
  CheckCircle2,
  Award,
  TrendingDown,
} from "lucide-react";

const SmartCare = () => {
  const serviceTypes = [
    {
      icon: Server,
      title: "Smart Servers & Data Center",
      desc: "Step into the future of IT excellence with SmartCare Servers & Data Center solutions. Our cutting-edge services redefine how you experience server management and data center optimization. SmartCare isn't just a service - it's a commitment to proactive monitoring, predictive maintenance, and customized solutions tailored to your unique infrastructure needs. Our 24/7 support ensures uninterrupted operations, while continuous improvement remains at the core of our approach.",
      image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F882d6aed96e4422896318435350903fb?format=webp&width=800&height=1200"
    },
    {
      icon: Camera,
      title: "Smart Surveillance",
      desc: "Our state-of-the-art SmartCare Surveillance solutions go beyond monitoring - they empower you with intelligent insights and real-time control. Unleash the power of cutting-edge technology as we prioritize the protection of what matters most to you. From seamless integration to predictive analytics, our solutions are crafted to elevate your surveillance experience. With SmartCare, it's not just about watching, it's about ensuring smart, secure spaces.",
      image: "https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
    {
      icon: Network,
      title: "Smart Network Switches",
      desc: "Our innovative solutions redefine how you experience connectivity and performance. SmartCare goes beyond traditional support - it's a commitment to proactive monitoring, rapid issue resolution, and continuous optimization. Elevate your network's efficiency with our expert team, ensuring every connection is not just functional but smartly managed. With 24/7 support, customized solutions, and a focus on continuous improvement, SmartCare for Network Switches is your gateway.",
      image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200"
    },
  ];

  const services = [
    {
      icon: Phone,
      title: "24/7 Technical Support",
      desc: "Access expert engineers around the clock for troubleshooting, advice, and critical issue resolution."
    },
    {
      icon: HardDrive,
      title: "Advanced Hardware Replacement (RMA)",
      desc: "Minimize downtime with fast, reliable RMA services, delivering replacement parts to your site quickly."
    },
    {
      icon: BarChart3,
      title: "Proactive System Monitoring",
      desc: "Early detection and resolution of potential system issues before they impact operations."
    },
    {
      icon: Shield,
      title: "Software Updates and Patch Management",
      desc: "Ensure your systems stay secure and optimized with access to the latest updates and security patches."
    },
    {
      icon: Users,
      title: "Dedicated Account Manager",
      desc: "Get a single point of contact for personalized support and faster response times."
    },
    {
      icon: Wrench,
      title: "Preventive Maintenance and Health Checks",
      desc: "Regular infrastructure health assessments to maximize system uptime and performance."
    },
  ];

  const whyChoose = [
    "Enterprise-Class Support - Backed by industry-certified experts.",
    "Faster Recovery - Reduce downtime with rapid response and replacement.",
    "Customized Plans - Tailored support packages based on your infrastructure needs.",
    "Cost Efficiency - Protect your investment and lower the total cost of ownership (TCO).",
  ];

  return (
    <Layout>
      <PageHero
        title="SmartCare"
        description="True reliability begins with proactive care"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "SmartCare", path: "/smart-care" }
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
              Welcome to Our Support Hub: Your Gateway to Seamless IT Assistance
            </h2>
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                At Avira Technologies, we understand that a robust IT infrastructure is essential for the success of any organization, and this requires not only high-quality technology but also dependable and expert support. Our dedicated Support Team is fully committed to ensuring that your technology operates at its optimal level, providing prompt assistance and effective solutions whenever challenges arise.
              </p>
              <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
                Discover the exclusive advantages of Avira's Specialized SmartCare, which is designed to enhance your IT experience significantly. This is coupled with our dedicated RMA services and cutting-edge support solutions that are tailored to meet your specific needs. Our personalized approach to support redefines service excellence, guaranteeing a seamless, reliable, and truly unmatched support experience tailored for your business. At every step, we're here to empower your technology and drive your success forward.
              </p>
              <p className="text-sm md:text-lg text-electric font-semibold italic">
                Advanced IT Support for the Demands of Tomorrow
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SmartCare Overview */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-4 text-center">
              Welcome to the Future of IT Excellence with Our Smart Care Solution
            </h2>
            <p className="text-sm md:text-base text-muted-foreground text-center leading-relaxed mb-8">
              In the fast-paced world of technology, ensuring the optimal performance of your IT infrastructure is paramount. Our Smart Care services are designed to be your trusted partner on this journey, providing proactive and intelligent support for your IT ecosystem.
            </p>
            <div className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card">
              <p className="text-sm md:text-base text-card-foreground leading-relaxed mb-4">
                Avira SmartCare Service provides troubleshooting support, advanced hardware replacement options, and extensive self-help and knowledge transfer to empower your network operations and support staff.
              </p>
              <p className="text-sm md:text-base text-card-foreground italic">
                "We have maintenance contracts with multiple vendors and Avira is the most responsive of them all. When we have a network issue, we count on their four-hour response time to have the problem resolved."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Our SmartCare Solutions
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12"></div>
            <div className="space-y-12 md:space-y-16">
              {serviceTypes.map((service, i) => {
                const isReversed = i === 1;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center ${isReversed ? 'md:grid-cols-2' : ''}`}
                  >
                    {/* Text Content */}
                    <div className={isReversed ? 'md:order-2' : ''}>
                      <h3 className="font-semibold text-foreground text-2xl md:text-3xl mb-4">{service.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{service.desc}</p>
                    </div>

                    {/* Image */}
                    <div className={`rounded-xl overflow-hidden shadow-lg h-64 md:h-80 ${isReversed ? 'md:order-1' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
              Key Services Covered Under Avira SmartCare
            </h2>
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

      {/* Why Choose */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-3xl mx-auto"
          >
            <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-12 text-center">
              Why Choose Avira SmartCare?
            </h2>
            <div className="space-y-3 md:space-y-4">
              {whyChoose.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-3 md:gap-4 p-3 md:p-4 bg-secondary rounded-lg border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                  <p className="text-sm md:text-base text-card-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default SmartCare;
