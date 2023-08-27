
import React,{useState} from "react";
import './../styles/App.css';

export default function App() {
  let [inputField, setInputField] = useState([]);
  const handleClick = () => {
    setInputField([...inputField, inputField.length + 1]);
  };
  return (
    <div className="App">
      {inputField.length > 0 ? (
        inputField.map((field) => (
          <FormField
            key={field}
            field={field} // Pass the field value to the FormField component
            inputField={inputField}
            setInputField={setInputField}
          />
        ))
      ) : (
        <p>No fields in the form</p>
      )}
      <button onClick={handleClick}>Add Field</button>
    </div>
  );
}

function FormField({ field, inputField, setInputField }) {
  const handleClick = () => {
    const newInputField = inputField.filter((item) => item !== field); // Use the field value here
    setInputField(newInputField);
  };
  return (
    <div>
      <input />
      <button onClick={handleClick}>Delete</button>
    </div>
  );
}
