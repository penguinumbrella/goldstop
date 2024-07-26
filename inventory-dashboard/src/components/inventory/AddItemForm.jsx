import React, { useState, useEffect } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import './AddItemForm.css';

const AddItemForm = ({ onAdd, editItem }) => {
  const [item, setItem] = useState({
    name: '',
    category: '',
    image: '',
    stock: 0,
    price: '',
    supplier: ''
  });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (editItem) {
      setItem(editItem);
    } else {
      setItem({
        name: '',
        category: '',
        image: '',
        stock: 0,
        price: '',
        supplier: ''
      });
    }
  }, [editItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = item.image;

    if (imageFile) {
      const storage = getStorage();
      const storageRef = ref(storage, `images/${imageFile.name}`);
      await uploadBytes(storageRef, imageFile);
      imageUrl = await getDownloadURL(storageRef);
    }

    onAdd({ ...item, image: imageUrl });
  };

  return (
    <form className="add-item-form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={item.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="category" value={item.category} onChange={handleChange} placeholder="Category" required />
      <input type="file" onChange={handleImageChange} accept="image/*" />
      <input type="number" name="stock" value={item.stock} onChange={handleChange} placeholder="Stock" required />
      <input type="text" name="price" value={item.price} onChange={handleChange} placeholder="Price" required />
      <input type="text" name="supplier" value={item.supplier} onChange={handleChange} placeholder="Supplier" required />
      <button type="submit">{editItem ? 'Update Item' : 'Add Item'}</button>
    </form>
  );
};

export default AddItemForm;
