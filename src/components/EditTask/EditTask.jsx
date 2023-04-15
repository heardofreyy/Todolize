import React, { useRef, useState, useEffect } from 'react'
import './EditTask.css'
import { editTask , deleteTask} from '../../app/Slices/TodoSlice';
import { useDispatch } from 'react-redux';

const EditTask = (props) => {
    const setIsShown = props.setIsShown;
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(props.value);
    const [newTask, setNewTask] = useState();
    const inputRef = useRef();

    const handleCancel = () => {
        setIsShown(false);
        inputRef.current.value = null
    }

    const handleDelete = () => {
        dispatch(deleteTask({
            id: props.id
        }))
        setIsShown(false);
        inputRef.current.value = null
    }

    const handleUpdate = () => {
        setNewTask(inputValue);
        setIsShown(false);
        inputRef.current.value = null
    }


    useEffect(() => {
        if (newTask) {
            console.log('newtask ' + newTask);
            dispatch(editTask({
                id: props.id,
                newTask
            }))
        }
    }, [newTask])

    return (
        <div className={props.isShown ? "wrapperEditTask ShownEditTask" : "wrapperAddTask"}>
            <div className='EditTask'>
                <h1>Update Task</h1>
                <div className="input">
                    <h3>Task :</h3>
                    <input ref={inputRef} value={inputValue} placeholder={'type a task'} onChange={(e) => setInputValue(e.target.value)} type="text" />
                </div>
                <div className="btns">
                    <button onClick={handleUpdate}>update</button>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleCancel} id='cancel'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default EditTask