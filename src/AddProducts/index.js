import React, { useState } from 'react';
const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};
export default AddProductForm;
