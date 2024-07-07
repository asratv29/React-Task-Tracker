/** css */
import "./App.css";
/** css */

/** hooks */
import { useState, useEffect } from "react";
/** hooks */

/** componentes */
import Header from "./components/header";
import Tasks from "./components/tasks";
import NoTask from "./components/noTasks";
import AddTask from "./components/addTask";
/** components */

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask();
      setTasks(taskFromServer);
    };
    getTask();
  }, []);
  // Fetch Task
  const fetchTask = async () => {
    const res = await fetch("http://localhost:8000/tasks");
    const data = await res.json();

    return data;
  };

  // Add Task
  const addTask = async (task) => {
    const res = await fetch(
      "http://localhost/tasks",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
      },
      []
    );

    const data = await res.json();
    setTasks([...tasks, data]);
    // const id = Math.floor(Math.ceil((Math.random() * 1000000) / 7) + 1);
    // const newTask = { id, ...task };
    // setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = async (id) => {
    await fetch("http://localhost:8000/tasks/" + id, {
      method: "DELETE",
    }).then((res) => console.log(res.json()));
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    const toggleReminder = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    // const t = {...task, reminder: !task.reminder};

    setTasks(toggleReminder);
    //return console.log(toggleReminder, id);
  };

  return (
    <div className="App">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={!showAddTask}
      />
      {showAddTask && <AddTask addTask={addTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        <NoTask />
      )}
    </div>
  );
}

export default App;
