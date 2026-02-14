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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-center">
          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F1a1ad83e96c34804b74ed702059c65d5?format=webp&width=800&height=1200"
              alt="Solis"
              className="h-24 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F7f6989e8914f490098518db7746f2b84?format=webp&width=800&height=1200"
              alt="Growatt"
              className="h-24 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2Ffb0d0d42042a4c3da169634dd375a4aa?format=webp&width=800&height=1200"
              alt="Canadian Solar"
              className="h-24 object-contain"
            />
          </div>
          <div className="flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F8aaf11af3d6f46b4a9a594af1977aff4%2F3a4be3bacc5142c4bfa323820b920438?format=webp&width=800&height=1200"
              alt="Jinko Solar"
              className="h-24 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default PowerEnergy;
