import ServiceDetail from "@/pages/ServiceDetail";
import { Users, Monitor, Briefcase, UserPlus, Globe, HeadphonesIcon } from "lucide-react";

const ITOutsourcing = () => (
  <ServiceDetail
    title="IT Resource Outsourcing"
    description="Flexible IT staffing and outsourcing solutions for your business."
    overview="Scale your IT team on demand with our resource outsourcing services. Whether you need dedicated engineers, temporary project support, or remote IT staff, we provide skilled professionals who integrate seamlessly with your organization."
    features={[
      { icon: Users, title: "Dedicated IT Staff", description: "Full-time dedicated professionals embedded in your team." },
      { icon: Monitor, title: "Remote IT Support", description: "Expert remote support without geographic limitations." },
      { icon: Briefcase, title: "Project-Based Outsourcing", description: "Skilled teams for specific projects with defined timelines." },
      { icon: UserPlus, title: "Staff Augmentation", description: "Quickly scale your team with pre-vetted IT professionals." },
      { icon: Globe, title: "Offshore Services", description: "Cost-effective offshore IT teams managed to your standards." },
      { icon: HeadphonesIcon, title: "Technical Support", description: "Tiered helpdesk and technical support outsourcing." },
    ]}
  />
);

export default ITOutsourcing;
