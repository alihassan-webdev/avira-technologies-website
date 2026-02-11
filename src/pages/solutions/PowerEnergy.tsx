import SolutionDetail from "@/pages/SolutionDetail";
import { Zap, Battery, Sun, BarChart3, Settings, Shield } from "lucide-react";

const PowerEnergy = () => (
  <SolutionDetail
    title="Power & Energy"
    description="Reliable power infrastructure and energy management solutions."
    overview="Ensure uninterrupted operations with our power and energy solutions. From UPS systems to solar installations and smart energy monitoring, we help organizations maintain reliable power while optimizing energy consumption."
    features={[
      { icon: Battery, title: "Backup Power Systems", description: "Enterprise UPS and generator systems for continuous uptime." },
      { icon: BarChart3, title: "Energy Monitoring", description: "Real-time energy consumption tracking and analytics." },
      { icon: Zap, title: "UPS Solutions", description: "Scalable uninterruptible power supply systems for critical loads." },
      { icon: Sun, title: "Solar Infrastructure", description: "Solar panel installations and renewable energy integration." },
      { icon: Settings, title: "Power Distribution", description: "Intelligent power distribution units and management systems." },
      { icon: Shield, title: "Surge Protection", description: "Advanced surge protection for sensitive equipment." },
    ]}
  />
);

export default PowerEnergy;
