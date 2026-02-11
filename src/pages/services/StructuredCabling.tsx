import ServiceDetail from "@/pages/ServiceDetail";
import { Cable, Wifi, Server, Building, Wrench, FileCheck } from "lucide-react";

const StructuredCabling = () => (
  <ServiceDetail
    title="Structured Cabling"
    description="Professional LAN/WAN cabling and data center infrastructure."
    overview="Build a reliable foundation for your network with our structured cabling solutions. We design and install high-performance cabling systems for offices, data centers, and campus environments using industry-standard practices."
    features={[
      { icon: Cable, title: "LAN/WAN Cabling", description: "Cat6/Cat6A ethernet cabling for local and wide area networks." },
      { icon: Wifi, title: "Fiber Optics", description: "Single-mode and multi-mode fiber optic installations." },
      { icon: Server, title: "Rack & Data Center", description: "Server rack setup, cable management, and data center cabling." },
      { icon: Building, title: "Building Wiring", description: "Complete structured wiring for new construction and retrofits." },
      { icon: Wrench, title: "Testing & Certification", description: "Cable testing and certification to industry standards." },
      { icon: FileCheck, title: "Documentation", description: "Complete as-built documentation and labeling." },
    ]}
  />
);

export default StructuredCabling;
