import React, { useState, useEffect } from 'react';

function CategoryDropdown() {
  const [categoryList, setCategoryList] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

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
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      <label>Select an category:</label>
      <select value={selectedValue} onChange={handleDropdownChange}>
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