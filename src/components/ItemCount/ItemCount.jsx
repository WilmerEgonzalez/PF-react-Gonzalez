import '../ItemCount/ItemCount.css'
import React, { useState } from 'react';

const ItemCount = ({stock, initial, onAdd}) => {
  const [quantity, setquantity] = useState(initial)

  const increment = () => {
    if(quantity < stock) {
      setquantity(quantity+1)
    }
  }

  const decrement = () => {
    if(quantity > 1) {
      setquantity(quantity - 1)
    }
  }

  return (
    <div className='Counter'>
      <div className='Controls'>
        <button className='Button'onClick={decrement}>-</button>
        <h4 className='Number'>{quantity}</h4>
        <button className='Button'onClick={increment}>+</button>
      </div>
      <div>
        <button className='Button'onClick={() => onAdd(quantity)} disabled={!stock}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
