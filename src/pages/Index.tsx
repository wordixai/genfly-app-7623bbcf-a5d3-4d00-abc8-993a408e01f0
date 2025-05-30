import { DashboardLayout } from "@/layouts/dashboard-layout";
import { StatsCards } from "@/components/dashboard/stats-card";
import { OverviewCard } from "@/components/dashboard/overview-card";
import { AnalyticsCard } from "@/components/dashboard/analytics-card";
import { ActivityCard } from "@/components/dashboard/activity-card";
import { TasksCard } from "@/components/dashboard/tasks-card";
import { TeamCard } from "@/components/dashboard/team-card";

const Index = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here's an overview of your account.
          </p>
        </div>
        
        <StatsCards />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <OverviewCard />
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <AnalyticsCard />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-2 md:col-span-2 lg:col-span-4">
            <TasksCard />
          </div>
          <div className="col-span-2 md:col-span-2 lg:col-span-3">
            <TeamCard />
          </div>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
          <div className="col-span-2 md:col-span-2 lg:col-span-7">
            <ActivityCard />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;