import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import { addTodoAction } from '../redux';

const TodoInput = () => {
    const [todo, setTodo] = useState('');

    const dispatch = useDispatch();

    const addTodo = (todo) => dispatch(addTodoAction(todo));

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(todo.trim() === '') return;

        addTodo({
            id: uuid(),
            name: todo,
            complete: false
        });

        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="todo"
                placeholder="Add a todo"
                value={todo}
                onChange={handleChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    );
}

export default TodoInput;
