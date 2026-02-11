import { Link } from "react-router-dom";
import { ArrowLeft, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const LegalNotice = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <Layout>
      <PageHero
        title="Legal Notice"
        description="Official legal information and company details for Avira Technologies"
        breadcrumbs={[{ label: "Home", path: "/" }, { label: "Legal Notice", path: "/legal-notice" }]}
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {/* Back Button */}
            <Link
              to="/"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 transition-colors font-semibold mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>

            {/* Legal Notice Content */}
            <div className="space-y-8">
              {/* Company Name */}
              <div className="text-center border-b-2 border-gray-200 pb-8">
                <h1 className="font-display text-4xl font-bold text-foreground mb-2">
                  Legal Notice
                </h1>
                <p className="font-display text-2xl font-semibold text-red-600">
                  :: Avira Technologies ::
                </p>
              </div>

              {/* Address */}
              <div className="bg-secondary rounded-xl p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                      Business Address
                    </h3>
                    <p className="text-foreground leading-relaxed">
                      789-C, Faisal Town<br />
                      Moulana Shoukat Ali Road<br />
                      Lahore, Pakistan<br />
                      Lahore 54660
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="space-y-4 pt-6 border-t border-border">
                  <div className="flex items-center gap-4">
                    <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href="tel:03111433316"
                        className="text-foreground font-semibold hover:text-red-600 transition-colors"
                      >
                        03-111 433 316
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href="mailto:info@aviratechnologies.com"
                        className="text-foreground font-semibold hover:text-red-600 transition-colors"
                      >
                        info@aviratechnologies.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Legal Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    Company Information
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Avira Technologies is a leading provider of comprehensive IT solutions, managed services, and technology integration services. We are committed to delivering cutting-edge technology solutions and exceptional customer service to businesses across various industries.
                  </p>
                </div>

                <div>
                  <h3 className="font-display font-semibold text-lg text-foreground mb-3">
                    Service Excellence
                  </h3>
                  <p className="text-foreground leading-relaxed">
                    Our dedicated team of certified professionals is committed to providing the highest standards of service, reliability, and support to all our clients. We maintain the highest levels of professionalism and technical expertise in everything we do.
                  </p>
                </div>
              </div>
            </div>

            {/* Back Button at Bottom */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link
                to="/"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary hover:bg-gray-200 text-foreground font-semibold transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default LegalNotice;
