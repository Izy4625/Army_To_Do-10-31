import  { useState } from 'react'
import ToDo from '../types/ToDo'

import style from "./FormToDo.module.css"
interface FormProps{
     
    onEnterInput: (currentTask: ToDo) => void;
}

const FormToDo = ({onEnterInput}: FormProps) => {
    const [name, setName] = useState("");
    const [status, setStatus] =useState('');
    const [priority, setProirity] = useState('');
    const [task, setTask] = useState('');
    function handleForm(){
        const currentTask: ToDo ={
            name: name,
            priority: priority,
            status: status,
            description:task
        }
        setName('');
        setProirity('');
        setStatus('');
        setTask('');
        onEnterInput(currentTask)


    }
  return (
 
    <form action="" className={style.container}>
        <input type="text" placeholder='Name' onChange={(e) => setName(e.target.value)}/>
        <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
        </select>
        <select name="" id="" onChange={(e) => setStatus(e.target.value)}>
            <option value="Low">Low</option>
            <option value="High">High</option>
        </select>
        <input type="text" placeholder='Tech' onChange={(e) => setTask(e.target.value)}/>
        <button onClick={handleForm}>Add</button>
    </form>
  )
}

export default FormToDo