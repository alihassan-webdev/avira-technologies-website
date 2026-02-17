import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const AccessControl = () => (
  <Layout>
    <PageHero
      title="Access Control"
      description="Intelligent, secure, and scalable access control systems with biometric, RFID, and smart lock solutions"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Access Control", path: "/solutions/access-control" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">Access Control Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default AccessControl;
