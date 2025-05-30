import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type Activity = {
  id: string;
  user: {
    name: string;
    avatar?: string;
    initials: string;
  };
  action: string;
  target: string;
  time: string;
  status?: "success" | "pending" | "error";
};

const activities: Activity[] = [
  {
    id: "1",
    user: {
      name: "John Doe",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      initials: "JD",
    },
    action: "created",
    target: "Project Alpha",
    time: "2 hours ago",
    status: "success",
  },
  {
    id: "2",
    user: {
      name: "Sarah Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      initials: "SJ",
    },
    action: "updated",
    target: "Marketing Campaign",
    time: "5 hours ago",
    status: "success",
  },
  {
    id: "3",
    user: {
      name: "Michael Chen",
      initials: "MC",
    },
    action: "commented on",
    target: "Design Review",
    time: "1 day ago",
  },
  {
    id: "4",
    user: {
      name: "Emily Wilson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      initials: "EW",
    },
    action: "completed",
    target: "User Research",
    time: "2 days ago",
    status: "success",
  },
];

export function ActivityCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="flex flex-col gap-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-4">
              <Avatar className="h-9 w-9">
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback>{activity.user.initials}</AvatarFallback>
              </Avatar>
              <div className="grid gap-1">
                <p className="text-sm font-medium leading-none">
                  <span className="font-semibold">{activity.user.name}</span>{" "}
                  <span className="text-muted-foreground">{activity.action}</span>{" "}
                  <span className="font-medium">{activity.target}</span>
                </p>
                <div className="flex items-center gap-2">
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                  {activity.status && (
                    <Badge
                      variant={
                        activity.status === "success"
                          ? "default"
                          : activity.status === "pending"
                          ? "outline"
                          : "destructive"
                      }
                      className="h-5 px-1.5 text-xs"
                    >
                      {activity.status}
                    </Badge>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}