import { ReactNode, memo } from "react";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-1 pt-20 lg:pt-[88px]">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default memo(Layout);
