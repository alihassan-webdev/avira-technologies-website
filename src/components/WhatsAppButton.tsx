import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const whatsappNumber = "923111433316"; // Pakistan number format
  const whatsappMessage = "Hello, I'm interested in your services!";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-16 h-16 rounded-full text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        backgroundColor: "#25D366",
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: "0 10px 30px rgba(37, 211, 102, 0.4)",
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      title="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={24} style={{ filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))" }} />
    </motion.a>
  );
};

export default WhatsAppButton;
