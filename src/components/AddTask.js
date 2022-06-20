import React from 'react';
import { useState } from 'react'

const Add = ({ onAdd, currentData, onSetUpdate }) => {
    const [id, setId] = useState(currentData ? currentData.id : "")
    const [text, setText] = useState(currentData ? currentData.text : "")
    const [day, setDay] = useState(currentData ? currentData.day : "")
    const [reminder, setReminder] = useState(currentData ? currentData.reminder : false)

    const onSubmit = (e) => {
        e.preventDefault();

        if(!text){
            alert('Please add a task')
            return
        }

        if(currentData.length === 0){
            console.log("i am Add");
            onAdd({id, text, day, reminder })
        }else{
            console.log(currentData.length)
            console.log("i am Update");
            let id = currentData.id;
            onSetUpdate({id, text, day, reminder})
        }

        setText("");
        setDay("");
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" placeholder='Add Task'  value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input className="btn btn-block" type="submit" value='Save Task' />
        </form>
    )
}

export default Add