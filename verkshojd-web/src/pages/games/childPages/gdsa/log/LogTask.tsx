import type { Task } from "./task";

interface LogTaskProps {
  task: Task;
}

const getStatusChar = (status?: string) => {
  switch (status) {
    case "":
      return " ";
    case "on":
      return "⏳";
    case "done":
      return "✅";
    default:
      return " ";
  }
};

export const LogTask: React.FC<LogTaskProps> = ({ task }) => {
  return (
    <li>
      {`[${getStatusChar(task.status)}] ${task.title}`}
      {task.subTasks.length > 0 && (
        <ul>
          {task.subTasks.map((subTask) => (
            <LogTask key={subTask.title} task={subTask} />
          ))}
        </ul>
      )}
    </li>
  );
};
