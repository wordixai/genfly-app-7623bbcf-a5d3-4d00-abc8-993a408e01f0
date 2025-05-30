import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { name: "Jan", total: 1200 },
  { name: "Feb", total: 900 },
  { name: "Mar", total: 1500 },
  { name: "Apr", total: 1000 },
  { name: "May", total: 1800 },
  { name: "Jun", total: 1400 },
];

const config = {
  bar: {
    theme: {
      light: "#0ea5e9",
      dark: "#0ea5e9",
    },
    label: "Revenue",
  },
};

export function OverviewCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="space-y-1">
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>Monthly revenue for the current year</CardDescription>
        </div>
        <div className="flex items-center gap-1 rounded-md bg-secondary/20 px-2 py-1 text-xs font-medium text-secondary-foreground">
          <ArrowUpRight className="h-3.5 w-3.5" />
          <span>+12.5%</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[240px]">
          <ChartContainer config={config}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{
                  top: 10,
                  right: 10,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} vertical={false} />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  fontSize={12}
                  tickFormatter={(value) => `$${value}`}
                />
                <ChartTooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <ChartTooltipContent
                          label={payload[0].payload.name}
                          payload={payload}
                          formatter={(value) => `$${value}`}
                        />
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="total"
                  fill="var(--color-bar)"
                  radius={[4, 4, 0, 0]}
                  barSize={40}
                />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
}