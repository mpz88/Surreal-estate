import React, { useState } from "react";
import "../styles/addproperty.css";

const initialState = {
  fields: {
    title: "",
    city: "Manchester",
    type: "Flat",
  },
};

const AddProperty = () => {
  const [fields, setFields] = useState(initialState.fields);

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  const handleAddProperty = (e) => {
    e.preventDefault();
  }; console.log (fields)

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
            placeholder="e.g.,Apartment Manchester"

          />
        </label>
        <label htmlFor="city">
            City
        </label>
           <select id="city" name="city" value={fields.city} onChange={handleFieldChange}>
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
           </select>
         <label htmlFor="type">
             Type
          </label>  
            <select id="type" name="type" value={fields.type} onChange={handleFieldChange}>
               <option value="Flat">Flat</option>
               <option value="Detached">Detached</option>
               <option value="Semi-Detached">Semi-Detached</option>
               <option value="Terraced">Terraced</option>
               <option value="End of Terraced">End of Terraced</option>
               <option value="Cottage">Cottage</option>
               <option value="Bungalow">Bungalow</option>
            </select>
           <button type="submit">Add</button>
       </form>
    </div>
  );
};

export default AddProperty;
