import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import { Settings, Network, Cable, FileCheck, Users } from "lucide-react";

const services = [
  { icon: Settings, title: "Managed Services", description: "Complete IT infrastructure management, monitoring, and cloud services.", link: "/services/managed-services" },
  { icon: Network, title: "Network Audit", description: "Network assessment, performance optimization, and security testing.", link: "/services/network-audit" },
  { icon: Cable, title: "Structured Cabling", description: "LAN/WAN cabling, fiber optics, and data center infrastructure.", link: "/services/structured-cabling" },
  { icon: FileCheck, title: "Service Level Agreement", description: "Customized support plans with guaranteed response times.", link: "/services/sla" },
  { icon: Users, title: "IT Resource Outsourcing", description: "Dedicated IT staff, remote support, and project-based outsourcing.", link: "/services/it-outsourcing" },
];

const Services = () => (
  <Layout>
    <PageHero title="Our Services" description="Professional IT services that keep your technology running at peak performance." breadcrumbs={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }]} />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader label="Services" title="Expert IT Services" description="From managed services to structured cabling, we deliver reliable IT support tailored to your business." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => <ServiceCard key={s.title} {...s} index={i} />)}
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
