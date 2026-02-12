import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";
import { memo } from "react";

const Footer = memo(() => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className="container mx-auto px-6 py-8 pb-24 md:pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {/* Company */}
          <div>
            <Link to="/" onClick={scrollToTop} className="inline-block mb-6">
              <img src="https://cdn.builder.io/api/v1/image/assets%2F908b9109f6414714af82a2f291ed7235%2Fe59bf21f63bd44f6932a00eaf5042317?format=webp&width=800&height=1200" alt="Avira Technologies" className="h-12 w-auto" />
            </Link>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Your trusted partner for end-to-end IT solutions, managed services, and technology integration.
            </p>
            <div className="space-y-3 text-sm">
              <a href="tel:03111433316" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors py-1">
                <Phone className="w-4 h-4" /> 03-111 433 316
              </a>
              <a href="mailto:info@aviratechnologies.com" className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors py-1">
                <Mail className="w-4 h-4" /> info@aviratechnologies.com
              </a>
              <div className="flex items-center gap-2 text-gray-700 py-1">
                <MapPin className="w-4 h-4" /> Pakistan
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Solutions</h4>
            <ul className="space-y-2 md:space-y-2 text-sm">
              {["Cyber Security", "Enterprise Work", "Unified Communications", "Access Control", "Power & Energy", "Video Surveillance"].map((s) => (
                <li key={s} className="py-1">
                  <Link to={`/solutions/${s.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors block py-1">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Services</h4>
            <ul className="space-y-2 md:space-y-2 text-sm">
              {["Managed Services", "Network Audit", "Structured Cabling", "Service Level Agreement", "IT Resource Outsourcing"].map((s) => (
                <li key={s} className="py-1">
                  <Link to={`/services/${s.toLowerCase().replace(/ /g, "-")}`} onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors block py-1">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies and Social Icons */}
          <div>
            <h4 className="font-display font-semibold mb-4 text-black">Policies</h4>
            <ul className="space-y-3 text-sm mb-6">
              <li className="py-1">
                <Link to="/privacy-policy" onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors block py-1">
                  Privacy Policy
                </Link>
              </li>
              <li className="py-1">
                <Link to="/legal-notice" onClick={scrollToTop} className="text-gray-600 hover:text-red-600 transition-colors block py-1">
                  Legal Notice
                </Link>
              </li>
            </ul>
            {/* Follow Heading */}
            <h5 className="font-display font-semibold mb-3 text-black text-sm">Follow on</h5>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/AviraTechnologies" target="_blank" rel="noopener noreferrer" className="transition-colors p-1 hover:opacity-80" style={{ color: '#1877F2' }}>
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/aviratechnologies" target="_blank" rel="noopener noreferrer" className="transition-colors p-1 hover:opacity-80" style={{ color: '#E4405F' }}>
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/aviratechnologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="transition-colors p-1 hover:opacity-80" style={{ color: '#0A66C2' }}>
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/channel/UCKgZv8iwMsbKegrKChGm5Ww" target="_blank" rel="noopener noreferrer" className="transition-colors p-1 hover:opacity-80" style={{ color: '#FF0000' }}>
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 mt-10 pt-8 text-center">
          <p className="text-gray-600 text-sm">© 2026 Avira Technologies. All rights reserved. hr sale</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
