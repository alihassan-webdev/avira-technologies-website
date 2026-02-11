import { Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black text-white py-1.5 text-xs md:text-sm h-8 min-h-8 flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-h-fit">
          {/* Contact Info */}
          <div className="flex items-center gap-4 md:gap-6">
            <a href="tel:03111433316" className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span>03-111 433 316</span>
            </a>
            <a href="mailto:info@aviratechnologies.com" className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
              <Mail className="w-4 h-4" />
              <span>info@aviratechnologies.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition-colors">
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
