import React, { useState } from "react";
import api from "../services/app";

function EditEmployee({ employee, refresh }) {

  const [form, setForm] = useState(employee);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const updateEmployee = async () => {
    await api.put(`/employees/${employee._id}`, form);
    refresh();
  };

  return (
    <div>

      <input name="name" value={form.name} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <input name="department" value={form.department} onChange={handleChange} />
      <input name="salary" value={form.salary} onChange={handleChange} />

      <button onClick={updateEmployee}>Update</button>

    </div>
  );
}

export default EditEmployee;