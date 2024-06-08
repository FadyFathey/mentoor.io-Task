import Task from "./Task";

interface TasksProps {
  handleEdit: (index: number) => void;
}

const Tasks: React.FC<TasksProps> = ({ handleEdit }) => {
  return (
    <div className="flex flex-col justify-start items-center">
      <Task onEdit={handleEdit} />
    </div>
  );
};

export default Tasks;
