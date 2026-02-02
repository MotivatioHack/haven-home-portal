import { DashboardLayout } from "@/components/layout/user/DashboardLayout";
import { WelcomeBanner } from "@/components/dashboard/user/WelcomeBanner";
import { SummaryCards } from "@/components/dashboard/user/SummaryCards";
import { QuickActions } from "@/components/dashboard/user/QuickActions";
import { RecentComplaints } from "@/components/dashboard/user/RecentComplaints";
import { UpcomingNotices } from "@/components/dashboard/user/UpcomingNotices";

const Index = () => {
  return (
    <DashboardLayout>
      <WelcomeBanner />
      <SummaryCards />
      <QuickActions />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentComplaints />
        <UpcomingNotices />
      </div>
    </DashboardLayout>
  );
};

export default Index;
