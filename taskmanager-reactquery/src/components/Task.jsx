import {useMutation, useQueryClient} from "@tanstack/react-query";
import { updateTask } from "../services/api";

const Task = ({ task }) => {
  const queryClient = useQueryClient();
  
    const toggleMutation = useMutation({
      mutationFn: updateTask,
      onSuccess: () => {
        queryClient.invalidateQueries(["tasks"]);
      },
      onError: () => console.log("Error while toggling"),
    });


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
    </div>
  );
};

export default Task;
