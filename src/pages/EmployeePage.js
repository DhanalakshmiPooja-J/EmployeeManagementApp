import React, { useState } from "react";
import AddEmployee from "../components/AddEmployee";
import EmployeeTable from "../components/EmployeeTable";

function EmployeePage() {

  const [refresh, setRefresh] = useState(false);

  const reload = () => setRefresh(!refresh);

  return (
    <div className="main">

      <h2>Employee Management</h2>

      {/* <AddEmployee refresh={reload} /> */}

      <EmployeeTable key={refresh} />

    </div>
  );
}

export default EmployeePage;