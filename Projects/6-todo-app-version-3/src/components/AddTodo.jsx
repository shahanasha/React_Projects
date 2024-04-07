import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";


function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value)
  }
  const handleDateChange = (event) => {

    setDueDate(event.target.value)

  }

  const handleAddButtonClicked = (event) => {
    
    event.preventDefault();
    onNewItem(todoName, dueDate);
    setDueDate("");
    setTodoName("");


  }

  return <div className="container text-center">

    <form className="row kg-row"
      onSubmit={handleAddButtonClicked}>

      <div className="col-6">
        <input
          type="text"
          placeholder='Enter todo here'
          value={todoName}
          onChange={handleNameChange}
        />
      </div>
      <div className="col-4">
        <input
          type="date"
          value={dueDate}
          onChange={handleDateChange}
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