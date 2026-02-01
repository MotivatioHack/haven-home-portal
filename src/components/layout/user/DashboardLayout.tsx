import { Outlet } from "react-router-dom"; // Import Outlet
import { Sidebar } from "./Sidebar";
import { TopNavbar } from "./TopNavbar";

// We no longer need the children prop for routing to work
export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      {/* Note: Ensure ml-64 matches your Sidebar width. 
         Using flex-1 ensures the main content fills the remaining space.
      */}
      <main className="flex-1 ml-64 p-6 transition-all duration-300">
        <TopNavbar />
        <div className="animate-fade-in mt-6">
          {/* This is the magic placeholder for nested routes */}
          <Outlet /> 
        </div>
      </main>
    </div>
  );
}