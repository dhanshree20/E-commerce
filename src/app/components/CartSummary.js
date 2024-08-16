import React from 'react';

export default function CartSummary({ subtotal, discount, total, onCheckout }) {
    return (
        <div className="cart-summary">
            <h2 className="h2-cart-summary">Your Cart Summary</h2>
            <h3 className="h2-cart-summary">Price Details</h3>
            <p className="p-cart-summary">Subtotal: ${subtotal.toFixed(2)}</p>
            <p className="p-cart-summary">Discount: -${discount.toFixed(2)}</p>
            <p className="p-cart-summary">Total: ${total.toFixed(2)}</p>
            
        </div>
    );
}
