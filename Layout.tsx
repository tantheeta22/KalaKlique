import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingWhatsApp } from "./FloatingWhatsApp";
import { WelcomePopup } from "./WelcomePopup";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">{children}</main>
      <Footer />
      <FloatingWhatsApp />
      <WelcomePopup />
    </div>
  );
}
