import { GameUiTasks } from "./tasks/gameUiTasks";

export interface Task {
  title: string;
  status?: "" | "on" | "done";
  dependencyIds: string[];
  subTasks: Task[];
}

export const DemoTasks: Task[] = [GameUiTasks];
