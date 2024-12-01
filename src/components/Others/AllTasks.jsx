import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTasks = () => {
  const authData = useContext(AuthContext);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee</h2>
        <h5 className="text-lg font-medium w-1/5">New Tasks</h5>
        <h5 className="text-lg font-medium w-1/5">Active Tasks</h5>
        <h5 className="text-lg font-medium w-1/5">Completed Tasks</h5>
        <h5 className="text-lg font-medium w-1/5">Failed Tasks</h5>
      </div>
      <div className="">
        {authData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-500 py-2 px-4 flex justify-between rounded mb-2 "
            >
              <h2 className="text-lg font-medium w-1/5">{elem.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskCounts.newTask}
              </h3>
              <h2 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskCounts.active}
              </h2>
              <h2 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskCounts.completed}
              </h2>{" "}
              <h2 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskCounts.failed}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTasks;
