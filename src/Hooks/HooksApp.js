import React, { useState } from 'react'

let todoList = [
    {
        text: 'Learn hooks',
        isCompleted: false
    }
]

function Todo(props) {

    return (
        <div style={{textDecoration: props.todo.isCompleted ? 'line-trough' : ''}} className='todo'>
            {props.todo.text}
            <div>
                <button onClick={() => props.completeTodo(props.index)}>Complete</button>
                <button onClick={() => props.deleteTodo(props.index)}>Delete</button>
                <button onClick={() => props.editTodo(props.index)}>Edit</button>
            </div>
        </div>
    )
}

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue('');
    }

    // useEffect(() => {
    //     setValue('Filip')
    // }, [])

    return (
        <div>
            <input type='text' className='input' value={value} onChange={(e) => setValue(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

function HooksApp() {
    const [todos, setTodos] = useState(todoList)

    function addTodo(text) {
        let newTodo = [...todos, { text }];
        setTodos(newTodo);
    }

    function completeTodo(index) {
        let newTodo = [...todos];
        newTodo[index].isCompleted = true;
        setTodos(newTodo);
    }

    function deleteTodo(index) {
        let newTodo = [...todos];
        newTodo.splice(index, 1);
        setTodos(newTodo);
    }

    function editTodo(index) {
        
    }

    return (
        <div className='app'>
            <div className='todo-list'>
                <TodoForm addTodo={addTodo} />
                {todos.map((todo, index) => (
                    <Todo key={index}
                    todo={todo}
                    index={index}
                    completeTodo={completeTodo}
                    deleteTodo={deleteTodo}
                    editTodo={editTodo}
                    />
                ))}
            </div>
        </div>
    )
}

export default HooksApp;