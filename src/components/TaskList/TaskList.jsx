import React from "react";

const TaskList = ({ data }) => {
  console.log(data.tasks[0].task_title);
  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2023</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">MAsdas asdasd asdsa</h2>
        <p className="text-sm mt-2">
          Dolore non enim consectetur anim non et laboris ut excepteur id
          consequat minim. Laboris officia consequat officia sint est excepteur
          laboris deserunt incididunt do irure excepteur ipsum enim. Sunt qui
          elit culpa labore cillum occaecat in duis sint sit deserunt fugiat.
          Tempor incididunt Lorem sunt enim fugiat consequat.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2023</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">MAsdas asdasd asdsa</h2>
        <p className="text-sm mt-2">
          Dolore non enim consectetur anim non et laboris ut excepteur id
          consequat minim. Laboris officia consequat officia sint est excepteur
          laboris deserunt incididunt do irure excepteur ipsum enim. Sunt qui
          elit culpa labore cillum occaecat in duis sint sit deserunt fugiat.
          Tempor incididunt Lorem sunt enim fugiat consequat.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2023</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">MAsdas asdasd asdsa</h2>
        <p className="text-sm mt-2">
          Dolore non enim consectetur anim non et laboris ut excepteur id
          consequat minim. Laboris officia consequat officia sint est excepteur
          laboris deserunt incididunt do irure excepteur ipsum enim. Sunt qui
          elit culpa labore cillum occaecat in duis sint sit deserunt fugiat.
          Tempor incididunt Lorem sunt enim fugiat consequat.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-yellow-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2023</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">MAsdas asdasd asdsa</h2>
        <p className="text-sm mt-2">
          Dolore non enim consectetur anim non et laboris ut excepteur id
          consequat minim. Laboris officia consequat officia sint est excepteur
          laboris deserunt incididunt do irure excepteur ipsum enim. Sunt qui
          elit culpa labore cillum occaecat in duis sint sit deserunt fugiat.
          Tempor incididunt Lorem sunt enim fugiat consequat.
        </p>
      </div>

      <div className="flex-shrink-0 h-full w-[300px] p-5 bg-pink-400 rounded-xl">
        <div className="flex justify-between items-center">
          <h3 className="bg-red-600 text-sm px-3 py-1 rounded">High</h3>
          <h4 className="text-sm">20 Feb 2023</h4>
        </div>
        <h2 className="mt-5 text-2xl font-semibold">MAsdas asdasd asdsa</h2>
        <p className="text-sm mt-2">
          Dolore non enim consectetur anim non et laboris ut excepteur id
          consequat minim. Laboris officia consequat officia sint est excepteur
          laboris deserunt incididunt do irure excepteur ipsum enim. Sunt qui
          elit culpa labore cillum occaecat in duis sint sit deserunt fugiat.
          Tempor incididunt Lorem sunt enim fugiat consequat.
        </p>
      </div>
    </div>
  );
};

export default TaskList;
