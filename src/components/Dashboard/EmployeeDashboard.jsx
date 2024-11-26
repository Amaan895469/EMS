import React from "react";
import Header from "../Others/Header";
import TaskCounter from "../Others/TaskCounter";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data }) => {
  return (
    <div className="p-7 h-screen w-full">
      <Header data={data} />
      <TaskCounter data={data} />
      <TaskList data={data} />
    </div>
  );
};

export default EmployeeDashboard;
