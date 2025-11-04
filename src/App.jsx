import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("card-theme-colors", {
    defaultValue: initialColors
  });

  function handleSubmitColor(colorData) {
    const newColor = {
      id: crypto.randomUUID(),
      ...colorData,
    };
    setColors([...colors, newColor]);
  }
   function handleDeleteColor(colorId) {  
    setColors(colors.filter((color) => color.id !== colorId));
  }


  function handleEditColor(colorId, newColorData) {  // ← Das fehlt!
    setColors(colors.map(color => 
      color.id === colorId 
        ? { ...color, ...newColorData }
        : color
    ));
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleSubmitColor} />
      {colors.map((color) => {
        return <Color key={color.id} color={color} 
        onDeleteColor={handleDeleteColor}  
        onEditColor={handleEditColor}
        />;
      })}
     
    </>
  );
}


export default App;


