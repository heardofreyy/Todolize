import React, { useEffect, useRef, useState } from 'react'
import './Todo.css';
import {v4 as uuid } from 'uuid';

//fontAwesome:
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

//components :
import Task from '../../components/Task/Task'
import AddTask from '../../components/AddTask/AddTask';

//redux :
import { useDispatch, useSelector } from 'react-redux';
import { addTask, editStatus } from '../../app/Slices/TodoSlice';




function Todo() {
  const [isShown, setIsShown] = useState(false);
  const [isEditting, setIsEditting] = useState(false);

  // console.log(isEditting)

  const dispatch = useDispatch();
  const Todos = useSelector((state) => state.Todos);

  const [task, setTask] = useState("");
  let isHere = false;

  const handleEdit = () => {
    setIsEditting(!isEditting);
  }


  useEffect(() => {
    if (task) {

      Todos && Todos.map((Todo) => {
        if(Todo.task === task) {
          isHere = true
        }
      })
      
      if(!isHere) {
        dispatch(addTask({
          id : uuid(),
          task,
          "status" :"incompleted"
        }))
      }else {
        alert(`${task} already there !`)
      }
    

    }
  }, [task])


  return (
    <>
      <div className="todo-head">
        <div className="btns">
          <button onClick={() => setIsShown(true)}> <FontAwesomeIcon icon={faPlus} /> Add</button>
          <button className={isEditting ? "EdittingBtn" : null} onClick={handleEdit}> <FontAwesomeIcon icon={faPen} /> Edit</button>
          <button className={isEditting ? null : "EdittingBtn" } onClick={handleEdit} id={'done'}> <FontAwesomeIcon icon={faCheck}/> Done</button>
        </div>
      </div>
      <div className="Todo">

        <div className="todos">
          {Todos && Todos.map(Todo =>
            <Task status={Todo.status} isEditting={isEditting} text={Todo.task} id={Todo.id} key={Todo.id}/>
          )}
        </div>
      </div>
      <AddTask setTask={setTask} setIsShown={setIsShown} isShown={isShown} />
    </>

  )
}

export default Todo

