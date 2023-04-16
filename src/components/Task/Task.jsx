import React, { useEffect, useRef, useState } from 'react'
import './Task.css'
import { v4 as uuid } from 'uuid'
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
        <div className="checkbox-wrapper-12">
          <div className="cbx">
            <input id="cbx-12" type="checkbox" ref={checkboxRef} onChange={handleCheck} checked={props.status === 'completed' ? true : false}/>
              <label htmlFor="cbx-12"></label>
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none">
                <path d="M2 8.36364L6.23077 12L13 2"></path>
              </svg>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
              <filter id="goo-12">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"></feGaussianBlur>
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" result="goo-12"></feColorMatrix>
                <feBlend in="SourceGraphic" in2="goo-12"></feBlend>
              </filter>
            </defs>
          </svg>
        </div>
        <h2>{props.text}</h2>
      </div>
      <div className={isEditting ? "right Edditing" : "right"}>
        <button onClick={handleDelete}><FontAwesomeIcon color='#d21414' icon={faTrash} /></button>
        <button onClick={handleEdit}><FontAwesomeIcon icon={faEdit} /></button>
      </div>
      <EditTask id={props.id} value={props.text} setIsShown={setIsShown} isShown={isShown} />
    </div>
  )
}

export default Task