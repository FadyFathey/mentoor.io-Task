import AddTodo from "../components/addTodo/AddTodo";
import Header from "../components/header/Header";
import Tasks from "../components/tasks/Tasks";
import CreatedTask from "../components/util/CreatedTask";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <AddTodo />
      <CreatedTask />
      <Tasks />
    </div>
  );
};
``
export default MainLayout;
