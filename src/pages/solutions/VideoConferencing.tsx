import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const VideoConferencing = () => (
  <Layout>
    <PageHero
      title="Video Conferencing"
      description="High-quality meetings and webinars powered by Zoom, Microsoft Teams, and Webex integration"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Video Conferencing", path: "/solutions/video-conferencing" }
      ]}
    />
    <section className="py-20">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg text-muted-foreground">Video Conferencing Solutions - Coming Soon</p>
      </div>
    </section>
  </Layout>
);

export default VideoConferencing;
