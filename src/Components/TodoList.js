import React from 'react'

const TodoList = props => {

    const todoList = props.todos.map((item, index) => 
        <li className={!item.isDone ? 'todo__list-item' : 'todo__list-item todo__list-item--done'}
            key={index}>{item.todo}
            <input
                className='todo__chkbox'
                id={index}
                type='checkbox'
                checked={item.isDone}
                onChange={props.handleChange}>
            </input>
        </li>
    )

    return (
        <ul className='todo__list'>
            {todoList}
        </ul>
    )
}

export default TodoList