import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Shield, Zap, Users, Target } from "lucide-react";

const whyChooseUs = [
  {
    title: "Industry-Leading Expertise",
    description: "Decades of Experience – Proven track record in security, automation, and smart technology.",
    points: [
      "Decades of Experience – Proven track record in security, automation, and smart technology.",
      "Certified Professionals – Our team includes top-tier engineers, cybersecurity specialists, and system integrators.",
      "Award-Winning Solutions – Recognized for innovation in access control, fire safety, and IT infrastructure.",
    ],
    icon: Shield,
  },
  {
    title: "Future-Ready Technology",
    description: "Advanced solutions that evolve with your needs.",
    points: [
      "AI & IoT-Powered Systems – Smart, adaptive solutions that evolve with your needs.",
      "Military-Grade Security – Advanced encryption, real-time threat detection, and compliance with global standards.",
      "Seamless Integration – Unified platforms for access control, surveillance, alarms, and communications.",
    ],
    icon: Zap,
  },
  {
    title: "Unmatched Reliability",
    description: "24/7 monitoring and support for your peace of mind.",
    points: [
      "24/7 Monitoring & Support – Proactive maintenance and instant incident response.",
      "Redundant Systems – Minimize downtime with fail-safe architectures.",
      "Scalable for Growth – From small businesses to enterprise-level deployments.",
    ],
    icon: Users,
  },
  {
    title: "Customer-Centric Approach",
    description: "Solutions designed specifically for your unique needs.",
    points: [
      "Tailored Solutions – No one-size-fits-all—we design for your unique challenges.",
      "End-to-End Service – From consultation to installation, training, and lifetime upgrades.",
      "Proven Success – Trusted by Fortune 500 companies, governments, and critical infrastructure providers.",
    ],
    icon: Target,
  },
];

const About = () => (
  <Layout>
    <PageHero
      title="About US"
      description="Where Technology Meets Vision"
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }]}
    />

    {/* Who We Are */}
    <section className="py-20">
      <div className="container mx-auto px-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-full mx-auto px-4"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8 text-center">
            Who We Are?
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Avira Technologies proudly stands at the forefront of the IT services sector, dedicated to delivering exceptional and professional IT solutions that span a wide array of IT infrastructure and comprehensive services across diverse platforms. As a leading System Integrator and Technology Solutions provider, our mission is to support a diverse clientele, including both large enterprises and small to medium-sized enterprises (SMEs). We have established a strong presence not only in Pakistan but also in key markets such as the United States, the Middle East, and Africa. Our unwavering commitment revolves around assisting our clients through the strategic processes of planning, building, supporting, and effectively managing their Information and Communication Technology (ICT) and digital infrastructure.
            </p>
            <p>
              With an impressive decade of experience in System Integration and a dedicated team of over 40 highly skilled professionals, Avira Technologies has successfully addressed and exceeded the needs of more than 100 clients worldwide. Our relentless dedication to delivering innovative IT solutions has empowered businesses to navigate challenges with confidence, facilitating sustained growth and success in their respective markets. At Avira Technologies, we recognize the importance of adapting to the ever-evolving tech landscape and strive to be a trusted partner in our clients' journeys toward digital transformation and operational excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-0">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-12 items-center px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              OUR MISSION
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our mission is to empower businesses by providing them with cutting-edge technology solutions that not only enhance their operational efficiency but also drive sustainable growth and ensure long-term success in a competitive market. We aim to equip organizations with the tools they need to thrive in today's fast-paced business environment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <img src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg" alt="IT professionals monitoring data servers" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Vision */}
        <div className="grid md:grid-cols-2 gap-12 items-center px-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="rounded-xl overflow-hidden shadow-lg order-2 md:order-1"
          >
            <img src="https://images.pexels.com/photos/1181734/pexels-photo-1181734.jpeg" alt="Diverse professionals collaborating in a meeting" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 md:order-2"
          >
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              OUR VISION
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our vision is to establish ourselves as a global leader in IT innovation, dedicated to shaping the future of various industries through the transformative power of technology. We aspire to lead the way in developing groundbreaking solutions that not only enhance operational efficiency but also drive growth and progress across diverse sectors on a worldwide scale.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 bg-cover bg-center relative" style={{backgroundImage: `linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url('https://images.pexels.com/photos/7652050/pexels-photo-7652050.jpeg')`}}>
      <div className="container mx-auto px-0 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          className="text-center mb-16 max-w-full mx-auto px-4"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose US?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            we don't just provide solutions— we deliver
          </p>
          <p className="text-2xl font-bold text-red-600">Trust, innovation, & excellence</p>
          <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
            in every system we design. Here's why businesses and organizations worldwide rely on us:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 px-4">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 1.0, ease: "easeOut" }}
                className="p-8 rounded-xl bg-card border border-border shadow-card hover:shadow-lg transition-shadow"
              >
                <Icon className="w-8 h-8 text-electric mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {item.title}
                </h3>
                <ul className="space-y-3">
                  {item.points.map((point, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-red-600 font-bold mt-1">✨</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
