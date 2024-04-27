import { useContext } from "react";
import styles from "./WelcomeMessage.module.css"
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessge = () =>{

  const {todoItems}=useContext(TodoItemsContext);
  //object destructuring
  // const todoItems=contextObj.todoItems;

  return todoItems.length === 0 && <p className={styles.welcome}>Enjoy your Day</p>

}

export default WelcomeMessge;