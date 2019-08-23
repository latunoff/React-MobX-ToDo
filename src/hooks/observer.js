import React from 'react'
import { useObservable, useObserver } from "mobx-react-lite"

const TodoListObservable = () => {
    const todos = useObservable(new Map())
    const todoRef = React.useRef()
    const addTodo = React.useCallback(() => {
        todos.set(todoRef.current.value, false)
        todoRef.current.value = ""
    }, [todos])

    const toggleTodo = React.useCallback((todo) => {
        todos.set(todo, !todos.get(todo))
    }, [todos])

    return useObserver(() => (
        <div>
            {Array.from(todos).map(([todo, done]) => (
                <div onClick={() => toggleTodo(todo)} key={todo}>
                    {todo}
                    {done ? " ✔" : " ⏲"}
                </div>
            ))}
            <input ref={todoRef} />
            <button onClick={addTodo}>Add todo</button>
        </div>
    ))
}

export default TodoListObservable