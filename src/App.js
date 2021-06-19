import {useState} from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App=()=> {
  const name='Shresth'

  const [showTask, setshowTask]= useState(false)
  const [tasks, setTasks]= useState([
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb 5th',
      reminder: true,
  },
  {
      id:2,
      text: 'Meeting',
      day: 'Feb 7th',
      reminder: true,
  },
  {
      id:3,
      text: 'Shopping',
      day: 'Feb 10th',
      reminder: false,
  },
  ])
  
  //add task
  const addTask=(task)=>{
    const id=Math.floor(Math.random() * 10000)+1 
    const newTask={id, ...task} 
    setTasks([...tasks, newTask])
  }


  //delete task
  const deleteTask=(id)=>{
    setTasks(tasks.filter((task)=> task.id!==id))
  }

  //toggle reminder
  const toggleReminder=(id)=>{
    setTasks(tasks.map((task)=>task.id===id ? {...task, reminder: !task.reminder} : task))
  }
  return (
    <div className="container">
      <h1 style={info}>Welcome {name}!</h1>
      <Header title='Task Tracker' onAdd={()=>setshowTask(!showTask)}/>
      {showTask && <AddTask onAdd={addTask}/>}
      {tasks.length >0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks'}
    </div>
  );
}

export default App;

const info={
  fontSize: 10,
  color: 'blue',
}