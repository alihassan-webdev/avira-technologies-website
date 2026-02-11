import SolutionDetail from "@/pages/SolutionDetail";
import { Camera, Wifi, Brain, Monitor, HardDrive, Eye } from "lucide-react";

const VideoSurveillance = () => (
  <SolutionDetail
    title="Video Surveillance"
    description="Intelligent video monitoring and security camera solutions."
    overview="Protect your premises with our advanced video surveillance systems. Featuring AI-powered analytics, high-resolution IP cameras, and remote monitoring capabilities, our solutions provide comprehensive visual security for any environment."
    features={[
      { icon: Camera, title: "CCTV Systems", description: "Professional-grade closed-circuit television installations." },
      { icon: Wifi, title: "IP Cameras", description: "Network-connected cameras with HD/4K resolution and PoE support." },
      { icon: Brain, title: "AI-based Monitoring", description: "Intelligent analytics for facial recognition, object detection, and anomaly alerts." },
      { icon: Monitor, title: "Remote Surveillance", description: "Monitor your premises from anywhere via web and mobile apps." },
      { icon: HardDrive, title: "NVR/DVR Systems", description: "Network and digital video recorders with ample storage." },
      { icon: Eye, title: "Video Analytics", description: "People counting, heat mapping, and behavior analysis tools." },
    ]}
  />
);

export default VideoSurveillance;
