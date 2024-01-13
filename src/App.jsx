import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from './components/Modal.jsx'

function App() {
  return (
    <div>
      <Title></Title>
      <div className="todo__wrapper">
        <Todo title="Finish Frontend Simplified"
              paragraph="Code along with Frontend Simplified step by step"></Todo>
        <Todo title="Finish Interview Section"
              paragraph="Finish every interview question in the next 3 months"></Todo>
        <Todo title="Landa $100k Job"
              paragraph="Apply to 100 Jobs"></Todo>
      </div>

      <Modal title="Areyou sure you want to delete?">

      </Modal>
      <Modal title="Are you sure you want to add?">
              
      </Modal>
    </div>
  );
}

export default App;
