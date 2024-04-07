import Hello from "./Hello";
import KgButton from "./KgButton";
import Random from "./Random";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {

  let [foodItems, setFoodItems] = useState(["salad", "Sabsi", "Roti"]);

  const onKeyDown = (event) => {
    if(event.key === 'Enter'){
      let newFoodItem= event.target.value;
      event.target.value="";
      let newItems=[...foodItems,newFoodItem];
      setFoodItems(newItems);
      console.log("food valuw entered is  " +  newFoodItem)
    }
   
  }

  // let emptyMessage = foodItems.length===0 ? <h3>I am still hungry</h3> : null

  return (

    <>
      <Container>
        <h1 className="food-Heading">Healthy food</h1>
        <ErrorMessage items={foodItems} />
        <FoodInput handleKeyDown={onKeyDown} />
        {/* <p>{textToShow}</p> */}
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
      <p>Above is the healthy food menu that good for health</p>
    </Container> */}
    </>
  )

}

export default App;