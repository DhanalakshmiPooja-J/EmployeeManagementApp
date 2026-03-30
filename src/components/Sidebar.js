import React from "react";

function Sidebar({ setPage }) {

  return (
    <div className="sidebar">

      <h2>EMS</h2>

      <ul>
        <li onClick={() => setPage("dashboard")}>
          Dashboard
        </li>

        <li onClick={() => setPage("employees")}>
          Employees
        </li>
      </ul>

    </div>
  );
}

export default Sidebar;