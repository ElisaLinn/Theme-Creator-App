import { useState } from "react";

    export default function DeleteButton({ onDelete, colorId }) {
   const [showConfirmation, setShowConfirmation] = useState(false);

  function handleFirstClick() {
    setShowConfirmation(true);
  }

  function handleCancel() {
    setShowConfirmation(false); 
  }

  function handleConfirmDelete() {
    onDelete(colorId);  
    setShowConfirmation(false);  
  }

  if (!showConfirmation) {
    return (
      <button onClick={handleFirstClick}>
        Delete
      </button>
    );
  }

 
  return (
    <>
    <div className="">
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
 
