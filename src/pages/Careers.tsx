import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Heart, TrendingUp, MapPin, Clock } from "lucide-react";

const openPositions = [
  { title: "Senior Network Engineer", dept: "Engineering", location: "Dubai, UAE", type: "Full-time" },
  { title: "Cyber Security Analyst", dept: "Security", location: "Dubai, UAE", type: "Full-time" },
  { title: "Cloud Solutions Architect", dept: "Engineering", location: "Abu Dhabi, UAE", type: "Full-time" },
  { title: "IT Project Manager", dept: "Operations", location: "Dubai, UAE", type: "Full-time" },
  { title: "Technical Support Engineer", dept: "Support", location: "Remote", type: "Full-time" },
];

const Careers = () => (
  <Layout>
    <PageHero title="Careers at Avira" description="Join our team of passionate technologists and help shape the future of enterprise IT." breadcrumbs={[{ label: "Home", path: "/" }, { label: "Careers", path: "/careers" }]} />

    {/* Culture */}
    <section className="py-20">
      <div className="container mx-auto px-3">
        <SectionHeader label="Culture" title="Why Work With Us" description="We foster an environment of growth, innovation, and collaboration." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Heart, title: "People First", desc: "We prioritize work-life balance and employee well-being." },
            { icon: TrendingUp, title: "Growth Opportunities", desc: "Continuous learning with training and certifications." },
            { icon: Briefcase, title: "Impactful Work", desc: "Work on challenging projects for major enterprises." },
            { icon: GraduationCap, title: "Internship Program", desc: "Start your career with hands-on IT experience." },
          ].map((item, i) => (
            <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border shadow-card">
              <item.icon className="w-8 h-8 text-electric mb-3" />
              <h3 className="font-display font-semibold text-card-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Open Positions */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-3">
        <SectionHeader label="Openings" title="Open Positions" description="Explore current opportunities to join our team." />
        <div className="max-w-3xl mx-auto space-y-4">
          {openPositions.map((pos, i) => (
            <motion.div key={pos.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="p-6 rounded-xl bg-card border border-border shadow-card flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-semibold text-card-foreground">{pos.title}</h3>
                <p className="text-muted-foreground text-sm">{pos.dept}</p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{pos.location}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{pos.type}</span>
              </div>
              <button className="px-4 py-2 rounded-lg gradient-electric text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Careers;
