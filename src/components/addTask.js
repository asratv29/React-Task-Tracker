import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [text, setText] = useState("");
  const [reminder, setReminder] = useState(false);
  const [day, setDay] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      const promptTask = prompt("set task");
      setText(promptTask);
    }
    if (!day) {
      const promptDay = prompt("set task date");
      console.log("prompt day ", promptDay);
      setDay(promptDay);
    }
    if (!reminder) {
      setReminder(true);
    }

    addTask({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form action="" className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label htmlFor="">Task</label>
        <input
          type="text"
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Day & Time</label>
        <input
          type="date"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="">Set Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <input type="submit" value="save task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
