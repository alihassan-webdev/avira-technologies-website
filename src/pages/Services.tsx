import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Cog, Search, Network, CheckCircle2, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const serviceCategories = [
  {
    icon: Cog,
    title: "Managed Services",
    description: "Ensure smooth, secure, and uninterrupted IT operations with our proactive Managed Services. We provide 24/7 monitoring, support, and maintenance to reduce downtime and enhance performance.",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200",
    link: "/services/managed-services"
  },
  {
    icon: Search,
    title: "Network Audit",
    description: "Gain full visibility into your network infrastructure with our expert Network Audit Services. We identify risks, inefficiencies, and security gaps to help you optimize performance and stay compliant.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Ff2d7c8aa53514f628cb451f8c85f6754?format=webp&width=800&height=1200",
    link: "/services/network-audit"
  },
  {
    icon: Network,
    title: "Structured Cabling",
    description: "Build a reliable, scalable foundation for your IT systems with our Structured Cabling Solutions. From planning to implementation, we deliver neat, organized, and high-performance cabling infrastructure.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F441b58ed096d480ba61c647ea4a62080?format=webp&width=800&height=1200",
    link: "/services/structured-cabling"
  },
  {
    icon: CheckCircle2,
    title: "Service Level Agreements",
    description: "Guarantee uptime, rapid response, and reliable IT performance with our tailored SLA Services. Backed by defined service metrics and 24/7 support, we ensure your critical systems run smoothly and securely.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F14a04405b96b464f95a058ca26d8e232?format=webp&width=800&height=1200",
    link: "/services/sla"
  },
  {
    icon: Users,
    title: "IT Resource Outsourcing",
    description: "Access skilled IT professionals without the overhead through our IT Resource Outsourcing services. We provide certified experts to support your projects, streamline operations, and reduce staffing costs.",
    image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Fc22e77d0b2524f3bab74c9f416bc0fe6?format=webp&width=800&height=1200",
    link: "/services/it-outsourcing"
  }
];

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <PageHero
        title="Services"
        description="Comprehensive IT Solutions, Tailored for Your Success"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]}
      />

      {/* Services Introduction */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto px-6"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              Streamlined IT services designed to maximize efficiency, minimize risk, and accelerate your digital transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-0">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group h-full"
                >
                  <Link to={service.link} onClick={scrollToTop} className="block h-full">
                    <div className="h-full rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 flex flex-col">
                      {/* Image */}
                      <div className="relative h-56 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="eager"
                          decoding="async"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-grow">
                        {/* Icon and Title Row */}
                        <div className="flex items-start gap-3 mb-3">
                          <Icon className="w-6 h-6 text-electric flex-shrink-0 mt-1" />
                          <h3 className="font-semibold text-lg text-foreground group-hover:text-electric transition-colors">
                            {service.title}
                          </h3>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-muted-foreground mb-4 flex-grow leading-relaxed line-clamp-3">
                          {service.description}
                        </p>

                        {/* Read More Link */}
                        <div className="flex items-center text-electric font-medium text-sm hover:gap-2 transition-all">
                          Learn more
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
    </Layout>
  );
};

export default Services;
