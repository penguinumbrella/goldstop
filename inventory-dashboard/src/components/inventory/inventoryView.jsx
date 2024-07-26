// InventoryView.jsx

import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import SearchBar from './SearchBar';
import SortBy from './SortBy';
import ItemRow from './ItemRow';
import Modal from '../Modal';
import AddItemForm from './AddItemForm';
import ShoesTable from './ShoesTable'; // Import ShoesTable component
import './InventoryView.css';

const InventoryView = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('name');
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchItems = async () => {
      const itemsCollection = collection(db, 'inventory');
      const itemSnapshot = await getDocs(itemsCollection);
      const itemList = itemSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(itemList);
    };
    fetchItems();
  }, []);

  const handleAddItem = async (newItem) => {
    const docRef = await addDoc(collection(db, 'inventory'), newItem);
    setItems([...items, { id: docRef.id, ...newItem }]);
    setIsModalOpen(false); // Close modal after adding item
  };

  const handleEditItem = (item) => {
    setEditItem(item);
    setIsModalOpen(true);
  };

  const handleDeleteItem = async (id) => {
    // Implement delete logic
  };

  const filteredItems = items
    .filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'category') return a.category.localeCompare(b.category);
      if (sortOption === 'price') return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
      if (sortOption === 'stock') return a.stock - b.stock;
      return 0;
    });

  return (
    <div className="inventory-view">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <SortBy sortOption={sortOption} setSortOption={setSortOption} />
      <button onClick={() => setIsModalOpen(true)}>Add Item</button>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)}>
        <AddItemForm onAdd={handleAddItem} editItem={editItem} />
      </Modal>
      <table className="inventory-table">
        {/* Render the existing inventory items */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Category</th>
            <th>Image</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Supplier</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <ItemRow key={item.id} item={item} onEdit={handleEditItem} onDelete={handleDeleteItem} />
          ))}
        </tbody>
      </table>

      {/* Add ShoesTable component */}
      <ShoesTable />
    </div>
  );
};

export default InventoryView;
