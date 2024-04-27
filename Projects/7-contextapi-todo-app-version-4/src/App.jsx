import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import "./App.css"
import TodoItems from "./components/TodoItems"
import { useState } from "react"
import WelcomeMessge from "./components/WelcomeMessage"
import { TodoItemsContext } from "./store/todo-items-store"

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

  const addNewItem = (itemName, itemDueDate) => {
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
  const deleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  }
  // const defaultTodoItems = [
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
  // ];

  return (
    <TodoItemsContext.Provider value={{
      // todoItems: todoItems,
      // addNewItems: addNewItem,
      // deleteItem: deleteItem
      // use shortcut/
      todoItems,
      addNewItem,
      deleteItem
    }}>
      <center className='todo-container'>
        <AppName />
        <AddTodo />
        <WelcomeMessge />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App
