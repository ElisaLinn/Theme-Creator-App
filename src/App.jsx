import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm";
import { useState } from "react";

function App() {
  const [colors, setColors] = useState(initialColors);

  function handleSubmitColor(colorData) {
    const newColor = {
      id: crypto.randomUUID(),
      ...colorData
    };
    setColors([...colors, newColor]);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} />;
      })}
    </>
  );
}

export default App;
