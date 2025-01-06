import React, { useState } from "react";
import Hen from "./Hen";
import Stomach from "./Stomach";
import "./App.css";

function App() {
  const [color, setColor] = useState("blue");

  const changeColor = () => {
    setColor(color === "blue" ? "red" : "blue"); // Toggle between blue and red
  };

  return (
    <div>
      <Hen name="water" />
      <Stomach name="water" color={color} />
      <button onClick={changeColor}>click me</button>
    </div>
  );
}

export default App;


