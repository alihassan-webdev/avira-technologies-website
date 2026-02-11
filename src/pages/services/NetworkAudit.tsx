import ServiceDetail from "@/pages/ServiceDetail";
import { Network, Search, Gauge, Shield, FileCheck, BarChart3 } from "lucide-react";

const NetworkAudit = () => (
  <ServiceDetail
    title="Network Audit"
    description="Comprehensive network assessment and optimization services."
    overview="Understand your network's strengths and vulnerabilities with our thorough audit services. We assess performance, identify bottlenecks, test security posture, and provide actionable recommendations to optimize your network infrastructure."
    features={[
      { icon: Search, title: "Network Assessment", description: "Complete inventory and topology mapping of your network." },
      { icon: Gauge, title: "Performance Optimization", description: "Identify and resolve bottlenecks for optimal throughput." },
      { icon: Shield, title: "Security Testing", description: "Vulnerability scanning and penetration testing." },
      { icon: Network, title: "Traffic Analysis", description: "Deep packet inspection and traffic flow analysis." },
      { icon: FileCheck, title: "Compliance Review", description: "Ensure network meets industry compliance standards." },
      { icon: BarChart3, title: "Audit Reporting", description: "Detailed reports with prioritized recommendations." },
    ]}
  />
);

export default NetworkAudit;
