import Modal from "react-modal";

function DeleteModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal isOpen={isOpen} className="pro-modal" overlayClassName="pro-overlay">

      <h3>Delete Employee?</h3>
      <p>This action cannot be undone.</p>

      <div className="modal-footer">
        <button className="btn-secondary" onClick={onClose}>
          Cancel
        </button>

        <button className="btn-primary" onClick={onConfirm}>
          Delete
        </button>
      </div>

    </Modal>
  );
}

export default DeleteModal;