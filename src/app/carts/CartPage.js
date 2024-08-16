"use client";
import React, { useContext, useState } from 'react';
import { CartContext } from './layout';
import './CartPage.css';

export default function CartPage() {
    const { cartItems, updateQuantity, removeItem } = useContext(CartContext);
    const [discount, setDiscount] = useState(0);

    // Calculate subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    // Apply discount logic
    const applyDiscount = () => {
        // Example: Fixed $10 discount
        setDiscount(10); 
    };

    const total = subtotal - discount;

    return (
        <div className="cart-container">
            <h1>Your Cart</h1>
            <div className="cart-items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} className="cart-item-image" />
                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => removeItem(item.id)} className="remove-button">
                                    Remove Item
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            {cartItems.length > 0 && (
                <div className="cart-summary">
                    <h2>Cart Summary</h2>
                    <p>Subtotal: ${subtotal.toFixed(2)}</p>
                    <p>Discount: ${discount.toFixed(2)}</p>
                    <p>Total: ${total.toFixed(2)}</p>
                    <button onClick={applyDiscount} className="apply-discount">
                        Apply $10 Discount
                    </button>
                    <button className="checkout-button">Proceed to Checkout</button>
                </div>
            )}
        </div>
    );
}
