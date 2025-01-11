import React, { useState } from "react";
import "./ItemListManager.css"; // Import CSS for styling

function ItemListManager() {
  const [items, setItems] = useState([]); // State to store list of items
  const [inputValue, setInputValue] = useState(""); // State for input field value
  const [error, setError] = useState(""); // State for error message

  // Function to handle adding a new item
  const addItem = () => {
    if (inputValue.trim() === "") {
      setError("Please enter a valid item."); // Display error if input is empty
      return;
    }
    setItems([...items, inputValue.trim()]); // Add new item to the list
    setInputValue(""); // Clear the input field
    setError(""); // Clear any existing error
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Item List Manager</h1>
      </header>
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} // Update input value state
          placeholder="Enter an item"
          className="input-field"
        />
        <button onClick={addItem} className="add-button">
          Add Item
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item">
            {item}
          </li> // Render each item in the list
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
