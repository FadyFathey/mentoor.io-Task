import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { addTask, updateTask } from "../../RTK/taskSlice";
import { RootState } from "../../RTK/store";

interface AddTodoProps {
  editIndex: number | null;
  setEditIndex: React.Dispatch<React.SetStateAction<number | null>>;
}

const AddTodo: React.FC<AddTodoProps> = ({ editIndex, setEditIndex }) => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState<string>("");
  const dispatch = useDispatch();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (editIndex !== null) {
      setInputValue(tasks[editIndex].text);
      inputRef.current?.focus();
    }
  }, [editIndex, tasks]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      if (editIndex !== null) {
        dispatch(updateTask({ index: editIndex, newText: inputValue }));
        setEditIndex(null);
      } else {
        dispatch(addTask(inputValue));
      }
      setInputValue("");
    }
  };

  return (
    <div className="flex justify-center items-center gap-[8px] mt-[-27px]">
      <input
        className="w-[625px] h-[54px] p-4 bg-neutral-800 rounded-lg border border-stone-950 text-zinc-500 text-base font-normal leading-snug"
        type="text"
        placeholder={t("addTaskPlaceholder")}
        value={inputValue}
        onChange={handleInputChange}
        ref={inputRef}
      />
      <button
        onClick={handleSubmit}
        className="w-[103px] h-[52px] p-4 bg-cyan-700 rounded-lg text-zinc-100 text-sm font-bold leading-tight"
        type="submit"
      >
        {editIndex !== null ? t("update") : t("create")}
      </button>
    </div>
  );
};

export default AddTodo;
