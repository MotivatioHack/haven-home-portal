import { ReactNode } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 ml-64 p-6 transition-all duration-300">
        <TopNavbar />
        <div className="animate-fade-in mt-6">
          {children}
        </div>
      </main>
    </div>
  );
}
