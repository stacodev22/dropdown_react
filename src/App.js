import React from "react";

// ~ Import Style
import "./App.css";

import CustomDropDownContext from "./DropDownContext";
import DropDownComponent from "./Component/DropDown";

const App = () => {
  return (
    <div className="appContainer">
      <CustomDropDownContext>
        <DropDownComponent />
      </CustomDropDownContext>
    </div>
  );
};

export default App;
