import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { RootState } from "../../RTK/store";
import useCompletedTasksStore from "../../zustand/completedTasksStore";

const CreatedTask: React.FC = () => {
  const { t } = useTranslation();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const completedTasks = useCompletedTasksStore((state) => state.tasks);

  const totalTasks = tasks.length;

  return (
    <div className="flex flex-col justify-center items-center mt-[30px]">
      <div className="flex justify-between w-[736px] mb-4">
        <div className="flex gap-[8px]">
          <h3 className="text-blue-400 text-sm font-bold">
            {t("Created tasks")}
          </h3>
          <span className="w-6 h-[19px] px-2 py-0.5 bg-zinc-800 rounded-[999px] flex-col justify-center items-center gap-2.5 inline-flex text-zinc-300 text-xs font-bold">
            {totalTasks}
          </span>
        </div>
        <div className="flex gap-[8px]">
          <span className="text-indigo-400 text-sm font-bold">
            {t("Completed")}
          </span>
          <span className="w-[70px] h-[19px] px-2 py-0.5 bg-[#333333] rounded-[999px] flex-col justify-center items-center gap-2.5 inline-flex">
            {completedTasks.length} {t("of")} {totalTasks}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreatedTask;
