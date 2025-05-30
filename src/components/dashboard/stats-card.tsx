import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, ArrowDownRight, Users, CreditCard, BarChart3, ShoppingCart } from "lucide-react";

type StatCardProps = {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
};

function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center gap-1 mt-1 text-xs">
          {change > 0 ? (
            <>
              <ArrowUpRight className="h-3.5 w-3.5 text-emerald-500" />
              <span className="text-emerald-500">+{change}%</span>
            </>
          ) : (
            <>
              <ArrowDownRight className="h-3.5 w-3.5 text-rose-500" />
              <span className="text-rose-500">{change}%</span>
            </>
          )}
          <span className="text-muted-foreground">from last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function StatsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Revenue"
        value="$45,231.89"
        change={20.1}
        icon={<CreditCard className="h-4 w-4" />}
      />
      <StatCard
        title="Subscriptions"
        value="2,350"
        change={10.5}
        icon={<Users className="h-4 w-4" />}
      />
      <StatCard
        title="Sales"
        value="12,234"
        change={-3.2}
        icon={<ShoppingCart className="h-4 w-4" />}
      />
      <StatCard
        title="Active Users"
        value="573"
        change={8.4}
        icon={<BarChart3 className="h-4 w-4" />}
      />
    </div>
  );
}