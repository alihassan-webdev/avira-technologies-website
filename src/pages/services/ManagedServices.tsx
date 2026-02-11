import ServiceDetail from "@/pages/ServiceDetail";
import { Settings, Monitor, Cloud, HeadphonesIcon, BarChart3, Shield } from "lucide-react";

const ManagedServices = () => (
  <ServiceDetail
    title="Managed Services"
    description="Complete IT infrastructure management and 24/7 support."
    overview="Focus on your core business while we take care of your IT. Our managed services provide comprehensive infrastructure management, proactive monitoring, and responsive support to keep your systems running optimally."
    features={[
      { icon: Settings, title: "IT Infrastructure Management", description: "End-to-end management of servers, networks, and endpoints." },
      { icon: Monitor, title: "Monitoring & Support", description: "24/7 proactive monitoring with instant alerting and response." },
      { icon: Cloud, title: "Cloud Services", description: "Cloud infrastructure management across AWS, Azure, and GCP." },
      { icon: HeadphonesIcon, title: "Help Desk", description: "Multi-tier technical support for your employees." },
      { icon: BarChart3, title: "Reporting & Analytics", description: "Regular performance reports and optimization recommendations." },
      { icon: Shield, title: "Security Management", description: "Managed security services including patching and updates." },
    ]}
  />
);

export default ManagedServices;
