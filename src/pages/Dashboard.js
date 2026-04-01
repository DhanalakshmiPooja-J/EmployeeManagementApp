import React, { useEffect, useState } from "react";
// import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
// import EmployeeTable from "../components/EmployeeTable";
import api from "../services/app";

function Dashboard() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    const res = await api.get("/employees");
    setCount(res.data.length);
  };

  return (
    <div className="main">
      <Header />
      <div className="cards">
        <StatsCard title="Total Employees" value={count} />
        <StatsCard title="Departments" value={count} />
        <StatsCard title="Active" value={count} />
      </div>
      {/* <EmployeeTable /> */}
    </div>
  );
}

export default Dashboard;
