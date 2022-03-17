import React, { useState } from "react";
import AddTodo from "./components/AddTodo/AddTodo";
import EditModal from "./components/EditModal/EditModal";
import TodoList from "./components/TodoList/TodoList";

function App() {
  let [todos, setTodos] = useState([]);
  let [modal, setModal] = useState(false);
  let [editTodo, setEditTodo] = useState({});

  function handleTask(newObj) {
    let newTodos = [...todos];

    newTodos.push(newObj);
    setTodos(newTodos);
  }

  function changeStatus(id) {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });

    setTodos(newTodos);
  }

  function handleDelete(id) {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  }

  function handleEdit(index) {
    setEditTodo(todos[index]);
  }

  return (
    <div className="app">
      <AddTodo handleTask={handleTask} />
      <TodoList
        todos={todos}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      {modal ? <EditModal editTodo={editTodo} /> : null}
    </div>
  );
}

export default App;
