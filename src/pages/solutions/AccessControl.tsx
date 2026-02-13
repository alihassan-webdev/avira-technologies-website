import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Lock, AlertTriangle, Shield, Fingerprint, Wifi, Smartphone, Eye, Smartphone2 } from "lucide-react";

const AccessControl = () => (
  <Layout>
    <PageHero
      title="Access Control"
      description="Safety, Communication, and Access Management Solutions"
      breadcrumbs={[
        { label: "Home", path: "/" },
        { label: "Solutions", path: "/solutions" },
        { label: "Access Control", path: "/solutions/access-control" }
      ]}
    />

    {/* Introduction Section */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Safety, Communication, and Access Management Solutions
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Avira Technologies delivers comprehensive, state-of-the-art solutions for access control, fire detection, parking management, and telecommunication systems.
            </p>
            <p>
              Our goal is to create safe, efficient, and well-managed environments for businesses, institutions, residential complexes, and commercial facilities.
            </p>
            <p>
              By integrating Access Control Systems, Fire Alarm and Burglar Alarm Systems, Parking Management Solutions, and PABX Panasonic Telephony Systems, we help you achieve complete operational control, enhanced security, and seamless communication.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Smart Access Control */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex items-start gap-4 mb-6">
            <Lock className="w-8 h-8 text-electric flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Smart Access Control and Identity Management
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We provide intelligent, secure, and scalable access control systems designed to protect your infrastructure and simplify identity management. From biometric authentication to multi-site integration, our solutions ensure that only the right people have access to the right places at the right time.
                </p>
                <p>
                  Whether you're managing a single office or a multi-location enterprise, our systems offer full control, visibility, and reporting capabilities to meet modern security demands.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border shadow-card p-6 mt-8">
            <h3 className="font-display text-xl font-bold text-card-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <Fingerprint className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Biometric authentication (fingerprint, facial recognition)</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Wifi className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>RFID, Smart Card, and Mobile Access Solutions</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Eye className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Visitor Management and Access Logging</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Multi-door, multi-site integration and remote monitoring</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Fire Alarm Systems */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex items-start gap-4 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Fire Alarm Systems
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Your safety is our priority. We provide advanced fire and burglar alarm systems designed to protect your people, property, and operations from unforeseen threats.
                </p>
                <p>
                  Our Fire Alarm Systems offer rapid smoke and heat detection, ensuring instant alerts and integration with emergency response. From commercial buildings to critical infrastructure, we design reliable systems that meet national safety standards.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border shadow-card p-6 mt-8">
            <h3 className="font-display text-xl font-bold text-card-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Fire Detection and Smoke Alarm Systems (Conventional and Addressable)</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Heat Sensors, Sirens and Control Panels</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Eye className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>Intrusion and Motion Detectors with Remote Monitoring</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span>24/7 Monitoring and Emergency Integration Support</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Burglar Alarm System */}
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex items-start gap-4 mb-6">
            <Shield className="w-8 h-8 text-electric flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Burglar Alarm System
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Your safety is our priority. We provide advanced fire and burglar alarm systems designed to protect your people, property, and operations from unforeseen threats.
                </p>
                <p>
                  Our Burglar Alarm Systems offer smart intrusion detection with real-time notifications, motion sensors, and remote access giving you total control and peace of mind, whether you're on-site or away.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border shadow-card p-6 mt-8">
            <h3 className="font-display text-xl font-bold text-card-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Fire Detection and Smoke Alarm Systems (Conventional and Addressable)</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Heat Sensors, Sirens and Control Panels</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Eye className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Intrusion and Motion Detectors with Remote Monitoring</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Glass Break, Door, and Window Contact Sensors</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>24/7 Monitoring and Emergency Integration Support</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Smart Parking Management */}
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <div className="flex items-start gap-4 mb-6">
            <Smartphone className="w-8 h-8 text-electric flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Smart Parking Management Solutions
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  We provide advanced Parking Management Systems that streamline vehicle access, improve security, and enhance visitor and employee convenience. From automated gate control to license plate recognition and RFID access, our solutions are designed to optimize your facility's parking space while ensuring full visibility and control.
                </p>
                <p>
                  Whether for corporate offices, residential buildings, hospitals, or commercial complexes, our smart parking solutions reduce congestion, enhance security, and deliver a better user experience.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl border border-border shadow-card p-6 mt-8">
            <h3 className="font-display text-xl font-bold text-card-foreground mb-4">Key Features</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-muted-foreground">
                <Wifi className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Automated Entry/Exit with RFID or ANPR (License Plate Recognition)</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Eye className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Real-time Space Availability Monitoring</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Smartphone className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Visitor and Staff Parking Logs with Centralized Reporting</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Shield className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Integration with Access Control and Surveillance</span>
              </li>
              <li className="flex gap-3 text-muted-foreground">
                <Smartphone className="w-5 h-5 text-electric flex-shrink-0 mt-1" />
                <span>Mobile App or Web-Based Dashboard for Admin Control</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AccessControl;
