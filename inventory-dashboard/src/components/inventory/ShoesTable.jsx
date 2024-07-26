// ShoesTable.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import './ShoesTable.css'; // Import CSS for ShoesTable styling

const ShoesTable = () => {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    const fetchShoes = async () => {
      const shoesCollection = collection(db, 'shoes');
      const shoesSnapshot = await getDocs(shoesCollection);
      const shoesList = shoesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setShoes(shoesList);
    };
    fetchShoes();
  }, []);

  const handleEditShoe = async (updatedShoe) => {
    const shoeDoc = doc(db, 'shoes', updatedShoe.id);
    await updateDoc(shoeDoc, updatedShoe);
    setShoes(shoes.map(shoe => (shoe.id === updatedShoe.id ? updatedShoe : shoe)));
  };

  const handleDeleteShoe = async (id) => {
    await deleteDoc(doc(db, 'shoes', id));
    setShoes(shoes.filter(shoe => shoe.id !== id));
  };

  return (
    <div className="shoes-table-container">
      <table className="inventory-table shoes-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Size</th>
            <th>Color</th>
            <th>Style</th>
            <th>Display</th>
            <th>Cost</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {shoes.map(shoe => (
            <tr key={shoe.id}>
              <td>{shoe.id}</td>
              <td>{shoe.brand}</td>
              <td>{shoe.size}</td>
              <td>{shoe.color}</td>
              <td>{shoe.style}</td>
              <td>{shoe.display ? 'Yes' : 'No'}</td>
              <td>{shoe.cost}</td>
              <td>
                <button onClick={() => handleEditShoe(shoe)}>Edit</button>
                <button onClick={() => handleDeleteShoe(shoe.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShoesTable;
