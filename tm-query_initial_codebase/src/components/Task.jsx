const Task = ({ task }) => {
  return (
    <div>
      <span>{task.description}. </span>
      <span>
        <em>{task.urgent ? "(Urgent)" : ""}</em>
      </span>
      <span
        style={{ textDecoration: "underline", cursor: "pointer" }}
        onClick={() => console.log(task.id)}
      >
        {task.urgent ? "Make non-urgent" : "make urgent"}
      </span>
    </div>
  );
};

export default Task;
