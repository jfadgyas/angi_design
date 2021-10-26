import React, {useState} from 'react'
import TodoAdd from './TodoAdd'
import TodoList from './TodoList'
import '../style/todo.css'

const Todo = () => {

    // Fake database
    const [todos, setTodos] = useState([
        {
            todo: 'Reading about the Angi Studio',
            isDone: false,
        },
        {
            todo: 'Writing a recommendation letter',
            isDone: true,
        },
        {
            todo: 'Gathering a project or coding the challenge',
            isDone: false,
        },
        {
            todo: 'Applying for the job',
            isDone: false,
        },
        {
            todo: 'Reading about the Angi Studio',
            isDone: false,
        },
        {
            todo: 'Reading about the Angi Studio',
            isDone: false,
        },
    ])

    // New todo
    const [newTodo, setNewTodo] = useState({
        todo: '',
        isDone: false
    })

    // Typing to the input field, or mark it done
    const handleChange = e => {
        const {id, type, value} = e.target
        if (type !== 'checkbox') return setNewTodo({...newTodo, todo: value})
        let newTodos = [...todos]
        newTodos[id].isDone = !newTodos[id].isDone
        setTodos(newTodos)
    }

    // Add todo to the database, reset the input field
    const addTodo = () => {
        setTodos([...todos].concat(newTodo))
        setNewTodo({
            todo: '',
            isDone: false
        })
    }

    return (
        <main className='todo'>
            <h1 className='todo__title'>New to-do</h1>
            <TodoAdd newTodo={newTodo} handleChange={handleChange} addTodo={addTodo}/>
            <h1 className='todo__title'>Current to-do's</h1>
            <TodoList todos={todos} handleChange={handleChange}/>
        </main>
    )
}

export default Todo