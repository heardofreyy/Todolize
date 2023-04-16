import React, { useRef, useState } from 'react'
import './AddTask.css'


const AddTask = (props) => {
    const setIsShown = props.setIsShown;
    const setTask = props.setTask;
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef();

    const handleCancel = () => {
        setIsShown(false);
        inputRef.current.value = null
    }

    const handleAdd = () => {
        setTask(inputValue);
        setIsShown(false);
        inputRef.current.value = null
    }

    return (
        <div className={props.isShown ? "wrapperAddTask ShownAddTask" : "wrapperAddTask"}>
            <div className='AddTask'>
                <h1> Add New Task </h1>
                <div className="input">
                    <h3>Task :</h3>
                    <input ref={inputRef} placeholder={'type a task'} onChange={(e) => setInputValue(e.target.value)} type="text" />
                </div>
                <div className="btns">
                    <button role={'submit'} onClick={handleAdd}>Add</button>
                    <button onClick={handleCancel} id='cancel'>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default AddTask