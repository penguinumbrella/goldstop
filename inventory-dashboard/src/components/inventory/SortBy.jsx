import React from 'react';
import './SortBy.css';

const SortBy = ({ sortOption, setSortOption }) => {
  return (
    <div className="sort-by">
      <label>Sort By:</label>
      <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
        <option value="name">Name</option>
        <option value="category">Category</option>
        <option value="price">Price</option>
        <option value="stock">Stock</option>
      </select>
    </div>
  );
};

export default SortBy;
