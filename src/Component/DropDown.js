import React from "react";

import styles from "./DropDown.module.css";
import { useDropDownContext } from "../DropDownContext";

const dropDownList = [
  "Joy",
  "Excitement",
  "Gratitude",
  "Pride",
  "Optimism",
  "Contentment",
  "Love",
];

const DropDownComponent = () => {
  const {
    isOpen,
    setIsOpen,
    dropDownItems,
    setDropDownItems,
    activeItem,
    setActiveItem,
  } = useDropDownContext();

  const handleMouseEnter = () => {
    setIsOpen(!isOpen);
    setDropDownItems(dropDownList);
  };

  const handleMouseLeave = () => {
    setIsOpen(!isOpen);
    setDropDownItems([]);
  };

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={styles.dropDownComponent}>
      <h1 className={styles.title}>Share Your Happiness Level </h1>
      <h3 className={styles.answer}>
        My Happiness Level is :{" "}
        <span className={styles.myAns}>{activeItem}</span>
      </h3>
      <div
        className={styles.dropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button className={styles.dropdownButton}>Dropdown</button>
        {isOpen && (
          <ul className={styles.dropdownList}>
            {dropDownItems.map((item, index) => (
              <div
                key={index}
                className={styles.dropdownItem}
                onClick={() => handleClick(item)}
              >
                {item}
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDownComponent;
