import React from 'react'

const ToDoAdd = props => {

    return (
        <div className='todo__new-wrapper'>
            <input
                className='todo__new-item'
                type='text'
                placeholder='Your task...'
                value={props.newTodo.todo}
                onChange={props.handleChange}>
            </input>
            <button
                className='todo__btn'
                disabled={!props.newTodo.todo ? true : false}
                onClick={props.addTodo}>Add to-do
            </button>
        </div>
    )
}

export default ToDoAdd