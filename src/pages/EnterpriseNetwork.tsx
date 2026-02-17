import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const EnterpriseNetwork = () => (
  <Layout>
    <PageHero
      title="Enterprise Network"
      description="Build resilient, scalable enterprise networks with intelligent routing and advanced connectivity"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Enterprise Network", path: "/solutions/enterprise-work" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">Enterprise Network Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default EnterpriseNetwork;
