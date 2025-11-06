// import { useState } from "react";

// export default function ColorEditButton({ edit, onEditColor }) {
//   const [isEditing, setIsEditing] = useState(false);

//   function handleEditing() {
//     setIsEditing(true);
//   }

//   function handleEditSubmit(editedData, onEditColor) {
//     onEditColor(edit.id, editedData);
//     setIsEditing(false);
//   }

//   function handleCancel() {
//     setIsEditing(false);
//   }

//   if (isEditing) {
//     return (
//       <div
//         className="color-card"
//         style={{
//           background: edit.hex,
//           color: edit.contrastText,
//         }}
//       >
//         <h3 className="color-card-headline">{color.hex}</h3>
//         <h4>{edit.role}</h4>
//         <ColorForm
//           onSubmitColor={handleEditSubmit}
//           initialData={edit}
//           buttonText="Save Changes"
//         />
//         <button onClick={handleCancel}>Cancel</button>
//       </div>
//     );
//   }

//   return (
//     <>
//       <div>
//         <div className="color-card">
//           <div className="color-card__info">
//             <div className="color-card__hex__flex">
//               <h3 className="color-card__hex">{edit.hex}</h3>
//               <CopyButton textToCopy={edit.hex} />
//             </div>
//             <h4>{edit.role}</h4>
//             <p>contrast: {edit.contrastText}</p>
//             <div>
//               <ContrastChecker
//                 Hexvalue={edit.hex}
//                 ColorTextValue={edit.contrastText}
//               />
//             </div>
//             <div>
//               <DeleteButton onDelete={onDeleteColor} colorId={color.id} />
//               <button onClick={handleEditing}>Edit</button>
//             </div>
//           </div>
//           <div
//             className="color-card__display"
//             style={{
//               "--displayed": edit.hex,
//               color: edit.contrastText,
//             }}
//           />
//         </div>
//       </div>
//     </>
//   );
// }