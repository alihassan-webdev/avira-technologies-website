import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const UnifiedCommunications = () => (
  <Layout>
    <PageHero
      title="Unified Communications"
      description="VoIP, collaboration tools, and seamless cloud communications to connect your organization globally"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Unified Communications", path: "/solutions/unified-communications" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">Unified Communications Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default UnifiedCommunications;
