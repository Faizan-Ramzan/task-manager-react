import React from 'react';
import { useState, useEffect } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [currentData, setCurrentData] = useState([])

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //fetch tasks
  const fetchTasks = async() => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  //fetch tasks
  const fetchTask = async(id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //Add Task
  const addTask = async (task) => {
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
    // const id = Math.floor(Math.random() * 10000) + 1
    
    // const newTask = {id, ...task}
    // setTasks([...tasks, newTask])
  }

  //Set update Task
  const updateTask = (task) => {
    setShowAddTask(false)
    setTimeout(() => {  
      setCurrentData(task)
      setShowAddTask(true)
    }, 200);
    // return task.id , task.text, task.day, task.reminder
  }

  //Update Task
  const onSetUpdates = (task) => {
    console.log("update Set Data ", task)
    setTasks(tasks.map((data) => data.id === task.id ? {...data, text: task.text, day: task.day, reminder: task.reminder } : data))
    setShowAddTask(false)
  }

  //Delete Task
  const deleteTask = async (id) =>{
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updateTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header title="Task Tracker" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} onUpdate={updateTask} currentData={currentData} tasks={tasks} onSetUpdate={onSetUpdates}/>}

      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} onUpdate={updateTask}/> : "No Tasks Available"}
    </div>
  );
}

export default App;
