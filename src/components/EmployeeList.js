import React, { useEffect, useState } from "react";
import api from "../services/app";
import EditEmployee from "./EditEmployee";

function EmployeeList() {

  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(null);

  const fetchEmployees = async () => {
    const res = await api.get("/employees");
    setEmployees(res.data);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    await api.delete(`/employees/${id}`);
    fetchEmployees();
  };

  return (
    <div>

      <h2>Employee List</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {employees.map(emp => (

            <tr key={emp._id}>

              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.department}</td>
              <td>{emp.salary}</td>

              <td>
                <button onClick={() => setEditing(emp)}>Edit</button>

                <button onClick={() => deleteEmployee(emp._id)}>
                  Delete
                </button>
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {editing && (
        <EditEmployee employee={editing} refresh={fetchEmployees} />
      )}

    </div>
  );
}

export default EmployeeList;