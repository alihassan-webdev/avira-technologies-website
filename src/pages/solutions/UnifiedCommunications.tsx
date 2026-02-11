import SolutionDetail from "@/pages/SolutionDetail";
import { Phone, Video, Cloud, MessageSquare, Headphones, Globe } from "lucide-react";

const UnifiedCommunications = () => (
  <SolutionDetail
    title="Unified Communications"
    description="Seamless communication and collaboration solutions for modern teams."
    overview="Unify your organization's communication channels with our integrated solutions. From VoIP to video conferencing and cloud messaging, we help teams collaborate effectively regardless of location."
    features={[
      { icon: Phone, title: "VoIP Solutions", description: "Enterprise-grade voice over IP systems with crystal-clear quality." },
      { icon: Video, title: "Video Conferencing", description: "HD video collaboration tools for remote and hybrid teams." },
      { icon: Cloud, title: "Cloud Communication", description: "Scalable cloud-based communication platforms." },
      { icon: MessageSquare, title: "Messaging Systems", description: "Secure instant messaging and team chat solutions." },
      { icon: Headphones, title: "Contact Center", description: "Omnichannel contact center solutions for customer engagement." },
      { icon: Globe, title: "Collaboration Tools", description: "Integrated tools for document sharing and project collaboration." },
    ]}
  />
);

export default UnifiedCommunications;
