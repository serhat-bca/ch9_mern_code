import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask } from "../services/api";

const TaskForm = () => {
  const queryClient = useQueryClient();

  const addMutation = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
    onError: () => console.log("Error while adding a task"),
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task Submitted");
    addMutation.mutate({
      description: event.target.description.value,
      urgent: false,
    });
    event.target.description.value = "";
  };

  return (
    <div>
      <h3>Create a new task </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="description"
          placeholder="Enter task Description"
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
