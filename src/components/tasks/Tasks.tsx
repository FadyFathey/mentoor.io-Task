import { useTranslation } from "react-i18next";
import Task from "./Task";
import { useSelector } from "react-redux";
import { RootState } from "../../RTK/store";

interface TasksProps {
  handleEdit: (index: number) => void;
}

const Tasks: React.FC<TasksProps> = ({ handleEdit }) => {
  const { t } = useTranslation();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);

  return (
    <div className="flex flex-col justify-start items-center">
      {tasks.length > 0 ? (
        tasks.map((task, index) => <Task key={index} onEdit={handleEdit} />)
      ) : (
        <p>{t("No tasks available")}</p>
      )}
    </div>
  );
};

export default Tasks;
