import { FaTimes } from 'react-icons/fa';

const Task = ({ task, deleteTask, toggleReminder }) => {
    return ( 
        <div 
            className={`task ${task.reminder ? 'reminder' : '' }`}
            onDoubleClick={ () => toggleReminder(task.id)}
        >
            <h3>
                {task.text} {' '}
                <FaTimes 
                    style={{ color: "#e30e5c" }} 
                    onClick={ () => deleteTask(task.id)}
                />
            </h3>
            <p>{task.day}</p>
        </div>
    );
}
 
export default Task;