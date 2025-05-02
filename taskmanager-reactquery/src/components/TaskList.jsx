import Task from "./Task";
import { useTasksQuery } from "../hooks/useTasksQuery";

const TaskList = () => {
  
  const {data: tasks, isLoading, isError} = useTasksQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error Fetching Tasks!!!</p>;

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
