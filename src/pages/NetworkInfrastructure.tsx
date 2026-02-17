import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const NetworkInfrastructure = () => (
  <Layout>
    <PageHero
      title="Network Infrastructure"
      description="IT Infrastructure Solutions encompassing foundational hardware, software, and services"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Network Infrastructure", path: "/solutions/network-infrastructure" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">Network Infrastructure Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default NetworkInfrastructure;
