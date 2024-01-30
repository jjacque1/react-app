import "./Modal.css";

function Modal({ title, cancleModal, confirmModal }) {
  return (
    
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button onClick={cancleModal} className="btn btn__cancel">
            Cancel
          </button>
          <button onClick={confirmModal} className="btn">
            Confirm
          </button>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  );
}

export default Modal;
