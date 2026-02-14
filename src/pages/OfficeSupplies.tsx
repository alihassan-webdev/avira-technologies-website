import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import {
  Monitor,
  Laptop,
  Server,
  Printer,
  Camera,
  Phone,
  HardDrive,
  Tv,
  Projector,
  Router,
  Network,
  Cable,
  Box,
  Headphones,
  Package,
  Cpu,
  Wifi,
} from "lucide-react";

const OfficeSupplies = () => {
  const supplies = [
    { icon: Monitor, label: "Computer", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F0fdbe215c8e742499bccc2fb0564e6e4?format=webp&width=800&height=1200" },
    { icon: Laptop, label: "Laptop", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F306c223849a7403f8fbe151da34e2108?format=webp&width=800&height=1200" },
    { icon: Server, label: "Server", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Fde6643eb41cc4c27b5c4f8b6e04a3303?format=webp&width=800&height=1200" },
    { icon: Printer, label: "Printer & Scanner", image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Camera, label: "CCTV Cameras", image: "https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Phone, label: "Panasonic PABX", image: "https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Phone, label: "IP Phone", image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: HardDrive, label: "SSD - HDD", image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Tv, label: "Interactive Panel", image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Tv, label: "Smart Board", image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Projector, label: "Projector & Screen", image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Router, label: "Router & APs", image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Network, label: "Switches", image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Cpu, label: "RAMs", image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Wifi, label: "Video Conf. Equipment", image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Server, label: "APC UPS", image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Network, label: "Network I/O", image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Cable, label: "Network Cables", image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Box, label: "Racks", image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Headphones, label: "Headsets", image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200" },
    { icon: Package, label: "Accessories", image: "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1200" },
  ];

  return (
    <Layout>
      <PageHero
        title="Office Supplies"
        description="From Desk to Data - We Equip Your Office Right"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Office Supplies", path: "/office-supplies" }
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              IT Office Supplies
            </h2>
            <div className="w-12 h-1 bg-gradient-electric rounded-full mb-8 mx-auto"></div>
            <p className="text-lg md:text-xl text-electric font-semibold text-center mb-8">
              Everything Your Business Needs to Run Efficiently
            </p>
            <div className="space-y-4 md:space-y-5">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We're the silent backbone of your IT team. While you're busy debugging, we ensure your drawers are stocked with the right tools, cables, and widgets to keep workflows flawless. No frills, no fuss - just smart supplies for smarter techs.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                We understand that a productive office starts with the right tools. Our IT Office Supplies range includes everything from high-performance hardware to everyday tech essentials - ensuring your teams stay connected, efficient, and focused. Whether you're setting up a new workspace or upgrading your current one, we offer reliable, cost-effective solutions tailored to your needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Supplies Grid */}
      <section className="py-12 md:py-20 bg-secondary">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {supplies.map((supply, i) => {
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="overflow-hidden rounded-xl border border-border shadow-card hover:shadow-lg transition-shadow bg-card flex flex-col h-full"
                  >
                    <div className="h-72 md:h-80 overflow-hidden bg-gray-200">
                      <img
                        src={supply.image}
                        alt={supply.label}
                        className="w-full h-full object-cover object-center"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 md:p-5 flex-grow flex flex-col items-center justify-center text-center">
                      <p className="text-sm md:text-base font-semibold text-card-foreground">{supply.label}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default OfficeSupplies;
