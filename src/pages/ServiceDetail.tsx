import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import FeatureSection from "@/components/FeatureSection";
import SectionHeader from "@/components/SectionHeader";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServiceDetailProps {
  title: string;
  description: string;
  overview: string;
  features: Feature[];
}

const ServiceDetail = ({ title, description, overview, features }: ServiceDetailProps) => (
  <Layout>
    <PageHero title={title} description={description} breadcrumbs={[{ label: "Home", path: "/" }, { label: "Services", path: "/services" }, { label: title, path: "#" }]} />
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg">{overview}</p>
        </div>
        <SectionHeader title="What We Offer" description="Our capabilities in this service area." />
        <FeatureSection features={features} />
      </div>
    </section>
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-2xl font-bold text-foreground mb-4">Ready to Get Started?</h3>
        <p className="text-muted-foreground mb-6">Let's discuss how our services can benefit your organization.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-electric text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
          Contact Us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default ServiceDetail;
