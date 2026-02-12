import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  index?: number;
}

const ServiceCard = ({ icon: Icon, title, description, link, index = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.9, ease: "easeInOut" }}
    >
      <Link
        to={link}
        className="group block p-6 rounded-xl bg-card border border-border hover:shadow-glow hover:border-electric/30 transition-all duration-300"
      >
        <div className="w-12 h-12 rounded-lg gradient-electric flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <Icon className="w-6 h-6 text-accent-foreground" />
        </div>
        <h3 className="font-display font-semibold text-lg text-card-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-electric group-hover:gap-2 transition-all">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
