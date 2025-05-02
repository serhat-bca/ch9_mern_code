import Task from "./Task";

const TaskList = () => {
  const tasks = [
    { id: "1", description: "Finish the report", urgent: true },
    { id: "2", description: "Buy Groceries", urgent: false },
    { id: "3", description: "Call John", urgent: false },
    { id: "4", description: "Pay Internet Bill", urgent: true },
  ];

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
