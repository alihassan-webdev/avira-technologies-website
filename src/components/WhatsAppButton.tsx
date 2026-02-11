import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
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
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-all duration-300"
      style={{
        backgroundColor: "#25D366",
      }}
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
  );
};

export default WhatsAppButton;
