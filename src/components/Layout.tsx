import { ReactNode, memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TopHeader from "./TopHeader";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-1 pt-10 lg:pt-12">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default memo(Layout);
