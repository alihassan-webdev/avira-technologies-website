import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

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

const Partners = () => (
  <Layout>
    <PageHero
      title="Our Partners"
      description="Collaborating with global technology leaders to deliver excellence." 
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "Partners", path: "/partners" }]} 
    />
    
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
            Partners & Technologies we are working with
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            We believe that strong partnerships are the foundation of delivering powerful, future-ready solutions. Through strategic alliances with global technology providers, system manufacturers, and service innovators, we are able to bring world-class solutions to our clients backed by trusted expertise and proven performance.
          </p>
          <div className="w-24 h-1 bg-gradient-electric mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="p-4 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center bg-card rounded-xl h-40 border border-border shadow-card hover:shadow-lg"
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our partnerships extend beyond logos they represent shared vision, mutual growth, and collaborative innovation. Together with our technology partners, we deliver integrated solutions that ensure reliability, scalability, and competitive advantage across industries.
          </p>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Partners;
