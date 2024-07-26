import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './Item.css';

const Item = ({ item, onEdit, onDelete }) => {
  return (
    <div className="item">
      <div className="item-details">
        <img src={item.image} alt={item.name} />
        <div className="item-info">
          <h3>{item.name}</h3>
          <p>Category: {item.category}</p>
          <p>Stock: {item.stock}</p>
          <p>Price: {item.price}</p>
          <p>Supplier: {item.supplier}</p>
        </div>
      </div>
      <div className="item-actions">
        <FaEdit className="icon" onClick={() => onEdit(item)} />
        <FaTrash className="icon" onClick={() => onDelete(item.id)} />
      </div>
    </div>
  );
};

export default Item;
