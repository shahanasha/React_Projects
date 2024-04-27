import AddTodo from "./components/AddTodo"
import AppName from "./components/AppName"
import "./App.css"
import TodoItems from "./components/TodoItems"
import WelcomeMessge from "./components/WelcomeMessage"
import TodoItemsContextProvider from "./store/todo-items-store"



function App() {
  return (
    <TodoItemsContextProvider>
      <center className='todo-container'>
        <AppName />
        <AddTodo />
        <WelcomeMessge />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  )

}

export default App
