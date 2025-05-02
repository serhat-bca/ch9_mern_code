import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import FilterTask from "./components/FilterTask";

const App = () => {
  return (
    <div>
      <h2>Tasks with Query and Context</h2>
      <FilterTask />
      <TaskList />
      <TaskForm />
    </div>
  );
};

export default App;
