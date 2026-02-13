import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Phone,
  Video,
  MessageSquare,
  Smartphone,
  Headphones,
  Database,
  Mail,
  Users,
  TrendingUp,
  DollarSign,
  Globe,
  Shield,
} from "lucide-react";

const UnifiedCommunications = () => {
  const services = [
    {
      icon: Phone,
      title: "VoIP Telephony & IP PBX",
      desc: "Voice over IP calling with enterprise features",
    },
    {
      icon: Video,
      title: "Video Conferencing",
      desc: "High-quality meetings & webinars (Zoom, MS Teams, Webex)",
    },
    {
      icon: MessageSquare,
      title: "Instant Messaging & Presence",
      desc: "Real-time team collaboration",
    },
    {
      icon: Smartphone,
      title: "Mobile Integration",
      desc: "Softphones & mobile apps for on-the-go communication",
    },
    {
      icon: Headphones,
      title: "Contact Center Solutions",
      desc: "Omnichannel support (voice, chat, email)",
    },
    {
      icon: Database,
      title: "Integration with CRM/ERP",
      desc: "Seamless workflow and communication",
    },
    {
      icon: Mail,
      title: "Unified Messaging",
      desc: "Voicemail-to-email, fax, and SMS integration",
    },
    {
      icon: Users,
      title: "Collaboration Tools",
      desc: "Screen sharing, file sharing, and whiteboarding",
    },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Increased Productivity",
      desc: "Streamline communication and reduce response times with unified tools",
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      desc: "Reduce infrastructure costs and operational expenses",
    },
    {
      icon: Globe,
      title: "Remote Work Ready",
      desc: "Enable seamless collaboration from anywhere in the world",
    },
    {
      icon: Shield,
      title: "Secure Communication",
      desc: "Enterprise-grade encryption and compliance standards",
    },
  ];

  return (
    <Layout>
      <PageHero
        title="Unified Communications"
        description="That Keep Your Business Connected"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Solutions", path: "/solutions" },
        ]}
      />

      {/* What is UC Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-5xl mx-auto text-center">
            <div className="mb-4">
              <span className="inline-block text-electric text-lg font-semibold">
                Anytime, Anywhere
              </span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              What is Unified Communications (UC)?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Unified Communications (UC) refers to the integration of various
              communication tools and platforms into a single, seamless system
              that allows businesses to improve collaboration, efficiency, and
              responsiveness. It includes voice, video, messaging, conferencing,
              and more all managed through a unified platform.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Connect, Collaborate, Communicate All in One Place
            </p>
          </motion.div>
        </div>
      </section>

      {/* UC Services Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              UC Services
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-8 mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-card border border-border shadow-card p-8 flex flex-col h-full"
                >
                  <service.icon className="w-8 h-8 text-electric mb-4" />
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              Benefits of Unified Communications
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-8 mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-xl bg-card border border-border shadow-card p-8 flex flex-col h-full"
                >
                  <benefit.icon className="w-8 h-8 text-electric mb-4" />
                  <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trusted Brands Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6">
          <motion.div className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              Trusted Brands We Represent
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12 mx-auto"></div>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="flex justify-center"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2Fb610ed4d224b4bdc8324a6b0d854d216?format=webp&width=800&height=1200"
                  alt="Yeastar"
                  className="max-h-32 object-contain"
                  loading="eager"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex justify-center"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2Fc520a94b93984016a68e7b1ca3a1e4f2?format=webp&width=800&height=1200"
                  alt="Zcoo"
                  className="max-h-32 object-contain"
                  loading="eager"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="flex justify-center"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2F891f596bc2334642a8a4e8a36af1325c?format=webp&width=800&height=1200"
                  alt="Fanvil"
                  className="max-h-32 object-contain"
                  loading="eager"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex justify-center"
              >
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff3537a826bfc443daa86b16bb9f7afcb%2Fb1fa871bc3cd4fdf97d22c6a596af8e9?format=webp&width=800&height=1200"
                  alt="Asterisk"
                  className="max-h-32 object-contain"
                  loading="eager"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default UnifiedCommunications;
