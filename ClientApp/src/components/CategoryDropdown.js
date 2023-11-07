import React, { useState, useEffect } from 'react';

function CategoryDropdown( { setCategory } ) {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    fetch('api/selections/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategoryList(data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  const handleDropdownChange = (event) => {
    const category = (event.target.value);
    setCategory(category);
  };

  return (
    <div>
      <label>Select an category:</label>
      <select onChange={handleDropdownChange}>
        <option value="">Select a category</option>
        {categoryList.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

export default CategoryDropdown;