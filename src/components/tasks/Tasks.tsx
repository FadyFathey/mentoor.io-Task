import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../RTK/store";
import Task from "./Task";

const Tasks = () => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <div className="flex flex-col justify-start items-center">
      {tasks.map((task, index) => (
        <Task key={index} description={task} />
      ))}
    </div>
  );
};

export default Tasks;
