import Task from "./Task";
import { useTasksQuery } from "../hooks/useTasksQuery";
import FilterContext from "../context/FilterContext";
import { useContext } from "react";

const TaskList = () => {
  const { data: tasks, isLoading, isError } = useTasksQuery();

  const { filter } = useContext(FilterContext);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error Fetching Tasks!!!</p>;

  const filteredTask =
    filter === "urgent"
      ? tasks.filter((t) => t.urgent)
      : filter === "non-urgent"
      ? tasks.filter((t) => !t.urgent)
      : tasks;

  return (
    <div>
      {filteredTask.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
