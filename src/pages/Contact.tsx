import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const Contact = () => (
  <Layout>
    <PageHero title="Contact" description="Coming Soon" breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact", path: "/contact" }]} />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">This page is coming soon.</p>
      </div>
    </section>
  </Layout>
);

export default Contact;
