import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Solutions from "./pages/Solutions";
import CyberSecurity from "./pages/solutions/CyberSecurity";
import EnterpriseWork from "./pages/solutions/EnterpriseWork";
import NetworkInfrastructure from "./pages/solutions/NetworkInfrastructure";
import UnifiedCommunications from "./pages/solutions/UnifiedCommunications";
import AccessControl from "./pages/solutions/AccessControl";
import PowerEnergy from "./pages/solutions/PowerEnergy";
import IPPabx from "./pages/solutions/IPPabx";
import VideoConferencing from "./pages/solutions/VideoConferencing";
import VideoSurveillance from "./pages/solutions/VideoSurveillance";
import Services from "./pages/Services";
import ManagedServices from "./pages/services/ManagedServices";
import NetworkAudit from "./pages/services/NetworkAudit";
import StructuredCabling from "./pages/services/StructuredCabling";
import SLA from "./pages/services/SLA";
import ITOutsourcing from "./pages/services/ITOutsourcing";
import SmartCare from "./pages/SmartCare";
import OfficeSupplies from "./pages/OfficeSupplies";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LegalNotice from "./pages/LegalNotice";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/cyber-security" element={<CyberSecurity />} />
          <Route path="/solutions/enterprise-work" element={<EnterpriseWork />} />
          <Route path="/solutions/network-infrastructure" element={<NetworkInfrastructure />} />
          <Route path="/solutions/unified-communications" element={<UnifiedCommunications />} />
          <Route path="/solutions/access-control" element={<AccessControl />} />
          <Route path="/solutions/power-energy" element={<PowerEnergy />} />
          <Route path="/solutions/ip-pabx" element={<IPPabx />} />
          <Route path="/solutions/video-conferencing" element={<VideoConferencing />} />
          <Route path="/solutions/video-surveillance" element={<VideoSurveillance />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/managed-services" element={<ManagedServices />} />
          <Route path="/services/network-audit" element={<NetworkAudit />} />
          <Route path="/services/structured-cabling" element={<StructuredCabling />} />
          <Route path="/services/sla" element={<SLA />} />
          <Route path="/services/it-outsourcing" element={<ITOutsourcing />} />
          <Route path="/smart-care" element={<SmartCare />} />
          <Route path="/office-supplies" element={<OfficeSupplies />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/legal-notice" element={<LegalNotice />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
