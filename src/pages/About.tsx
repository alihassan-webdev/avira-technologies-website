import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import FeatureSection from "@/components/FeatureSection";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Shield, Users, Award, TrendingUp } from "lucide-react";

const values = [
  { icon: Lightbulb, title: "Innovation", description: "We embrace new technologies and creative solutions to stay ahead." },
  { icon: Shield, title: "Integrity", description: "Transparency and honesty guide every client engagement." },
  { icon: Users, title: "Collaboration", description: "We work as an extension of your team, not just a vendor." },
  { icon: Award, title: "Excellence", description: "We deliver nothing short of the highest quality in every project." },
  { icon: TrendingUp, title: "Growth", description: "Continuously learning and improving to better serve our clients." },
  { icon: Heart, title: "Commitment", description: "Dedicated to long-term partnerships and client success." },
];

const team = [
  { name: "Mohammed Al-Fayed", role: "CEO & Founder", bio: "20+ years in enterprise IT leadership." },
  { name: "Priya Sharma", role: "CTO", bio: "Expert in cloud architecture and cyber security." },
  { name: "James Wilson", role: "VP of Operations", bio: "Specializes in IT service delivery and SLA management." },
  { name: "Fatima Hassan", role: "Director of Sales", bio: "Drives strategic partnerships across the region." },
];

const About = () => (
  <Layout>
    <PageHero
      title="About Avira Technologies"
      description="A trusted technology partner delivering innovative IT solutions across the Middle East and beyond."
      breadcrumbs={[{ label: "Home", path: "/" }, { label: "About Us", path: "/about" }]}
    />

    {/* Overview */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader label="Our Story" title="Pioneering IT Excellence Since 2010" description="Founded with a vision to empower businesses through technology, Avira Technologies has grown into a leading IT solutions provider serving enterprises across diverse industries." />
          <p className="text-muted-foreground leading-relaxed">
            From our headquarters in Dubai, we've expanded our reach to serve clients across the GCC and beyond. Our team of certified professionals combines deep technical expertise with a genuine commitment to understanding each client's unique challenges and goals.
          </p>
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-xl bg-card border border-border shadow-card">
            <Target className="w-10 h-10 text-electric mb-4" />
            <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">To deliver world-class technology solutions that enable businesses to operate securely, efficiently, and innovatively in an increasingly digital world.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-8 rounded-xl bg-card border border-border shadow-card">
            <Eye className="w-10 h-10 text-electric mb-4" />
            <h3 className="font-display text-2xl font-bold text-card-foreground mb-3">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">To be the most trusted and innovative technology partner in the region, setting the benchmark for excellence in IT solutions and services.</p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader label="Values" title="Our Core Values" description="The principles that guide everything we do." />
        <FeatureSection features={values} />
      </div>
    </section>

    {/* Leadership */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <SectionHeader label="Team" title="Leadership Team" description="Meet the people driving Avira's vision forward." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-xl bg-card border border-border shadow-card text-center">
              <div className="w-20 h-20 rounded-full gradient-navy mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-primary-foreground">{member.name.charAt(0)}</span>
              </div>
              <h3 className="font-display font-semibold text-card-foreground">{member.name}</h3>
              <p className="text-electric text-sm mb-2">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
