import React, { useState } from "react";
import api from "../services/app";

function AddEmployee({ refresh }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await api.post("/employees", form);

    setForm({
      name: "",
      email: "",
      department: "",
      salary: ""
    });

    refresh();
  };

  return (
    <div className="form-card">
      <h3>Add Employee</h3>

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange} />
        <input name="salary" placeholder="Salary" value={form.salary} onChange={handleChange} />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddEmployee;