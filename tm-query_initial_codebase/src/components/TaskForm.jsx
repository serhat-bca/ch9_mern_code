const TaskForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Task Submitted");
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
