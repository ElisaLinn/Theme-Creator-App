/* adding colorForm function
submit event einbauen (onSubmit)
function handleSubmit festlegen (new FormData object) damit die Daten rausgezogen werden
return festlegen Html struktur ertsellen*/

import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#000000", contrastText: "#111111" },
  buttonText = "Add Color",
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        contrast text
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <button>{buttonText}</button>
    </form>
  );
}
