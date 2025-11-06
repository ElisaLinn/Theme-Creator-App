import { useState } from "react";
import "./DeleteButton.css";

    export default function DeleteButton({ onDelete, colorId }) {
   const [deleteButton, setDeleteButton] = useState(false);

  function handleFirstClick() {
    setDeleteButton(true);
  }

  function handleCancel() {
    setDeleteButton(false); 
  }

  function handleConfirmDelete() {
    onDelete(colorId);  
    setDeleteButton(false);  
  }

  if (!deleteButton) {
    return (
      <button className="delete-button" onClick={handleFirstClick}>
        Delete
      </button>
    );
  }

 
  return (
    <>
    <div className="delete-button">
        <p>Really Delete?</p>
    <div className="">
      <button onClick={handleCancel}>
        Cancel
      </button>
      <button onClick={handleConfirmDelete}>
        Delete
      </button>
      </div>
      </div>
    </>
  );
}
 
