import "./App.css";
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav.jsx"
import Users from "./pages/Users.jsx";

function App() {
  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users/:username" element = {<Users/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;


























// import Todo from "./components/Todo.jsx";
// import Title from "./components/Title.jsx";
// import Modal from "./components/Modal.jsx";
// // import Counter from "./components/Counter.jsx";
// import React, { useState, useEffect } from "react";

// function App() {
//   const [showModal, setShowModal] = useState(false);

//   function onTodoDelete() {
//     setShowModal(true);
//   }

//   function cancleModal() {
//     setShowModal(false);
//   }

//   function confirmModal() {
//     setShowModal(false);
//   }

//   // useEffect(() => {
//   //   console.log('on mount') /* This Code runs ony on mount */
//   // }, [])

//   // useEffect(() => {
//   //   console.log(`on mount AND on ${showModal} change`) /* This Code runs ony on mount AND on showModal change because of the dependency [showModal] passed*/
//   // }, [showModal])

//   useEffect(() => {
//     console.log("EVERY render")
//   })

//   return (
//     <div>
//       <Title></Title>
//       <div>
//         <input
//           type="text"
//           onChange={(event) => {
//             console.log(event.target.value);
//           }}
//         />
//         <button onClick={() => setShowModal(true)}>Add todo</button>
//       </div>
//       <div className="todo__wrapper">
//         <Todo
//           onTodoDelete={onTodoDelete}
//           title="Finish Frontend Simplified"
//         ></Todo>
//         <Todo
//           onTodoDelete={onTodoDelete}
//           title="Finish Interview Section"
//         ></Todo>
//         <Todo onTodoDelete={onTodoDelete} title="Land a $100k Job"></Todo>
//       </div>

//       {showModal && (
//         <Modal
//           cancleModal={cancleModal}
//           confirmModal={confirmModal}
//           title="Confirm delete?"
//         ></Modal>
//       )}
//     </div>
//   );
// }
