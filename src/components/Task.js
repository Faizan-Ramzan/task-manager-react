import React from 'react';
import { FaTimes } from 'react-icons/fa'

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
                <button className='small-btn delete' style={{ backgroundColor: "red"}} onClick={() => onDelete(task.id)}>Delete</button>
                <br />
                <button className='small-btn update' style={{ backgroundColor: "blue"}} onClick={() => onUpdate(task)} >Update</button>
            </div>
        </div>
    )
}

export default task