import { useRef } from "react";
import { IoAddCircleOutline } from "react-icons/io5";


function AddTodo({ onNewItem }) {

  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState("");
  const todoNameElement=useRef();
  const dueDateElement=useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value);
  //   numOfUpdates.current += 1 ;

  // }
  // const handleDateChange = (event) => {

  //   setDueDate(event.target.value);
  //   console.log(`no of updates are : ${numOfUpdates.current}`)

  // }

  const handleAddButtonClicked = (event) => {
    
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    console.log(`${todoName} due on :${dueDate}` )
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");

  }

  return <div className="container text-center">

    <form className="row kg-row"
      onSubmit={handleAddButtonClicked}>

      <div className="col-6">
        <input
          type="text"
          ref={todoNameElement}
          placeholder='Enter todo here'
          // onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          ref={dueDateElement}
          // onChange={handleDateChange}
        />
      </div>
      <div className="col-2">
        <button
          type="submit"
          className="btn btn-success kg-button"
        >
          <IoAddCircleOutline />
        </button>
      </div>
    </form>

  </div>
}

export default AddTodo;