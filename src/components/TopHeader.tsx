import { Phone, Mail, Facebook, Linkedin, Instagram, Youtube } from "lucide-react";

const TopHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black text-white py-1.5 text-xs md:text-sm h-8 min-h-8 flex items-center">
      <div className="container mx-auto px-6 w-full">
        <div className="flex flex-row items-center justify-between gap-2 min-h-fit">
          {/* Contact Info */}
          <div className="flex items-center gap-3 md:gap-4">
            <a href="tel:03111433316" className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">03-111 433 316</span>
            </a>
            <a href="mailto:info@aviratechnologies.com" className="flex items-center gap-1.5 hover:text-red-500 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden md:inline">info@aviratechnologies.com</span>
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/AviraTechnologies" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1877F2'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/aviratechnologies" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#E4405F'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.linkedin.com/company/aviratechnologies/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0A66C2'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/channel/UCKgZv8iwMsbKegrKChGm5Ww" target="_blank" rel="noopener noreferrer" className="transition-colors" style={{ color: 'inherit' }} onMouseEnter={(e) => e.currentTarget.style.color = '#FF0000'} onMouseLeave={(e) => e.currentTarget.style.color = 'inherit'}>
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
