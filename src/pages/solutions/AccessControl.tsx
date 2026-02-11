import SolutionDetail from "@/pages/SolutionDetail";
import { Fingerprint, CreditCard, Lock, Clock, Smartphone, Users } from "lucide-react";

const AccessControl = () => (
  <SolutionDetail
    title="Access Control"
    description="Secure your premises with intelligent access management systems."
    overview="Control who enters your facilities with our comprehensive access control solutions. From biometric scanners to smart card readers and mobile-based access, we provide secure and convenient solutions for organizations of all sizes."
    features={[
      { icon: Fingerprint, title: "Biometric Systems", description: "Fingerprint, facial recognition, and iris scanning solutions." },
      { icon: CreditCard, title: "RFID Access", description: "Contactless card-based access control for buildings and rooms." },
      { icon: Lock, title: "Smart Locks", description: "IoT-enabled smart locking systems with remote management." },
      { icon: Clock, title: "Attendance Solutions", description: "Automated time and attendance tracking integrated with HR systems." },
      { icon: Smartphone, title: "Mobile Access", description: "Smartphone-based access credentials and visitor management." },
      { icon: Users, title: "Visitor Management", description: "Digital visitor registration and tracking systems." },
    ]}
  />
);

export default AccessControl;
