import React, { useState } from "react";
import AddTodo from "../components/addTodo/AddTodo";
import Header from "../components/header/Header";
import Tasks from "../components/tasks/Tasks";
import CreatedTask from "../components/util/CreatedTask";

const MainLayout = () => {
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleEdit = (index: number) => {
    setEditIndex(index); // Set the index of the task being edited
  };

  return (
    <div>
      <Header />
      <AddTodo editIndex={editIndex} setEditIndex={setEditIndex} />
      <CreatedTask />
      <Tasks handleEdit={handleEdit} />
    </div>
  );
};

export default MainLayout;
