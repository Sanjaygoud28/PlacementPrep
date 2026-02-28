import React from 'react'
import ProductCard from './ProductCard';
const App = () => {
     const handleAddToCart = (productName) => {
    alert(`${productName} added successfully!`);
  };

  return (
    <div >
      <ProductCard
        productname="iPhone 15"
        price={79999}
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        productname="Samsung Galaxy S24"
        price={74999}
        onAddToCart={handleAddToCart}
      />

      <ProductCard
        productname="MacBook Air M3"
        price={119999}
        onAddToCart={handleAddToCart}
      />
    </div>
  )
}

export default App
