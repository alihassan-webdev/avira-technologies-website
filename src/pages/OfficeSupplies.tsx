import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FeatureSection from "@/components/FeatureSection";
import { Monitor, Printer, Network, ShoppingCart, Package, Headphones } from "lucide-react";

const features = [
  { icon: Monitor, title: "IT Hardware", description: "Workstations, laptops, servers, and displays from leading brands." },
  { icon: Printer, title: "Office Equipment", description: "Printers, scanners, projectors, and conference room equipment." },
  { icon: Network, title: "Networking Accessories", description: "Switches, routers, cables, patch panels, and rack accessories." },
  { icon: ShoppingCart, title: "Procurement Solutions", description: "Bulk purchasing, vendor management, and supply chain optimization." },
  { icon: Package, title: "Consumables", description: "Toner, ink cartridges, and other regular office consumables." },
  { icon: Headphones, title: "Peripherals", description: "Keyboards, mice, headsets, and other essential peripherals." },
];

const OfficeSupplies = () => (
  <Layout>
    <PageHero title="Office Supplies" description="IT hardware, networking accessories, and office equipment from trusted brands." breadcrumbs={[{ label: "Home", path: "/" }, { label: "Office Supplies", path: "/office-supplies" }]} />
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader label="Products" title="Everything Your Office Needs" description="Quality IT products and office supplies with competitive pricing." />
        <FeatureSection features={features} />
      </div>
    </section>
  </Layout>
);

export default OfficeSupplies;
