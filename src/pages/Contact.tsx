import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, Send, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [captchaValue, setCaptchaValue] = useState("A7B2X");

  const handleRefreshCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let newCaptcha = "";
    for (let i = 0; i < 5; i++) {
      newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaValue(newCaptcha);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent successfully.");
  };

  const locations = [
    {
      city: "Lahore",
      country: "Pakistan",
      address: "789-C, Faisal Town. Moulana Shoukat Ali Road, Lahore Pakistan, Punjab.",
      phone: "+92-3 111 433 316, 0321 4497 626",
      email: "info@aviratechnologies.com",
      website: "www.aviratechnologies.com"
    },
    {
      city: "Islamabad",
      country: "Pakistan",
      address: "Off # 9, 4th Floor Zeeshan Arcade G-13/1, Islamabad- ICT- Pakistan",
      phone: "+92-3 111 433 316, 0321 4497 626",
      email: "info@aviratechnologies.com",
      website: "www.aviratechnologies.com"
    },
    {
      city: "ESSEX",
      country: "UNITED KINGDOM",
      address: "Office 6076 321-323 high road, Chadwell Heath. Essex. United Kingdom RM6,",
      phone: "+44 79 2337 8537",
      email: "info@aviratechnologies.com",
      website: "www.aviratechnologies.com"
    },
    {
      city: "Colorado",
      country: "United States",
      address: "1942 Broadway Street, Suite 314C, Boulder CO 80302 US, Colorado United States,",
      phone: "+1 720 604 8446",
      email: "info@aviratechnologies.com",
      website: "www.aviratechnologies.com"
    }
  ];

  return (
    <Layout>
      <PageHero 
        title="Contact Us" 
        description="Have a question, suggestion, or just want to say hello? We'd love to hear from you! Use the information below to get in touch with our team!" 
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Contact", path: "/contact" }]} 
      />
      
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          {/* Contact Form - Full Width on top */}
          <div className="max-w-4xl mx-auto mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-center">Get in touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6 bg-secondary/5 p-8 md:p-12 rounded-3xl border border-border">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
                    <input type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="Enter your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
                    <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="Enter phone number" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex justify-between">
                    Email
                    <span className="text-[10px] text-red-600 font-normal normal-case italic">Use temp mail</span>
                  </label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="Enter your email" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Message</label>
                  <textarea required rows={4} className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="privacy" required className="mt-1.5 h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600" />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed">
                    I have read and understand the privacy policy.
                  </label>
                </div>

                {/* Captcha Section */}
                <div className="space-y-4 pt-4 border-t border-border">
                  <label className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Captcha</label>
                  <div className="flex flex-wrap items-center gap-4">
                    <div className="bg-secondary px-6 py-3 rounded-lg font-mono text-xl tracking-widest select-none border border-dashed border-red-600/30 line-through decoration-red-600/20 italic">
                      {captchaValue}
                    </div>
                    <button type="button" onClick={handleRefreshCaptcha} className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium transition-colors">
                      <RefreshCw className="w-4 h-4" />
                      Unreadable? Load new
                    </button>
                  </div>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:ring-2 focus:ring-red-600 transition-all" placeholder="Enter the code above" />
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-red-600 text-white font-bold text-lg hover:bg-red-700 transition-all shadow-lg hover:shadow-red-600/20 flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>

          {/* Location Information - Below Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Our Locations</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((loc, idx) => (
                <div key={idx} className="group p-8 rounded-2xl border border-border hover:border-red-600/30 hover:shadow-xl transition-all duration-300 bg-secondary/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h3 className="text-xl font-bold uppercase tracking-tight text-red-600">
                      {loc.city} <span className="text-muted-foreground font-medium">-</span> {loc.country}
                    </h3>
                  </div>
                  
                  <div className="grid gap-4">
                    <div className="flex gap-4">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <p className="text-muted-foreground leading-relaxed">{loc.address}</p>
                    </div>
                    <div className="flex gap-4">
                      <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-muted-foreground">{loc.phone}</p>
                    </div>
                    <div className="flex gap-4">
                      <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-muted-foreground">{loc.email}</p>
                    </div>
                    <div className="flex gap-4">
                      <Globe className="w-5 h-5 text-red-600 flex-shrink-0" />
                      <p className="text-muted-foreground">{loc.website}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Map or Global Presence Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Serving Clients Globally</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
              From Pakistan to the United Kingdom and the United States, Avira Technologies provides world-class IT solutions and support wherever you are.
            </p>
            <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.444747717464!2d74.3168673!3d31.4844391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919040000000000%3A0x0!2zMzHCsDI5JzAzLjkiTiA3NMKwMTknMDAuNyJF!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
