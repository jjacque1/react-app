import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import React, { useState } from "react";

function App() {
  let isModalOpen = false;

  function toggleModal() {
    isModalOpen = !isModalOpen
    console.log(isModalOpen)
  }

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
        <button>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified"></Todo>
        <Todo title="Finish Interview Section"></Todo>
        <Todo title="Land a $100k Job"></Todo>
      </div>

      {isModalOpen ? <Modal title="Confirm delete?"></Modal>: null}
    </div>
  );
}

export default App;
