import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../RTK/store";
import { deleteTask, toggleTaskDone } from "../../RTK/taskSlice";
import undone from "../../assets/undone.svg";
import doneIcon from "../../assets/done.svg";
import deleteIcon from "../../assets/delete.svg";
import { t } from "i18next";

interface TaskProps {
  onEdit: (index: number) => void;
}

const Task: React.FC<TaskProps> = ({ onEdit }) => {
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDeleteTask = (index: number) => {
    dispatch(deleteTask(index));
  };

  const handleToggleTaskDone = (index: number) => {
    dispatch(toggleTaskDone(index));
  };

  return (
    <div>
      {tasks.length > 0 ? (
        tasks.map((task, index) => (
          <div
            key={index}
            className={`w-[736px] h-[72px] flex justify-between items-center gap-[8px] p-4 bg-neutral-800 rounded-lg shadow border border-gray-300 my-2 ${
              task.done ? "line-through" : ""
            }`}
          >
            <img
              className="cursor-pointer"
              onClick={() => handleToggleTaskDone(index)}
              src={task.done ? doneIcon : undone}
              alt={task.done ? "done" : "undone"}
            />
            <p
              className="text-zinc-100 text-sm font-normal leading-tight cursor-pointer"
              onClick={() => onEdit(index)}
            >
              {task.text}
            </p>
            <img
              className="cursor-pointer"
              onClick={() => handleDeleteTask(index)}
              src={deleteIcon}
              alt="deleteIcon"
            />
          </div>
        ))
      ) : (
        <p>{t("No tasks available")}</p>
      )}
    </div>
  );
};

export default Task;
