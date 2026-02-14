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
    { icon: Camera, label: "CCTV Cameras", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F747f09c328cf47d0a88c6548c6a08e11?format=webp&width=800&height=1200" },
    { icon: Wifi, label: "Video Conf. Equipment", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Fdfe7010fded24381a3d3100ee5ac7e95?format=webp&width=800&height=1200" },
    { icon: Projector, label: "Projector & Screen", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F0d657db593564c8b8967208c6f49e164?format=webp&width=800&height=1200" },
    { icon: Monitor, label: "Computer", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F09286a267bdb4beeb2751273bcf5c306?format=webp&width=800&height=1200" },
    { icon: Laptop, label: "Laptop", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Fefaa296437f64264a6ca60140fc2f21b?format=webp&width=800&height=1200" },
    { icon: Server, label: "Server", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F08738c62e19f4df98a23f7715fe3e670?format=webp&width=800&height=1200" },
    { icon: Printer, label: "Printer & Scanner", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F69f284f634a440bfad05f41d80145054?format=webp&width=800&height=1200" },
    { icon: Phone, label: "Panasonic PABX", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F524b85fbac8944e8a03d206e8a564f0d?format=webp&width=800&height=1200" },
    { icon: Phone, label: "IP Phone", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F7dd3e381e9ae4c158556065dbb53a8a8?format=webp&width=800&height=1200" },
    { icon: HardDrive, label: "SSD - HDD", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Fc05ee1a34b1c4f60ad47ba7ba928ccfa?format=webp&width=800&height=1200" },
    { icon: Tv, label: "Interactive Panel", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F117ef6339e3749cca7bfeabc9ab245be?format=webp&width=800&height=1200" },
    { icon: Tv, label: "Smart Board", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Ff47ff91ca1d649d08ccec76262cbf0be?format=webp&width=800&height=1200" },
    { icon: Router, label: "Router & APs", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Ffc4d909cc3fd47ddb1d4933b74f182b1?format=webp&width=800&height=1200" },
    { icon: Network, label: "Switches", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Ffa09bebf1d3545f0a43bcf7a99ba7311?format=webp&width=800&height=1200" },
    { icon: Cpu, label: "RAMs", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F84f294460a4440d2a4977d34a2784bbe?format=webp&width=800&height=1200" },
    { icon: Server, label: "APC UPS", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Fb0cb98abe7c94c30b732cf5e4f094689?format=webp&width=800&height=1200" },
    { icon: Network, label: "Network I/O", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Fd3f0d2bb77fe4cc0951cee12eb29143f?format=webp&width=800&height=1200" },
    { icon: Cable, label: "Network Cables", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F7ebf823f19d2411db4c2297ea1a85510?format=webp&width=800&height=1200" },
    { icon: Box, label: "Racks", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Ff6a7ff3dfe924bc1af0ae8c773cb4bd7?format=webp&width=800&height=1200" },
    { icon: Headphones, label: "Headsets", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Fa879fa0377dd449fb6600d5d250c88ad?format=webp&width=800&height=1200" },
    { icon: Package, label: "Accessories", image: "https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F0b056c62852b489c957b2d10eabbb6a0?format=webp&width=800&height=1200" },
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
      <section className="py-12 md:py-20 bg-white">
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
                    className="overflow-hidden rounded-xl border border-border shadow-card hover:shadow-lg transition-shadow bg-white flex flex-col h-full"
                  >
                    <div className="h-80 overflow-hidden bg-white">
                      <img
                        src={supply.image}
                        alt={supply.label}
                        className="w-full h-full object-contain object-center"
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
