import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const VideoSurveillance = () => (
  <Layout>
    <PageHero
      title="Video Surveillance"
      description="Monitor, protect, and manage your premises with AI-based CCTV and advanced remote monitoring solutions"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Video Surveillance", path: "/solutions/video-surveillance" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">Video Surveillance Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default VideoSurveillance;
