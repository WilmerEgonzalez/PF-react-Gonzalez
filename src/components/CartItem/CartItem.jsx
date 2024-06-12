import './CartItem.css'
import React from 'react';


const CartItem = ({ item, removeItem }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;
