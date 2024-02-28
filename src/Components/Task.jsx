import React from 'react'
import { useState } from 'react'
const Task = () => {
    const [task ,setTask]=useState([]);
    const [newTask,setNewTask]=useState();
       function handleInput(e){
        setNewTask(e.target.value)

    }
    function addTask(){
      if(newTask.trim()!==""){
      setTask(t=>[...t,newTask]);
      setNewTask(" ");
      }
    }
    function removeTask(index){
      const updatedTask=task.filter((_,elem)=>elem !==index)
      setTask(updatedTask);

    }
    function moveUp(index){
      if(index > 0){
        const updatedTask=[...task];
        [updatedTask[index],updatedTask[index-1]]=
        [updatedTask[index-1],updatedTask[index]];
        setTask(updatedTask);

      }

    }
      function moveDown(index){
      if(index > index-1){
        const updatedTask=[...task];
       
        [updatedTask[index-1],updatedTask[index]]= [updatedTask[index],updatedTask[index-1]];
        setTask(updatedTask);

      }

    }
  return (
   <>
   <div className='center m-7 p-6 border-gray-500 border  bg-purple-100'>
       <input type='text' placeholder='Enter Your Task'  className='p-1 m-2 shadow-md center rounded w-60 sm:w-96 ' value={newTask} onChange={handleInput}/>
   <button className='bg-green-500 p-2 hover:bg-green-600 rounded  text-white w-24 shadow-md  addButton' onClick={addTask}>Add</button>
     <ul className='list-decimal'>
    {task.map((task,i)=>
    <li className='  border-l-green-600 border flex p-1  'key={i}>
      <span className='flex-1'> {task} </span>
       <button className='upBtn bg-blue-400 text-white border rounded p-2 m-1 hover:bg-blue-900 shadow-md' onClick={()=>moveUp(i)}>Up</button>
       <button className='downBtn bg-blue-400 text-white border rounded p-2 m-1 hover:bg-blue-900 shadow-md' onClick={()=>moveDown(i)}>Down</button>
        <button className='delBtn bg-red-600 text-white border rounded p-2 m-1 float-right shadow-md hover:bg-red-800 ' onClick={()=>removeTask(i)}>Delete</button>
    </li>
    )}
   </ul>

 </div> 
   </>
  )
}

export default Task
