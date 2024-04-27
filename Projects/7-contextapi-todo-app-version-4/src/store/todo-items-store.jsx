import { createContext } from "react"

export const TodoItemsContext = createContext(
  {
    // todoItems: todoItems,
    // addNewItems: addNewItem,
    // deleteItem: deleteItem
    // use shortcut/
    todoItems: [],
    addNewItem:()=>{},
    deleteItem:()=>{}
  }
);

