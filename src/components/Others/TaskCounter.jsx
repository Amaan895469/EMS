import React from "react";

const TaskCounter = ({ data }) => {
  return (
    <div className="flex mt-10 justify-between gap-5 screen">
      <div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400 ">
        <h2 className="text-3xl text-black font-semibold">
          {data.task_counters.new_task}
        </h2>
        <h3 className="text-xl font-medium text-black">New</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400">
        <h2 className="text-3xl font-semibold">
          {data.task_counters.completed}
        </h2>
        <h3 className="text-xl font-medium">Completed</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-green-400">
        <h2 className="text-3xl font-semibold">{data.task_counters.active}</h2>
        <h3 className="text-xl font-medium">Active</h3>
      </div>
      <div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
        <h2 className="text-3xl font-semibold">{data.task_counters.failed}</h2>
        <h3 className="text-xl font-medium">Failed</h3>
      </div>
    </div>
  );
};

export default TaskCounter;
