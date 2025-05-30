import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Task = {
  id: string;
  title: string;
  completed: boolean;
  priority: "high" | "medium" | "low";
  dueDate?: string;
};

const tasks: Task[] = [
  {
    id: "1",
    title: "Review marketing strategy",
    completed: false,
    priority: "high",
    dueDate: "Today",
  },
  {
    id: "2",
    title: "Prepare quarterly report",
    completed: false,
    priority: "high",
    dueDate: "Tomorrow",
  },
  {
    id: "3",
    title: "Update customer database",
    completed: true,
    priority: "medium",
  },
  {
    id: "4",
    title: "Schedule team meeting",
    completed: false,
    priority: "low",
    dueDate: "Next week",
  },
];

export function TasksCard() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Tasks</CardTitle>
        <Button size="sm" className="h-8 gap-1">
          <Plus className="h-3.5 w-3.5" />
          <span>Add Task</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-start gap-2 rounded-md border p-3"
            >
              <Checkbox id={`task-${task.id}`} checked={task.completed} />
              <div className="grid gap-1">
                <label
                  htmlFor={`task-${task.id}`}
                  className={`font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
                    task.completed ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {task.title}
                </label>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      task.priority === "high"
                        ? "destructive"
                        : task.priority === "medium"
                        ? "default"
                        : "outline"
                    }
                    className="h-5 px-1.5 text-xs"
                  >
                    {task.priority}
                  </Badge>
                  {task.dueDate && (
                    <span className="text-xs text-muted-foreground">
                      Due: {task.dueDate}
                    </span>
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