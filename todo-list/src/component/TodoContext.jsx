import React, { useEffect, useState } from 'react';

// Creating the TodoContext using createContext
const TodoContext = React.createContext({
    todo: () => {},
    settodo: (data) => {},
});

export function TodoContextProvider({ children }) {
    // State for storing the todo list
    const [todo, settodo] = useState([]);

    // Function to return the todo list
    function show() {
        return todo;
    }

    // Function to add/update the todo list
    function add(data) {
        settodo(data);
    }

    // Wrapping the children components with the TodoContext.Provider
    return (
        <TodoContext.Provider
            value={{
                todo: show,
                settodo: add,
            }}
        >
            {children}
        </TodoContext.Provider>
    );
}

export default TodoContext;
