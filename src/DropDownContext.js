import { createContext, useContext, useState } from "react";

const DropDownContext = createContext();

export const useDropDownContext = () => {
  const value = useContext(DropDownContext);
  return value;
};

// # DropDown ContextProvider Function
const CustomDropDownContext = ({ children }) => {
  // & All Variable declaration
  // & Check on mouse Hover dropdown menu Active
  const [isOpen, setIsOpen] = useState(false);
  // & Get All DropDown List
  const [dropDownItems, setDropDownItems] = useState([]);
  // & Get Active Item from Dropdown List
  const [activeItem, setActiveItem] = useState(null);

  // $ On Mouse Hover active DropDown

  // # Main Rendering Function
  return (
    <DropDownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        dropDownItems,
        setDropDownItems,
        activeItem,
        setActiveItem,
      }}
    >
      {children}
    </DropDownContext.Provider>
  );
};

export default CustomDropDownContext;
