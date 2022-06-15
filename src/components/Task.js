import React from 'react';
import { FaTimes, FiEdit2 } from 'react-icons/fa'

const task = ({ task, onDelete, onToggle, onUpdate }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder': '' }`} onDoubleClick={() => onToggle(task.id)}>
            <div className='taskDetail'>
                <h3>
                    {task.text} 
                </h3>
                <p>{task.day}</p>
            </div>
            <div className='buttons'>
                <FaTimes style={{ color: "red", cursor: "Pointer" }} onClick={() => onDelete(task.id)} />
                <br />
                <button onClick={() => onUpdate(task.id)} >update</button>
            </div>
        </div>
    )
}

export default task