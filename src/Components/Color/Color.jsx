import "./Color.css";
import ColorForm from "./ColorForm.jsx";
import CopyButton from "./CopyButton.jsx";
import "./DeleteButton.css";
import DeleteButton from "./DeleteButton.jsx";
import { useEffect, useState } from "react";

export default function Color({ color, onDeleteColor, onEditColor }) {
const [isEditing, setIsEditing] = useState(false);

function handleEditing() {
  setIsEditing(true);
}

function handleEditSubmit(editedData){
  onEditColor(color.id, editedData);
  setIsEditing(false);
}

  function handleCancel() {
    setIsEditing(false);
  }

  useEffect(()=>{
    async function startFetching(){
      try{
      const respone = await fetch("https://www.aremycolorsaccessible.com/api/are-they");
      const contrast = await respone.json();
      console.log(contrast)
      setIsEditing(contrast);}
      catch (error) {
        console.error("Fetch Error", error)
      }
    
      )
    }
    startFetching();
  }, [color.hex, color.contrastText]);
   


  if(isEditing) {
    return  (
      
      <div 
      
        className="color-card"
        style={{
          background: color.hex,
          color: color.contrastText,
        }}
      >
       <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
        <ColorForm 
          onSubmitColor={handleEditSubmit}
          initialData={color}  
          buttonText="Save Changes"
        />
        <button onClick={handleCancel}>Cancel</button>
      </div>
    );
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <CopyButton textToCopy={color.hex} />
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      <DeleteButton onDelete={onDeleteColor} colorId={color.id}/>
    <button onClick={handleEditing}>Edit</button>
    </div>
  );
}
