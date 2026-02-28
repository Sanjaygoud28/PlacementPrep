import React from 'react'

const ProductCard = ({productname,Price,onAddToCart}) => {
  const handleClick=()=>{
    console.log(`Added${productname} to cart`)
    onAddToCart(productname)
  }
  
  return  (<div>
      <h2>{productname}</h2>
      <p className='text-red-600'>₹{Price}</p>
      <button onClick={handleClick}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard
