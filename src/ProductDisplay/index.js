import React, { useEffect, useState } from 'react';
import './style.css';
import { useParams } from 'react-router-dom';
import { Link,use } from 'react-router-dom';
const ProductDisplayPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    const getProductDisplay = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProductDisplay();
  }, [productId]);
  if (!product) {
    return <p>Loading product details...</p>;
  }
  return (
    <div className='prod'>
      <h1>Product ProductDisplay</h1>
      <div className='prods'>
        <img src={product.thumbnail} alt={product.title} className='images'/>
        <h2>{product.title}</h2>
        <p>{product.brand}</p>
        <p>Ksh {product.price}</p>
      </div>
    </div>
  );
};
export default ProductDisplayPage;
