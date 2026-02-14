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
    { icon: Monitor, label: "Computer" },
    { icon: Laptop, label: "Laptop" },
    { icon: Server, label: "Server" },
    { icon: Printer, label: "Printer & Scanner" },
    { icon: Camera, label: "CCTV Cameras" },
    { icon: Phone, label: "Panasonic PABX" },
    { icon: Phone, label: "IP Phone" },
    { icon: HardDrive, label: "SSD - HDD" },
    { icon: Tv, label: "Interactive Panel" },
    { icon: Tv, label: "Smart Board" },
    { icon: Projector, label: "Projector & Screen" },
    { icon: Router, label: "Router & APs" },
    { icon: Network, label: "Switches" },
    { icon: Cpu, label: "RAMs" },
    { icon: Wifi, label: "Video Conf. Equipment" },
    { icon: Server, label: "APC UPS" },
    { icon: Network, label: "Network I/O" },
    { icon: Cable, label: "Network Cables" },
    { icon: Box, label: "Racks" },
    { icon: Headphones, label: "Headsets" },
    { icon: Package, label: "Accessories" },
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
            className="w-full max-w-3xl mx-auto"
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {supplies.map((supply, i) => {
                const Icon = supply.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-6 bg-card rounded-xl border border-border shadow-card flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                  >
                    <Icon className="w-12 h-12 text-electric mb-4" />
                    <p className="text-sm md:text-base font-semibold text-card-foreground">{supply.label}</p>
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
