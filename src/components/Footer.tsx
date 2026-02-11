import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-3 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-6">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F908b9109f6414714af82a2f291ed7235%2Fe59bf21f63bd44f6932a00eaf5042317?format=webp&width=800&height=1200" alt="Avira Technologies" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Your trusted partner for end-to-end IT solutions, managed services, and technology integration.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:03111433316" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
                <Phone className="w-4 h-4" /> 03-111 433 316
              </a>
              <a href="mailto:info@aviratechnologies.com" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors">
                <Mail className="w-4 h-4" /> info@aviratechnologies.com
              </a>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="w-4 h-4" /> Pakistan
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gray-200">
              <a href="https://www.facebook.com/AviraTechnologies" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/aviratechnologies" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/aviratechnologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCKgZv8iwMsbKegrKChGm5Ww" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Solutions</h4>
            <ul className="space-y-2 text-sm">
              {["Cyber Security", "Enterprise Work", "Unified Communications", "Access Control", "Power & Energy", "Video Surveillance"].map((s) => (
                <li key={s}>
                  <Link to={`/solutions/${s.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Services</h4>
            <ul className="space-y-2 text-sm">
              {["Managed Services", "Network Audit", "Structured Cabling", "Service Level Agreement", "IT Resource Outsourcing"].map((s) => (
                <li key={s}>
                  <Link to={`/services/${s.toLowerCase().replace(/ /g, "-")}`} onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "About Us", path: "/about" },
                { label: "Smart Care", path: "/smart-care" },
                { label: "Office Supplies", path: "/office-supplies" },
                { label: "Partners", path: "/partners" },
                { label: "Careers", path: "/careers" },
                { label: "Contact", path: "/contact" },
              ].map((l) => (
                <li key={l.path}>
                  <Link to={l.path} onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-gray-600">© 2025 Avira Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors">Privacy Policy</Link>
            <Link to="/legal-notice" onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors">Legal Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
