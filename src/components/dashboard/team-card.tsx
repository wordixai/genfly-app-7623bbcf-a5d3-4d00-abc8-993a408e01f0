import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
  initials: string;
  status: "online" | "offline" | "away";
};

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Product Manager",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "JD",
    status: "online",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "SJ",
    status: "online",
  },
  {
    id: "3",
    name: "Michael Chen",
    role: "Frontend Developer",
    initials: "MC",
    status: "away",
  },
  {
    id: "4",
    name: "Emily Wilson",
    role: "Backend Developer",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    initials: "EW",
    status: "offline",
  },
];

export function TeamCard() {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Team Members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <span
                    className={`absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-background ${
                      member.status === "online"
                        ? "bg-emerald-500"
                        : member.status === "away"
                        ? "bg-amber-500"
                        : "bg-gray-300"
                    }`}
                  />
                </div>
                <div>
                  <p className="text-sm font-medium leading-none">{member.name}</p>
                  <p className="text-xs text-muted-foreground">{member.role}</p>
                </div>
              </div>
              <Badge
                variant={
                  member.status === "online"
                    ? "default"
                    : member.status === "away"
                    ? "outline"
                    : "secondary"
                }
                className="capitalize"
              >
                {member.status}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}