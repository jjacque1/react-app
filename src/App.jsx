import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title></Title>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified"></Todo>
        <Todo title="Finish Interview Section"></Todo>
        <Todo title="Landa $100k Job"></Todo>
      </div>

      {/* <Modal></Modal> */}
    </div>
  );
}

export default App;
