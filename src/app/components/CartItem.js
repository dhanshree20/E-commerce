import React from 'react';

export default function CartItem({ item, updateQuantity, removeFromCart }) {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>Price: ${item.price}</p>
                <div>
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="inc_desc-button">-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="inc_desc-button">+</button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-button">Remove</button> {/* Connect the remove button */}
            </div>
        </div>
    );
}
