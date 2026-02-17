import { useState, memo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const solutions = [
  { label: "Cyber Security", path: "/solutions/cyber-security" },
  { label: "Enterprise Network", path: "/solutions/enterprise-work" },
  { label: "Network Infrastructure", path: "/solutions/network-infrastructure" },
  { label: "Unified Communications", path: "/solutions/unified-communications" },
  { label: "Access Control", path: "/solutions/access-control" },
  { label: "Power & Energy", path: "/solutions/power-energy" },
  { label: "IP PABX", path: "/solutions/ip-pabx" },
  { label: "Video Conferencing", path: "/solutions/video-conferencing" },
  { label: "Video Surveillance", path: "/solutions/video-surveillance" },
];

const services = [
  { label: "Managed Services", path: "/services/managed-services" },
  { label: "Network Audit", path: "/services/network-audit" },
  { label: "Structured Cabling", path: "/services/structured-cabling" },
  { label: "Service Level Agreement", path: "/services/sla" },
  { label: "IT Resource Outsourcing", path: "/services/it-outsourcing" },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Solutions", path: "/solutions", children: solutions },
  { label: "Services", path: "/services", children: services },
  { label: "Smart Care", path: "/smart-care" },
  { label: "Office Supplies", path: "/office-supplies" },
  { label: "Partners", path: "/partners" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const handleLinkClick = () => {
    scrollToTop();
    setMobileOpen(false);
    setMobileExpandedDropdown(null);
  };

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setOpenDropdown(label);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setOpenDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 bg-white border-b border-gray-100 h-14 min-h-14">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14 min-h-14">
          {/* Logo */}
          <Link to="/" onClick={() => {
            window.scrollTo(0, 0);
            handleLinkClick();
          }} className="flex items-center gap-2 flex-shrink-0">
            <img src="https://cdn.builder.io/api/v1/image/assets%2F0c9ff3fe6b524af2b49a033e347f98b5%2Ff78eba7ee0394561bf7b611bedcf941b?format=webp&width=800&height=1200" alt="Avira Technologies" className="h-12 w-auto object-contain" style={{ maxHeight: '48px' }} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1 h-full">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && handleDropdownEnter(item.label)}
                onMouseLeave={() => item.children && handleDropdownLeave()}
              >
                <Link
                  to={item.path}
                  onClick={() => {
                    window.scrollTo(0, 0);
                    handleLinkClick();
                  }}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors nav-link ${
                    location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                      ? "text-red-600 active"
                      : "text-black/70 hover:text-black"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {item.children && openDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className={`absolute top-full left-0 mt-1 rounded-lg bg-card shadow-lg border border-border overflow-hidden ${
                      item.label === "Solutions" ? "w-72" : "w-56"
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => {
                          window.scrollTo(0, 0);
                          handleLinkClick();
                        }}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                          location.pathname === child.path
                            ? "text-red-600 bg-secondary"
                            : "text-card-foreground hover:bg-secondary"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-black flex items-center justify-center w-10 h-10 flex-shrink-0"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <line x1="3" y1="6" x2="21" y2="6" strokeWidth="2" strokeLinecap="round" />
                <line x1="6" y1="14" x2="18" y2="14" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <div className="flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md nav-link group">
                      <Link
                        to={item.path}
                        onClick={() => {
                          window.scrollTo(0, 0);
                          handleLinkClick();
                        }}
                        className={`flex-1 ${
                          location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                            ? "text-red-600 active"
                            : "text-black/70 group-hover:text-black"
                        }`}
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setMobileExpandedDropdown(
                            mobileExpandedDropdown === item.label ? null : item.label
                          );
                        }}
                        className="ml-2 flex-shrink-0"
                      >
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          mobileExpandedDropdown === item.label ? 'rotate-180' : ''
                        }`} />
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => {
                        window.scrollTo(0, 0);
                        handleLinkClick();
                      }}
                      className={`block px-3 py-2 text-sm font-medium rounded-md nav-link ${
                        location.pathname === item.path || location.pathname.startsWith(item.path + "/")
                          ? "text-red-600 active"
                          : "text-black/70 hover:text-black"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.children && mobileExpandedDropdown === item.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="ml-4 space-y-1 overflow-hidden"
                    >
                      {item.children.map((child) => (
                        <button
                          key={child.path}
                          type="button"
                          onClick={() => {
                            navigate(child.path);
                            window.scrollTo(0, 0);
                            setMobileOpen(false);
                            setMobileExpandedDropdown(null);
                          }}
                          className={`w-full text-left block px-3 py-1.5 text-sm font-medium nav-link ${
                            location.pathname === child.path
                              ? "text-red-600 active"
                              : "text-black/50 hover:text-black"
                          }`}
                        >
                          {child.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default memo(Navbar);
