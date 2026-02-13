import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const PowerEnergy = () => (
  <Layout>
    <PageHero
      title="Power & Energy"
      description="Energy-efficient solutions including UPS systems, solar integration, and real-time energy monitoring"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Power & Energy", path: "/solutions/power-energy" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">Power & Energy Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default PowerEnergy;
