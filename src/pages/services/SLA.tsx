import ServiceDetail from "@/pages/ServiceDetail";
import { FileCheck, Clock, Shield, HeadphonesIcon, BarChart3, Settings } from "lucide-react";

const SLA = () => (
  <ServiceDetail
    title="Service Level Agreement"
    description="Customized support plans with guaranteed response and resolution times."
    overview="Our Service Level Agreements provide peace of mind with clearly defined support commitments. Choose from flexible plans that match your business needs, with guaranteed response times and comprehensive service coverage."
    features={[
      { icon: FileCheck, title: "Tailored Support Plans", description: "Bronze, Silver, Gold, and Platinum tiers to fit your needs." },
      { icon: Clock, title: "Response Time Guarantees", description: "Committed response times from 4 hours to 15 minutes." },
      { icon: Shield, title: "Service Coverage", description: "On-site, remote, and hybrid support models." },
      { icon: HeadphonesIcon, title: "Priority Support", description: "Dedicated account managers and escalation paths." },
      { icon: BarChart3, title: "SLA Reporting", description: "Monthly reports on uptime, incidents, and performance." },
      { icon: Settings, title: "Preventive Maintenance", description: "Scheduled maintenance to prevent issues before they occur." },
    ]}
  />
);

export default SLA;
