import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import api from "../services/app";

Modal.setAppElement("#root");

function EmployeeModal({ isOpen, onClose, employee, refresh }) {

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  useEffect(() => {
    if (employee) {
      setForm(employee);
    } else {
      setForm({ name: "", email: "", department: "", salary: "" });
    }
  }, [employee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (employee) {
      await api.put(`/employees/${employee._id}`, form);
    } else {
      await api.post("/employees", form);
    }

    refresh();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="pro-modal"
      overlayClassName="pro-overlay"
    >

      {/* Header */}
      <div className="modal-header">
        <h2>{employee ? "Edit Employee" : "Add Employee"}</h2>
        <span className="close-btn" onClick={onClose}>×</span>
      </div>

      {/* Body */}
      <div className="modal-body">

        <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email Address" />
        <input name="department" value={form.department} onChange={handleChange} placeholder="Department" />
        <input name="salary" value={form.salary} onChange={handleChange} placeholder="Salary" />

      </div>

      {/* Footer */}
      <div className="modal-footer">

        <button className="btn-secondary" onClick={onClose}>
          Cancel
        </button>

        <button className="btn-primary" onClick={handleSubmit}>
          {employee ? "Update" : "Add Employee"}
        </button>

      </div>

    </Modal>
  );
}

export default EmployeeModal;