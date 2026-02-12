import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Careers = () => (
  <Layout>
    <PageHero title="Careers" description="Coming Soon" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Careers", path: "/careers" }]} />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">This page is coming soon.</p>
      </div>
    </section>
  </Layout>
);

export default Careers;
