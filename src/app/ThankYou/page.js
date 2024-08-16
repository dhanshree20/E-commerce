"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

export default function ThankYou() {
    const router = useRouter();

    const handleContinueShopping = () => {
        router.push('/'); // Redirect back to the home page
    };

    return (
        <div className="thank-you">
            <h1>Thank You for Your Purchase!</h1>
            <p>Your order has been successfully processed.</p>
            <button onClick={handleContinueShopping}>Continue Shopping</button>
        </div>
    );
}
