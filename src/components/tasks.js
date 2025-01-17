import Task from "./task";

const Tasks = ({ tasks, deleteTask, toggleReminder }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
