import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const CyberSecurity = () => (
  <Layout>
    <PageHero
      title="Cyber Security"
      description="Advanced threat detection and comprehensive protection against evolving digital threats"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Cyber Security", path: "/solutions/cyber-security" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">Cyber Security Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default CyberSecurity;
