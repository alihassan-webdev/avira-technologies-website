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

interface SolutionDetailProps {
  title: string;
  description: string;
  overview: string;
  features: Feature[];
}

const SolutionDetail = ({ title, description, overview, features }: SolutionDetailProps) => (
  <Layout>
    <PageHero title={title} description={description} breadcrumbs={[{ label: "Home", path: "/" }, { label: "Solutions", path: "/solutions" }, { label: title, path: "#" }]} />
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-muted-foreground leading-relaxed text-lg">{overview}</p>
        </div>
        <SectionHeader title="Key Capabilities" description="What we offer in this area." />
        <FeatureSection features={features} />
      </div>
    </section>
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-6 text-center">
        <h3 className="font-display text-2xl font-bold text-foreground mb-4">Need a Custom Solution?</h3>
        <p className="text-muted-foreground mb-6">Contact us to discuss your specific requirements.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg gradient-electric text-accent-foreground font-semibold hover:opacity-90 transition-opacity">
          Get in Touch <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </Layout>
);

export default SolutionDetail;
