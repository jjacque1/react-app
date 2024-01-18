import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import Counter from "./components/Counter.jsx"
import React, { useState } from "react";


function App() {
  // return <Counter/> 

  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Title></Title>
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified"></Todo>
        <Todo title="Finish Interview Section"></Todo>
        <Todo title="Land a $100k Job"></Todo>
      </div>

      {showModal && <Modal title="Confirm delete?"></Modal> }
    </div>
  );
}

export default App;
