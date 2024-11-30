import React from "react";
import Header from "../Others/Header";
import CreateTask from "../Others/CreateTask";
import AllTasks from "../Others/AllTasks";

const AdminDashboard = ({data}) => {
  return (
    <div className="p-7 h-screen w-full">
      <Header data={data} />
      <CreateTask data={data} />
      <AllTasks data={data} />
    </div>
  );
};

export default AdminDashboard;
