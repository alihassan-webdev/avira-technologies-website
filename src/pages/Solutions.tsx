import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { Shield, Server, Phone, Fingerprint, Zap, Camera } from "lucide-react";

const solutions = [
  { icon: Shield, title: "Cyber Security", description: "Comprehensive threat protection, network security, data protection, and security consulting services.", link: "/solutions/cyber-security" },
  { icon: Server, title: "Enterprise Work", description: "Enterprise IT solutions, digital transformation, and infrastructure optimization.", link: "/solutions/enterprise-work" },
  { icon: Phone, title: "Unified Communications", description: "VoIP solutions, collaboration tools, cloud communication, and messaging systems.", link: "/solutions/unified-communications" },
  { icon: Fingerprint, title: "Access Control", description: "Biometric systems, RFID access, smart locks, and attendance solutions.", link: "/solutions/access-control" },
  { icon: Zap, title: "Power & Energy", description: "Backup power systems, energy monitoring, UPS solutions, and solar infrastructure.", link: "/solutions/power-energy" },
  { icon: Camera, title: "Video Surveillance", description: "CCTV systems, IP cameras, AI-based monitoring, and remote surveillance.", link: "/solutions/video-surveillance" },
];

const Solutions = () => (
  <Layout>
    <PageHero title="Our Solutions" description="Comprehensive technology solutions designed to protect, connect, and empower your business." breadcrumbs={[{ label: "Home", path: "/" }, { label: "Solutions", path: "/solutions" }]} />
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionHeader label="Solutions" title="Technology Solutions for Every Need" description="Explore our full range of integrated solutions built to drive efficiency and security." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </div>
    </section>
  </Layout>
);

export default Solutions;
