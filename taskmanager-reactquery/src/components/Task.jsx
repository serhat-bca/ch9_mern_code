import {useMutation, useQueryClient} from "@tanstack/react-query";
import { deleteTask, updateTask } from "../services/api";

const Task = ({ task }) => {
  const queryClient = useQueryClient();
  
    const toggleMutation = useMutation({
      mutationFn: updateTask,
      onSuccess: () => {
        queryClient.invalidateQueries(["tasks"]);
      },
      onError: () => console.log("Error while toggling"),
    });

    const deleteMutation = useMutation({
      mutationFn: deleteTask,
      onSuccess: () => {
        queryClient.invalidateQueries(["tasks"]);
      }
    })


  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "(Urgent)" : ""}</em>
      </span>
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => toggleMutation.mutate({...task, urgent: !task.urgent})}
      >
        {task.urgent ? "Make non-urgent" : "make urgent"}
      </span>
      <button onClick={() => deleteMutation.mutate(task)}>Delete Task</button>
    </div>
  );
};

export default Task;
