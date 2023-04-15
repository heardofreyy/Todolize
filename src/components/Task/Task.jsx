import React, { useEffect, useRef, useState } from 'react'
import './Task.css'
import {v4 as uuid} from 'uuid'
//components :
import EditTask from '../EditTask/EditTask';
//Redux :
import { useDispatch } from 'react-redux';
import { deleteTask, editStatus } from '../../app/Slices/TodoSlice';
//FontAwsome :
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

function Task(props) {
  const [isShown, setIsShown] = useState(false);
  const isEditting = props.isEditting
  const dispatch = useDispatch();
  const checkboxRef = useRef();


  const [status, setStatus] = useState(props.status);


  const handleDelete = () => {
    dispatch(deleteTask({
      id: props.id
    }))
  }

  const handleEdit = () => {
    setIsShown(true);

  }


  const handleCheck = () => {
    if (checkboxRef.current.checked) {
      setStatus('completed');
      console.log('checked');
      

    } else {
      setStatus('incompleted');
      console.log('inchecked');
    }

  }

  useEffect(() => {
    dispatch(editStatus({
      id: props.id,
      status
    }))
  }, [status]);

  return (
    <div className='task'>
      <div className="left">
        <input ref={checkboxRef} onChange={handleCheck} type="checkbox" checked={props.status === 'completed' ? true : false} />
        <h2>{props.text}</h2>
      </div>
      <div className={isEditting ? "right Edditing" : "right" }>
        <button onClick={handleDelete}><FontAwesomeIcon color='#d21414' icon={faTrash} /></button>
        <button onClick={handleEdit}><FontAwesomeIcon  icon={faEdit} /></button>        
      </div>
      <EditTask id={props.id} value={props.text} setIsShown={setIsShown} isShown={isShown} />
    </div>
  )
}

export default Task