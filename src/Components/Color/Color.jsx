import "./Color.css";
import ColorForm from "./ColorForm.jsx";
import CopyButton from "./CopyButton.jsx";
import "./DeleteButton.css";
import DeleteButton from "./DeleteButton.jsx";
import ContrastChecker from "./Contrast.jsx";
import { useState } from "react";

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
      
      <ContrastChecker 
        Hexvalue={color.hex}
        ColorTextValue={color.contrastText}
      />
      
      <DeleteButton onDelete={onDeleteColor} colorId={color.id}/>
      <button onClick={handleEditing}>Edit</button>
    </div>
  );
}
