import React, { useState, useEffect } from 'react';

function CategoryDropdown( { setCategory } ) {
  const [categoryList, setCategoryList] = useState([]);

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
      <select className="form-select" aria-label="Default select example" onChange={handleDropdownChange}>
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