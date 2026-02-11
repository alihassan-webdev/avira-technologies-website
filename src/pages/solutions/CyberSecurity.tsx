import SolutionDetail from "@/pages/SolutionDetail";
import { Shield, Lock, Eye, AlertTriangle, Server, FileCheck } from "lucide-react";

const CyberSecurity = () => (
  <SolutionDetail
    title="Cyber Security"
    description="Protecting your digital assets with enterprise-grade security solutions."
    overview="In today's threat landscape, cyber security is not optional — it's essential. Avira Technologies provides comprehensive security services including threat detection, network security, data protection, and expert consulting to keep your business safe from evolving digital threats."
    features={[
      { icon: Shield, title: "Threat Protection", description: "Advanced threat detection and prevention systems to safeguard your infrastructure." },
      { icon: Lock, title: "Network Security", description: "Firewalls, intrusion detection, and network segmentation to protect your perimeter." },
      { icon: Eye, title: "Security Monitoring", description: "24/7 security operations center for continuous threat monitoring and response." },
      { icon: AlertTriangle, title: "Incident Response", description: "Rapid response and recovery plans to minimize damage from security breaches." },
      { icon: Server, title: "Data Protection", description: "Encryption, DLP, and backup solutions to secure your critical data." },
      { icon: FileCheck, title: "Security Consulting", description: "Risk assessments, compliance audits, and security strategy development." },
    ]}
  />
);

export default CyberSecurity;
