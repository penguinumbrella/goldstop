import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './ItemRow.css';

const ItemRow = ({ item, onEdit, onDelete }) => {
  return (
    <tr className="item-row">
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.category}</td>
      <td><img src={item.image} alt={item.name} className="item-image" /></td>
      <td>{item.stock}</td>
      <td>{item.price}</td>
      <td>{item.supplier}</td>
      <td>
        <FaEdit className="icon" onClick={() => onEdit(item)} />
        <FaTrash className="icon" onClick={() => onDelete(item.id)} />
      </td>
    </tr>
  );
};

export default ItemRow;
