import React, { useState } from "react";
import "../styles/addproperty.css";

const initialState = {
  fields: {
    title: "",
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (e) => {
    e.preventDefault();
    
    const handleFieldChange = (event) => {
        setFields({ ...fields, [event.target.name]: event.target.value });
      };
  };

  return (
    <div className="addproperty-container">
      <h2 className="addproperty-title">Add Property Page</h2>
        <form onSubmit={handleAddProperty}>
          <label htmlFor="title">
               Title
            <input
             id="title"
             name="title"
             value={fields.title}
             onChange={handleFieldChange}
  />
          </label>
          <button type="submit">Add</button>
        </form>
    </div>
  );
};

export default AddProperty;
