import React, { useContext, useState } from 'react';
import TodoContext from './TodoContext';

export default function Input() {
  // Accessing the todo and settodo values from the TodoContext using useContext
  const { todo, settodo } = useContext(TodoContext);
  
  // Initializing the state for the input value
  const [state, setstate] = useState({ todo: "" });

  // Accessing the current value of todo
  const curr = todo();
  console.log(curr);
  
  return (
    <div className='inputBox'>
      <h1>Add Todos</h1>
      <div>
        {/* Input field for adding todos */}
        <input
          placeholder='Add Your Todo'
          id='todo'
          name='todo'
          // Updating the state with the input value
          onChange={(e) => { setstate({ [e.target.name]: e.target.value, status: 'Pending' }) }}
        ></input>
        
        {/* Button to add the todo */}
        <button
          type='submit'
          onClick={(e) => {
            // Creating a new array with the current todos and the new todo from state
            let newarr = [...curr, state];
            // Clearing the input field
            document.getElementById('todo').value = "";
            setstate({ todo: "" })
            // Checking if the todo has a non-empty value and updating the todos
            state.todo.length > 0 && settodo([...newarr]);
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
