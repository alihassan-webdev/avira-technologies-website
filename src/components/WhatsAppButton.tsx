import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import { useState, memo } from "react";

const WhatsAppButton = () => {
  const [showContact, setShowContact] = useState(false);
  const whatsappNumber = "923111433316"; // Pakistan number format
  const whatsappMessage = "Hello, I'm interested in your services!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-40 flex flex-col items-end gap-3">
      {/* Contact Us Message */}
      <motion.div
        initial={{ opacity: 0, y: 10, x: 20 }}
        animate={showContact ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: 10, x: 20 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="bg-white rounded-lg shadow-lg px-4 py-2 min-w-max"
        style={{
          pointerEvents: showContact ? "auto" : "none",
        }}
      >
        <p className="font-display font-semibold text-foreground text-sm">Contact Us</p>
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
        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        title="Chat with us on WhatsApp"
        aria-label="Chat with us on WhatsApp"
      >
        <FontAwesomeIcon
          icon={faWhatsapp}
          className="text-white text-3xl"
        />
      </motion.a>
    </div>
  );
};

export default memo(WhatsAppButton);
