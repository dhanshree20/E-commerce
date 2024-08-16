"use client";
import React, { useContext, useState } from 'react';
import CartItem from '../components/CartItem';
import CartSummary from '../components/CartSummary';
import { CartContext } from '../layout';
import { useRouter } from 'next/navigation';

export default function Cart() {
    const { cartItems, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
    const [discount, setDiscount] = useState(0); // State to manage the discount
    const [discountType, setDiscountType] = useState('fixed'); // State to manage discount type
    const router = useRouter();


    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    const discountAmount = discountType === 'percentage'
    ? (discount / 100) * subtotal
    : discount;

   const total = subtotal - discountAmount;

   const handleDiscountChange = (e) => {
    setDiscount(Number(e.target.value));
};

const handleDiscountTypeChange = (e) => {
    setDiscountType(e.target.value);
};

const handleCheckout = () => {
    // Simulate checkout process
    alert("Checkout successful!"); // Display a success message
    clearCart(); // Clear the cart after successful checkout
    router.push('/ThankYou'); // Redirect to a Thank You page
};

    return (
        <div className="cart-page">
            <h1 className="h1-cart">Your Cart</h1>
            {cartItems.length > 0 ? (
                <div className="cart-items">
                    {cartItems.map((item) => (
                        <CartItem
                            key={item.id}
                            item={item}
                            updateQuantity={updateQuantity}
                            removeFromCart={removeFromCart}
                        />
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
           
           {/* Discount Section */}
           <div className="discount-section">
                <h3>Apply Discount</h3>
                <input
                    type="number"
                    placeholder="Enter discount"
                    value={discount}
                    onChange={handleDiscountChange}
                />
                <select value={discountType} onChange={handleDiscountTypeChange} className="applyDis">
                    <option value="fixed">Fixed Discount ($)</option>
                    <option value="percentage">Percentage Discount (%)</option>
                </select>
            </div>

            <CartSummary subtotal={subtotal} discount={discountAmount} total={total} />
            <button onClick={handleCheckout} disabled={cartItems.length === 0} className="checkout" >
                Proceed to Checkout
            </button>
        </div>

       

        
      
    );
}
