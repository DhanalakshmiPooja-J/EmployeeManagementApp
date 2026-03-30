import React, { useEffect, useState } from "react";
import api from "../services/app";
import EmployeeModal from "./EmployeeModal";
import DeleteModal from "./DeleteModal";

function EmployeeTable() {

  const [employees, setEmployees] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  const confirmDelete = async () => {
    await api.delete(`/employees/${deleteId}`);
    setDeleteId(null);
    fetchEmployees();
  };

  return (
    <div className="table-container">

      <div className="header-row">
        <h3>Employees</h3>
        <button onClick={() => { setEditing(null); setModalOpen(true); }}>
          + Add Employee
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {employees.map(emp => (
            <tr key={emp._id}>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>₹{emp.salary}</td>
              <td>
                <button onClick={() => { setEditing(emp); setModalOpen(true); }}>
                  Edit
                </button>

                <button onClick={() => setDeleteId(emp._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add/Edit Modal */}
      <EmployeeModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        employee={editing}
        refresh={fetchEmployees}
      />

      {/* Delete Modal */}
      <DeleteModal
        isOpen={!!deleteId}
        onClose={() => setDeleteId(null)}
        onConfirm={confirmDelete}
      />

    </div>
  );
}

export default EmployeeTable;