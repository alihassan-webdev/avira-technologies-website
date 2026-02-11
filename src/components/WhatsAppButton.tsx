import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const WhatsAppButton = () => {
  const [showContact, setShowContact] = useState(false);
  const whatsappNumber = "923111433316"; // Pakistan number format
  const whatsappMessage = "Hello, I'm interested in your services!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col items-end gap-3">
      {/* Contact Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 10, x: 20 }}
        animate={showContact ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 10, x: 20 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-lg shadow-lg p-4 min-w-max"
        style={{
          pointerEvents: showContact ? "auto" : "none",
        }}
      >
        <h3 className="font-display font-semibold text-foreground mb-3 text-sm">Contact Us</h3>
        <div className="space-y-2 text-xs">
          <a
            href="tel:03111433316"
            className="flex items-center gap-2 text-foreground hover:text-red-600 transition-colors"
          >
            <span className="font-medium">Phone:</span>
            <span>03-111 433 316</span>
          </a>
          <a
            href="mailto:info@aviratechnologies.com"
            className="flex items-center gap-2 text-foreground hover:text-red-600 transition-colors"
          >
            <span className="font-medium">Email:</span>
            <span>info@aviratechnologies.com</span>
          </a>
        </div>
      </motion.div>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer transition-all duration-300"
        style={{
          backgroundColor: "#25D366",
        }}
        onMouseEnter={() => setShowContact(true)}
        onMouseLeave={() => setShowContact(false)}
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        title="Chat with us on WhatsApp"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-white text-3xl"
        />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
