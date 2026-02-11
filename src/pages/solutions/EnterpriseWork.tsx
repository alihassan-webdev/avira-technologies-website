import SolutionDetail from "@/pages/SolutionDetail";
import { Server, Cloud, Cog, TrendingUp, Database, Monitor } from "lucide-react";

const EnterpriseWork = () => (
  <SolutionDetail
    title="Enterprise Work"
    description="Empowering enterprise productivity with modern IT solutions."
    overview="Drive digital transformation with our enterprise IT solutions. We help organizations modernize their infrastructure, optimize workflows, and build scalable systems that support growth and innovation."
    features={[
      { icon: Server, title: "Enterprise IT Solutions", description: "End-to-end IT infrastructure designed for enterprise-scale operations." },
      { icon: Cloud, title: "Cloud Migration", description: "Seamless cloud adoption strategies for hybrid and multi-cloud environments." },
      { icon: TrendingUp, title: "Digital Transformation", description: "Modernize business processes with cutting-edge digital tools." },
      { icon: Cog, title: "Infrastructure Optimization", description: "Performance tuning and resource optimization for maximum efficiency." },
      { icon: Database, title: "Data Management", description: "Centralized data solutions for better insights and decision-making." },
      { icon: Monitor, title: "Workspace Solutions", description: "Modern workplace tools that enhance collaboration and productivity." },
    ]}
  />
);

export default EnterpriseWork;
