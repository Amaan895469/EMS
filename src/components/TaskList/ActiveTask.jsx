import React from "react";
import Login from "../Auth/Login";

const ActiveTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="text-sm">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.taskTitle}</h2>
      <p className="text-sm mt-2">{data.taskDescription}</p>
      <div className="flex justify-between mt-6">
        <button className="rounded font-medium bg-green-500 p-2 text-xs">
          Completed
        </button>
        <button className=" rounded font-medium bg-red-500 p-2 text-xs">
          Failed
        </button>
      </div>
    </div>
  );
};

export default ActiveTask;
