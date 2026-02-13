import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const IPPabx = () => (
  <Layout>
    <PageHero
      title="IP PABX"
      description="Enterprise-grade voice solutions with advanced call routing, voicemail, and unified telecommunications"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "IP PABX", path: "/solutions/ip-pabx" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">IP PABX Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default IPPabx;
