import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Shield, Lock, Eye, Cloud, AlertCircle, Clock } from "lucide-react";

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

    {/* Main Message Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Cybersecurity is much more than a matter of IT.
          </h2>
          <p className="text-2xl md:text-3xl text-red-600 font-bold mb-8">
            It's a matter of Business Survival.
          </p>
          <p className="text-xl text-muted-foreground font-semibold mb-4">
            Hackers don't take days off. Neither does our security.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Introduction Section */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            The Challenge
          </h3>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              In today's digital landscape, cybersecurity demands a proactive and intelligent approach. Modern businesses face constant challenges from phishing attacks and ransomware to insider threats that can disrupt operations and harm reputations.
            </p>
            <p>
              At Avira Technologies, we specialize in advanced cybersecurity solutions designed not just to protect your data, but to empower your business to grow and innovate with confidence.
            </p>
            <p>
              By securing your networks, endpoints, and cloud environments, our comprehensive cybersecurity services ensure that businesses across Pakistan remain resilient, protected, and future-ready.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Our Approach Section */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Our Approach
          </h2>
          <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12 mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Threats Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Sophisticated Threats
              </h3>
              <ul className="space-y-3">
                {[
                  "Phishing, ransomware, and zero-day exploits",
                  "Insider Risks – Accidental breaches and malicious actions",
                  "Cloud & Hybrid Vulnerabilities – Expanding attack surfaces"
                ].map((threat, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span>{threat}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solutions Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">
                Our Solutions
              </h3>
              <ul className="space-y-3">
                {[
                  "Proactive Defense – Predict and neutralize threats before they strike",
                  "360° Protection – Secure networks, endpoints, and cloud environments holistically",
                  "Business-Enabled Security – Safeguard data without slowing innovation"
                ].map((solution, i) => (
                  <li key={i} className="flex gap-3 text-muted-foreground">
                    <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services Grid */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Our Cybersecurity Services
          </h2>
          <div className="w-12 h-1 bg-gradient-electric rounded-full mb-12 mx-auto"></div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Security Audits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Eye className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Security Audits & Compliance
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Risk assessments and vulnerability scanning</li>
                <li>✓ Compliance with ISO, GDPR, HIPAA, PCI-DSS</li>
                <li>✓ Penetration testing and remediation planning</li>
              </ul>
            </motion.div>

            {/* Firewall & Perimeter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Lock className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Firewall & Perimeter Protection
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Next-generation firewalls (NGFWs)</li>
                <li>✓ Intrusion Detection & Prevention Systems (IDS/IPS)</li>
                <li>✓ Secure VPN & Remote Access Solutions</li>
              </ul>
            </motion.div>

            {/* Email & Web Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Shield className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Email & Web Security
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Spam filtering, phishing protection, and email encryption</li>
                <li>✓ Web content filtering and safe browsing policies</li>
              </ul>
            </motion.div>

            {/* Cloud Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Cloud className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Cloud Security Solutions
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Secure configuration of AWS, Azure, Google Cloud</li>
                <li>✓ Cloud workload protection and access control</li>
                <li>✓ SaaS security and cloud backup</li>
              </ul>
            </motion.div>

            {/* Endpoint Security */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <AlertCircle className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                End Point Security
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Antivirus, antimalware, and ransomware protection</li>
                <li>✓ Centralized endpoint monitoring and management</li>
                <li>✓ Device encryption and access control</li>
              </ul>
            </motion.div>

            {/* Threat Detection & Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="p-6 rounded-xl bg-card border border-border shadow-card"
            >
              <Clock className="w-8 h-8 text-electric mb-4" />
              <h3 className="font-display text-xl font-bold text-card-foreground mb-3">
                Threat Detection & Response (MDR/XDR)
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Real-time monitoring of systems and networks</li>
                <li>✓ AI-driven threat intelligence</li>
                <li>✓ Rapid incident response and forensic analysis</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Avira */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
            Why Choose Avira for Cybersecurity?
          </h2>
          <div className="w-12 h-1 bg-gradient-electric rounded-full mb-8 mx-auto"></div>

          <ul className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                title: "End-to-End Protection",
                desc: "From endpoints to the cloud, we've got you covered"
              },
              {
                title: "Proactive Monitoring",
                desc: "Identify and neutralize threats before they impact your business"
              },
              {
                title: "Custom Security Strategies",
                desc: "Solutions tailored to your industry, size, and compliance needs"
              },
              {
                title: "24/7 Incident Response",
                desc: "Immediate support when it matters most"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="flex gap-4 p-4 rounded-lg bg-secondary border-l-4 border-red-600"
              >
                <Shield className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default CyberSecurity;
