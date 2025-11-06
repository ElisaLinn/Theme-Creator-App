import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("card-theme-colors", {         // speichert die Liste der Farben (colors) im Browserspeicher
    defaultValue: initialColors
  });

  function handleSubmitColor(colorData) {                                        // Funktion zum hinzufügen einer neuen Farbe
    const newColor = {
      id: crypto.randomUUID(),                                                    // es
      ...colorData,
    };
    setColors([newColor, ...colors]);
  }
   function handleDeleteColor(colorId) {                                         //Funktion zum Löschen einer Farbe (filter zum rausfiltern der id)
    setColors(colors.filter((color) => color.id !== colorId));                   //filtert alle Farben außer mit dieser ID dadurch verschwindet die Farbe
  }


  function handleEditColor(colorId, newColorData) {                              //Funktion zum Editiren von vorhanden Farbe (aktuelles wird mit map überschreiben)
    setColors(colors.map(color => 
      color.id === colorId 
        ? { ...color, ...newColorData }
        : color
    ));
  }

  return (                                                                                 // gibt uns die Elemente
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
