import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ClientTicker } from "../ClientTicker";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      {/* Show Client Ticker on all pages except Contact */}
      {location.pathname !== "/contact" && <ClientTicker />}
      <Footer />
    </div>
  );
}