import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, GraduationCap, ClipboardList, Mail, ArrowRight } from "lucide-react";

const Careers = () => {
  const jobs = [
    {
      title: "Network Administrator",
      type: "Full-Time Position",
      salary: "Market Competitive",
      location: "Head Office, Lahore",
      description: "Avira Technologies is currently seeking a dynamic Network Administrator for an exciting project. As a vital team member, you will be crucial in maintaining and optimizing our network and security systems. Apply now!",
      responsibilities: [
        "Swiftly resolving network and security issues in real-time at all levels.",
        "Demonstrating expertise in routers, encompassing routing protocols, WLAN configurations, and managing multiple sites.",
        "Troubleshooting and analyzing firewalls such as pfSense and Fortinet.",
        "Proficiency in network load balancers, VoIP, IP telephony, VC, Wi-Fi, and Polycom video conferencing solutions.",
        "Conducting proactive vulnerability testing and managing firewall and security policies.",
        "Installation and troubleshooting of Domain Controller, Active Directory, Office 365, Grand Stream Access point with Controller, and server management with VMWare expertise."
      ],
      qualifications: [
        "Bachelor's degree in Computer Sciences",
        "MCSE / CCNA",
        "At least 03 years of IT Network Experience"
      ]
    },
    {
      title: "IT/Network Administrator (Evening/Night Shift)",
      type: "Full-Time Position",
      salary: "Full-Time Position",
      location: "DHA Phase 6, Lahore",
      description: "We're on the lookout for a skilled and experienced \"IT Administrator\" to be deployed at one of our esteemed clients in DHA Phase 6, Lahore. An ideal candidate must have strong technical skills in IT infrastructure, networking, Windows, and end user support.",
      qualifications: [
        "Bachelors in Computer Science.",
        "CCNA + MCSE Certification"
      ]
    }
  ];

  return (
    <Layout>
      <PageHero 
        title="Careers" 
        description="Join our team of innovators and shape the future of technology." 
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Careers", path: "/careers" }]} 
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Embark on an exhilarating journey powered by your passion and expertise in innovative business technology. 
                Whether you excel in cloud computing, data center management, or safeguarding information with OpenStack proficiency, 
                we are looking for trailblazers like you.
              </p>
              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl inline-block text-left max-w-2xl">
                <p className="text-lg font-medium text-foreground mb-4">Are you ready to turn your career aspirations into reality?</p>
                <a 
                  href="mailto:jobs@aviratechnologies.com" 
                  className="inline-flex items-center gap-2 text-red-600 font-bold hover:gap-3 transition-all underline-offset-4 hover:underline"
                >
                  Send your resume to jobs@aviratechnologies.com
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <SectionHeader title="Available Positions" description="Explore our current job openings and find your next challenge." />

          <div className="grid gap-16 max-w-5xl mx-auto mt-12">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group bg-card border border-border rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-10">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 group-hover:text-red-600 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 md:gap-6 text-sm">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-muted-foreground font-medium whitespace-nowrap">
                          <Briefcase className="w-4 h-4 text-red-600" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-muted-foreground font-medium whitespace-nowrap">
                          <DollarSign className="w-4 h-4 text-red-600" />
                          {job.salary}
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full text-muted-foreground font-medium whitespace-nowrap">
                          <MapPin className="w-4 h-4 text-red-600" />
                          {job.location}
                        </div>
                      </div>
                    </div>
                    <a 
                      href="mailto:jobs@aviratechnologies.com" 
                      className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/20 active:scale-95 text-center min-w-[160px]"
                    >
                      Apply Now
                    </a>
                  </div>

                  <div className="space-y-10">
                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
                        <ClipboardList className="w-5 h-5 text-red-600" />
                        Job Description
                      </h4>
                      <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                        {job.description}
                      </p>
                      {job.responsibilities && (
                        <ul className="space-y-3 ml-1">
                          {job.responsibilities.map((resp, i) => (
                            <li key={i} className="flex gap-3 text-muted-foreground">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold mt-0.5">
                                {i + 1}
                              </span>
                              <span className="flex-1 leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
                        <GraduationCap className="w-5 h-5 text-red-600" />
                        Qualification
                      </h4>
                      <ul className="space-y-3 ml-1">
                        {job.qualifications.map((qual, i) => (
                          <li key={i} className="flex gap-3 text-muted-foreground">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0"></div>
                            <span className="flex-1 leading-relaxed">{qual}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-12 bg-gradient-to-br from-secondary to-white rounded-3xl text-center border border-border shadow-inner"
          >
            <Mail className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h3 className="text-3xl font-bold mb-6">Can't find the right role?</h3>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              We are always looking for talented individuals to join our team. 
              If you don't see a position that matches your skills, send your CV to 
              <a href="mailto:jobs@aviratechnologies.com" className="text-red-600 font-bold mx-2 hover:underline">jobs@aviratechnologies.com</a> 
              and let's shape the future together.
            </p>
            <a 
              href="mailto:jobs@aviratechnologies.com" 
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl border-2 border-red-600 text-red-600 font-bold hover:bg-red-600 hover:text-white transition-all"
            >
              Contact HR Team
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Careers;
