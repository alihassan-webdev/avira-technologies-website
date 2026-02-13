import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Video, Users, Share2, Zap, Lock, Monitor, Smartphone, Cloud, CheckCircle2, Globe } from "lucide-react";

const VideoConferencing = () => (
  <Layout>
    <PageHero
      title="Video Conferencing"
      description="Seamless Meetings. Face-to-Face Connection. Anywhere, Anytime."
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Video Conferencing", path: "/solutions/video-conferencing" }
      ]}
    />

    {/* Introduction Section */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <p className="text-sm md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed italic">
            Distance is no longer a barrier - bring your team together with crystal clear video and audio conferencing.
          </p>
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8">
            Enterprise Video Conferencing Solutions
          </h2>
          <div className="space-y-3 md:space-y-4 text-sm md:text-lg text-muted-foreground leading-relaxed">
            <p>
              In the era of distributed teams and remote work, reliable video conferencing is essential for collaboration and productivity. Avira Technologies provides high-quality video conferencing solutions powered by leading platforms like Zoom, Microsoft Teams, and Cisco Webex.
            </p>
            <p>
              We deliver complete conferencing ecosystems that include hardware, software, integration, and 24/7 support - ensuring your team can collaborate effectively from anywhere in the world.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Our Services */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10 text-center">
            Our Video Conferencing Services
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                icon: Video,
                title: "Platform Deployment & Configuration",
                desc: "Complete setup of Zoom, Microsoft Teams, Cisco Webex, or other platforms tailored to your organization."
              },
              {
                icon: Monitor,
                title: "Meeting Room Systems & Equipment",
                desc: "Professional-grade video conference systems, PTZ cameras, codecs, and displays for immersive meeting experiences."
              },
              {
                icon: Share2,
                title: "Screen Sharing & Collaboration",
                desc: "Advanced content sharing, whiteboarding, and collaboration features enabling effective remote teamwork."
              },
              {
                icon: Users,
                title: "Large-Scale Webinar & Event Solutions",
                desc: "Hosting infrastructure for large webinars, virtual events, and all-hands meetings with thousands of participants."
              },
              {
                icon: Cloud,
                title: "Cloud Integration & Hybrid Solutions",
                desc: "Seamless integration between on-premises and cloud-based conferencing for flexible hybrid work environments."
              },
              {
                icon: Zap,
                title: "Training & User Adoption",
                desc: "Comprehensive training programs ensuring your team maximizes the capabilities of your conferencing platform."
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card"
                >
                  <div className="flex gap-3 md:gap-4 mb-2 md:mb-3">
                    <Icon className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                    <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.title}</h3>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground ml-8 md:ml-10 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Platforms We Support */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10 text-center">
            Leading Conferencing Platforms
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Zoom Meetings & Webinars" },
              { name: "Microsoft Teams" },
              { name: "Cisco Webex" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card text-center"
              >
                <Globe className="w-8 md:w-10 h-8 md:h-10 text-electric mx-auto mb-3 md:mb-4" />
                <p className="font-semibold text-card-foreground text-sm md:text-base">{item.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Key Features */}
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10 text-center">
            Benefits & Key Features
          </h2>
          <div className="space-y-4 md:space-y-6">
            {[
              {
                title: "HD & 4K Video Quality",
                desc: "Crystal-clear video and audio quality providing a face-to-face meeting experience even when participants are thousands of miles apart."
              },
              {
                title: "Seamless Collaboration",
                desc: "Share presentations, documents, whiteboards, and applications enabling teams to collaborate effectively and make real-time decisions."
              },
              {
                title: "Security & Compliance",
                desc: "End-to-end encryption, password protection, waiting rooms, and compliance with industry standards protecting your communications."
              },
              {
                title: "Easy Meeting Access",
                desc: "Join meetings from any device - computers, tablets, or smartphones - without installation or technical barriers."
              },
              {
                title: "Recording & Playback",
                desc: "Record meetings for documentation, training, and asynchronous viewing allowing team members to catch up at their convenience."
              },
              {
                title: "IT Management & Analytics",
                desc: "Centralized user management, meeting analytics, and detailed reporting giving IT teams visibility and control."
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card"
              >
                <div className="flex gap-3 md:gap-4 mb-2 md:mb-3">
                  <CheckCircle2 className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground ml-8 md:ml-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-12 md:py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground mb-6 md:mb-8 text-center">
            Why Choose Avira for Video Conferencing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {[
              { title: "Platform Expertise", desc: "Deep knowledge of Zoom, Teams, Webex, and other leading platforms." },
              { title: "End-to-End Solutions", desc: "From hardware procurement to software setup and training - we handle everything." },
              { title: "24/7 Technical Support", desc: "Dedicated support team ensuring your conference systems run smoothly." },
              { title: "Cost Optimization", desc: "Help you select the right platform and licensing model for your organization." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 md:p-6 bg-card rounded-xl border border-border shadow-card"
              >
                <div className="flex gap-3 md:gap-4 mb-2 md:mb-3">
                  <Lock className="w-5 md:w-6 h-5 md:h-6 text-electric flex-shrink-0 mt-1" />
                  <h3 className="font-semibold text-card-foreground text-sm md:text-base">{item.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground ml-8 md:ml-10 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default VideoConferencing;
