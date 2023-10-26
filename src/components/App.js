import React from "react";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom";
import Properties from "./Properties";
import AddProperty from "./AddProperty";
import "../styles/app.css";

const App = () => {
  return (
    <div>
      <NavBar />
       <Routes>
         <Route path= "/properties" element={<Properties/>} />
         <Route path= "/add-property" element={<AddProperty/>} />
       </Routes>
    </div>
  );
};

export default App;
