import React, { useRef, useState } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

function TodoList() {
    const [text, setText] = useState("")
    const [todos, setTodos] = useLocalStorage("jonatandb-hooks-tests--todos", [], values => {
        return values.map(todo => console.log('Todo encontrado:', JSON.stringify(todo)))
    })
    const inputRef = useRef()

    const handleSubmit = e => {
        e.preventDefault()
        setTodos(prevTodos => prevTodos.concat({ id: Date.now(), text }))
        inputRef.current.value = ""
        inputRef.current.focus()
    }

    return (
        <div className="TodoList">
            <h3>- Todo List using useLocalStorage():</h3>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} type="text" placeholder="Tengo que..." onChange={e => setText(e.target.value)} />
            </form>
            <h3>Pending: {todos.length}</h3>
            <ul>
                {todos.map(todo => <li key={todo.id}>{todo.text}</li>)}
            </ul>
            <h3>LocalStorage:</h3>
            <pre>{JSON.stringify(todos, null, 2)}</pre>
        </div>
    );
}

export default TodoList;