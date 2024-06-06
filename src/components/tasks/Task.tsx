import undone from "../../assets/undone.svg";
import deleteIcon from "../../assets/delete.svg";

type TaskProps = {
  description: string;
};

const Task = ({ description }: TaskProps) => {
  return (
    <div className="w-[736px] h-[72px] flex justify-between items-center gap-[8px] p-4 bg-neutral-800 rounded-lg shadow border border-gray-300 my-2">
      <img src={undone} alt="undone" />
      <p className="text-zinc-100 text-sm font-normal leading-tight">
        {description}
      </p>
      <img src={deleteIcon} alt="deleteIcon" />
    </div>
  );
};

export default Task;
