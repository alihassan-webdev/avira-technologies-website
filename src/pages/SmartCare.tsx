import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FeatureSection from "@/components/FeatureSection";
import { Wrench, Shield, Clock, Settings, HeadphonesIcon, CheckCircle } from "lucide-react";

const features = [
  { icon: Settings, title: "Smart Maintenance Plans", description: "Proactive maintenance schedules tailored to your equipment and business needs." },
  { icon: Wrench, title: "Device Care & Support", description: "Expert repair and maintenance for all IT equipment and devices." },
  { icon: Shield, title: "Warranty & Repair Services", description: "Extended warranty programs and certified repair services." },
  { icon: Clock, title: "Preventive Maintenance", description: "Regular check-ups and updates to prevent issues before they impact operations." },
  { icon: HeadphonesIcon, title: "Priority Support", description: "Dedicated support channels for Smart Care subscribers." },
  { icon: CheckCircle, title: "Health Reports", description: "Regular system health assessments and recommendations." },
];

const SmartCare = () => (
  <Layout>
    <PageHero title="Smart Care" description="Comprehensive device care, maintenance, and support programs to keep your technology running smoothly." breadcrumbs={[{ label: "Home", path: "/" }, { label: "Smart Care", path: "/smart-care" }]} />
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader label="Smart Care" title="Intelligent Maintenance & Support" description="Protect your investment with our proactive care programs." />
        <FeatureSection features={features} />
      </div>
    </section>
  </Layout>
);

export default SmartCare;
