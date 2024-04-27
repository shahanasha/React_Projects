import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import "./App.css"
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import WelcomeMessge from "./components/WelcomeMessage"

function App() {

  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023"
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023"
  //   },
  //   {
  //     name: "Do Work",
  //     dueDate: "4/10/2023"
  //   }
  // ]

  const [todoItems, setTodoItems] = useState([]);

  const hanldeNewItem = (itemName, itemDueDate) => {

    // setTodoItems((currValue) => {
    //   const newTodoItems = [
    //     ...currValue,
    //     { name: itemName, dueDate: itemDueDate },
    //   ];
    //   return newTodoItems;
    // });
    
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }

  return (
    <center className='todo-container'>

      <AppName />
      <AddTodo onNewItem={hanldeNewItem} />
      {todoItems.length === 0 && <WelcomeMessge />}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />

    </center>
  );
}

export default App
