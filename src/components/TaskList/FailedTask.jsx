import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.task_category}
        </h3>
        <h4 className="text-sm">{data.task_date}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.task_title}</h2>
      <p className="text-sm mt-2">{data.task_description}</p>
      <div className="flex justify-between mt-6">
        <button className="w-full rounded font-medium bg-green-500 p-2 text-xs">
          Failed: Try Again
        </button>
      </div>
    </div>
  );
};

export default FailedTask;
