import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Award, Handshake, Globe, Star } from "lucide-react";

const partners = [
  "Cisco", "Microsoft", "Fortinet", "Dell Technologies",
  "HP Enterprise", "Schneider Electric", "Hikvision", "Dahua",
  "Ubiquiti", "APC", "Avaya", "Sophos",
];

const benefits = [
  { icon: Award, title: "Certified Expertise", description: "Our team holds certifications from all major technology partners." },
  { icon: Handshake, title: "Strategic Alliances", description: "Deep partnerships ensuring access to the latest technology and best pricing." },
  { icon: Globe, title: "Global Network", description: "Connected to a worldwide ecosystem of technology providers." },
  { icon: Star, title: "Preferred Partner Status", description: "Recognized as a top-tier partner by leading technology vendors." },
];

const Partners = () => (
  <Layout>
    <PageHero title="Partners & Certifications" description="Strategic partnerships with leading technology providers ensure we deliver the best solutions." breadcrumbs={[{ label: "Home", path: "/" }, { label: "Partners", path: "/partners" }]} />

    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader label="Partners" title="Our Technology Partners" description="We work with the world's leading technology brands." />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((p, i) => (
            <motion.div key={p} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-xl bg-card border border-border shadow-card flex items-center justify-center">
              <span className="font-display font-semibold text-lg text-muted-foreground">{p}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeader label="Benefits" title="Partner Benefits" description="What our strategic partnerships mean for you." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border shadow-card text-center">
              <b.icon className="w-10 h-10 text-electric mx-auto mb-4" />
              <h3 className="font-display font-semibold text-card-foreground mb-2">{b.title}</h3>
              <p className="text-muted-foreground text-sm">{b.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Partners;
