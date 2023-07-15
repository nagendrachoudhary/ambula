import React, { useContext, useEffect, useState } from "react";
import TodoContext from "./TodoContext";

export default function Table() {
  const { todo, settodo } = useContext(TodoContext);
  const[Loading,setLoading]=useState(true)
  const curr = todo()
  useEffect(()=>{
    setTimeout(()=>setLoading(false),2000)
  },[Loading])
  // Handler for deleting an item from the todo list
  function deleteItemHandler(i) {
    let newArr = [...curr];
    newArr.splice(i, 1);
    settodo(newArr);
  }
  // Handler for updating the status of an item (Pending/Completed)
  function update(i) {
    let newArr = [...curr];
    if (newArr[i].status === "Pending") {
      newArr[i] = { ...newArr[i], status: "Completed" };
    } else {
      newArr[i] = { ...newArr[i], status: "Pending" };
    }
    settodo(newArr);
  }

  // Filter the todo list to get pending tasks
  const pendingTasks = curr.filter((el) => {
    return el.status === "Pending";
  });

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
        {/* Displaying total, completed, and pending tasks counts */}
        <h1>Total:-{curr.length}</h1>
        <h1>Completed:-{curr.length - pendingTasks.length}</h1>
        <h1>Pending:- {pendingTasks.length}</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>S No</th>
            <th>Task</th>
            <th>Status</th>
            <th>Delete</th>
          </tr>
        </thead>
        {Loading?<div style={{display:'flex' , alignItems:'center'}}>Loading....</div>:
            curr.length==0?<div>No Task</div>:
        <tbody>
          {curr.map((el, i) => {
              return (
                  <tr style={{ backgroundColor: el.status !== "Pending" ? "#bda5a5d1" : "white" }} key={i}>
                {/* Displaying the serial number, task, status, and delete button for each item */}
                <td>{i + 1}</td>
                <td>{el.todo}</td>
                <td onClick={() => { update(i) }}>{el.status}</td>
                <td><button onClick={() => deleteItemHandler(i)}>X</button></td>
              </tr>
            );
        })}
        </tbody>}
      </table>
    </div>
  );
}
