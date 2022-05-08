import "./inputElement.css";

export const InputElement = ({ changeHandler, name, id, value }) => {
  const nameUppercase = value.charAt(0).toUpperCase() + value.slice(1);
  return (
    <div className="inputElement">
      <label htmlFor={name}>{nameUppercase}</label>
      <input
        type={name === "from" || name === "to" || name === "telephone"  ? "number" : "text"}
        name={name}
        onChange={changeHandler}
        placeholder={nameUppercase}
        data-id={id}
      />
    </div>
  );
};
