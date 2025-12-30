"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';

export default function FastFoodSite() {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    // Load cart from local storage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('hr_fastfood_cart');
        if (savedCart) {
            try {
                setCart(JSON.parse(savedCart));
            } catch (e) {
                console.error("Failed to load cart:", e);
            }
        }
        setIsInitialized(true);
    }, []);

    // Save cart to local storage whenever it changes
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem('hr_fastfood_cart', JSON.stringify(cart));
        }
    }, [cart, isInitialized]);

    const addToCart = (item) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 }
                        : cartItem
                );
            }
            return [...prevCart, { ...item, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const updateQuantity = (index, delta) => {
        setCart(prevCart => {
            const newCart = [...prevCart];
            const item = newCart[index];
            const newQuantity = (item.quantity || 1) + delta;

            if (newQuantity <= 0) {
                newCart.splice(index, 1);
            } else {
                newCart[index] = { ...item, quantity: newQuantity };
            }
            return newCart;
        });
    };

    const clearCart = () => setCart([]);

    return (
        <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden selection:bg-orange-500 selection:text-white">
            <Navbar cartCount={cart.reduce((sum, item) => sum + (item.quantity || 1), 0)} setIsCartOpen={setIsCartOpen} />

            <main>
                <Hero />
                <Menu addToCart={addToCart} />
            </main>

            <CartSidebar
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
                clearCart={clearCart}
            />

            <Footer />
        </div>
    );
}