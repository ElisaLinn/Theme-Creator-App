import "./Color.css";
import ColorForm from "./ColorForm/ColorForm.jsx";
import CopyButton from "./ColorCopyButton/CopyButton.jsx";
import DeleteButton from "./ColorDeleteButton/DeleteButton.jsx";
import ContrastChecker from "./ColorContrastChecker/ContrastChecker.jsx";
import { useState } from "react";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditing() {                   // ändert state von false zu true => Ansicht wird zu Editing gewechselt
    setIsEditing(true);
  }

  function handleEditSubmit(editedData) {                               //Veränderung wird gespeichert editedData sind die data aus ColorForm
    onEditColor(color.id, editedData);                                 // ruft on EditColor aus App auf, übergibt color.id und die neuen Daten
    setIsEditing(false);                                               
  }

  function handleCancel() {
    setIsEditing(false);
  }

  if (isEditing) {
    return (
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
    <>
      <div>
        <div className="color-card">
          <div className="color-card__info">
            <div className = "color-card__hex__flex">
            <h3 className="color-card__hex">{color.hex}</h3>
            <CopyButton textToCopy={color.hex} />
            </div>
            <h4>{color.role}</h4>
            <p>contrast: {color.contrastText}</p>
            <div>
              <ContrastChecker
                Hexvalue={color.hex}
                ColorTextValue={color.contrastText}
              />
            </div>
            <div>
              <DeleteButton onDelete={onDeleteColor} colorId={color.id} />
              <button onClick={handleEditing}>Edit</button>
           </div>
          </div>
          <div
            className="color-card__display"
            style={{
              "--displayed": color.hex,
              color: color.contrastText,
            }}
          />
        </div>
      </div>
    </>
  );
}
