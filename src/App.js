// import React from "react";
// import AddEmployee from "./components/AddEmployee";
// import EmployeeList from "./components/EmployeeList";
// import "./App.css";

// function App() {

//   return (
//     <div className="container">

//       <h1>Employee Management System</h1>

//       <AddEmployee refresh={() => window.location.reload()} />

//       <EmployeeList />

//     </div>
//   );

// }

// export default App;

import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import EmployeePage from "./pages/EmployeePage";
import Sidebar from "./components/Sidebar";
import "./App.css";

// function App() {
//   return <Dashboard />;
// }

function App() {

  const [page, setPage] = useState("dashboard");

  return (
    <div style={{ display: "flex" }}>

      <Sidebar setPage={setPage} />

      {page === "dashboard" && <Dashboard />}
      {page === "employees" && <EmployeePage />}

    </div>
  );
}

export default App;