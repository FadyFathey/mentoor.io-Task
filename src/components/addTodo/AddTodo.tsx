import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../RTK/tasksSlice";

const AddTodo = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(addTask(inputValue));
    setInputValue(""); // Reset the input field after submission
  };

  return (
    <div className="flex justify-center items-center gap-[8px] mt-[-27px]">
      <input
        className="w-[625px] h-[54px] p-4 bg-neutral-800 rounded-lg border border-stone-950 text-zinc-500 text-base font-normal leading-snug"
        type="text"
        placeholder="Add a new task"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        onClick={handleSubmit}
        className="w-[103px] h-[52px] p-4 bg-cyan-700 rounded-lg text-zinc-100 text-sm font-bold leading-tight"
        type="submit"
      >
        Create
      </button>
    </div>
  );
};

export default AddTodo;
