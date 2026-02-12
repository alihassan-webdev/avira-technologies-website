import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface PageHeroProps {
  title: string;
  description: string;
  breadcrumbs?: { label: string; path: string }[];
}

const PageHero = ({ title, description, breadcrumbs }: PageHeroProps) => {
  return (
    <section className="gradient-navy py-20 md:py-28">
      <div className="container mx-auto px-6">
        {breadcrumbs && (
          <div className="flex items-center gap-2 text-sm text-primary-foreground/50 mb-6">
            {breadcrumbs.map((bc, i) => (
              <span key={bc.path} className="flex items-center gap-2">
                {i > 0 && <span>/</span>}
                <Link to={bc.path} className="hover:text-primary-foreground transition-colors">{bc.label}</Link>
              </span>
            ))}
          </div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-lg text-primary-foreground/70 max-w-2xl"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
