import React from "react";
import Task from "./Task";

const Tasks = ({ handleEdit }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Task onEdit={handleEdit} />
    </div>
  );
};

export default Tasks;
