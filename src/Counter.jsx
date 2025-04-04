import React, { useState } from "react";

function Counter() {
  const [thing, setThing] = useState("");
  const [listToDo, setList] = useState([]);

  function handleAddThing() {
    if (thing.trim() !== "") {
      setList((l) => [...l, thing]);
      setThing("");
    }
  }
  function handleDelete(index) {
    setList((l) => l.filter((_, i) => i !== index));
  }
  function handleGoUp(index) {
    if (index > 0) {
      const updatedThings = [...listToDo];
      [updatedThings[index], updatedThings[index - 1]] = [
        updatedThings[index - 1],
        updatedThings[index],
      ];
      setList(updatedThings);
    }
  }

  function handleGoDown(index) {
    if (index < listToDo.length - 1) {
      const updatedThings = [...listToDo];
      [updatedThings[index], updatedThings[index + 1]] = [
        updatedThings[index + 1],
        updatedThings[index],
      ];
      setList(updatedThings);
    }
  }
  return (
    <div className="ToDoList">
      <h2>To Do List</h2>
      <input
        type="text"
        value={thing}
        onChange={(e) => setThing(e.target.value)}
      ></input>
      <button onClick={handleAddThing}>Add thing</button>
      {thing}
      {listToDo.map((item, index) => (
        <div key={index}>
          <p key={index}>{item}</p>
          <button onClick={() => handleGoUp(index)}> ☝️</button>
          <button onClick={() => handleGoDown(index)}>👇</button>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default Counter;
