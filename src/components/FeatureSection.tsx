import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { memo } from "react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureSectionProps {
  features: Feature[];
}

const FeatureSection = ({ features }: FeatureSectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.8, ease: "easeInOut" }}
          className="p-6 rounded-xl bg-card border border-border shadow-card"
        >
          <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center mb-4">
            <feature.icon className="w-5 h-5 text-accent-foreground" />
          </div>
          <h3 className="font-display font-semibold text-card-foreground mb-2">{feature.title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default memo(FeatureSection);
