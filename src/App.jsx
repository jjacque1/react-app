import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
// import Counter from "./components/Counter.jsx";
import React, { useState } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancleModal() {
    setShowModal(false);
  }

  function confirmModal() {
    setShowModal(false);
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
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Frontend Simplified"
        ></Todo>
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish Interview Section"
        ></Todo>
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job"></Todo>
      </div>

      {showModal && (
        
        <Modal
          cancleModal={cancleModal}
          confirmModal={confirmModal}
          title="Confirm delete?"
        ></Modal>

      )}
    </div>
  );
}


export default App;
