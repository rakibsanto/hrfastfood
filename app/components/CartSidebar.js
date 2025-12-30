import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, ArrowRight, CheckCircle, Send, Plus, Minus } from 'lucide-react';

export default function CartSidebar({ isOpen, onClose, cart, removeFromCart, updateQuantity, clearCart }) {
    const [step, setStep] = useState('review'); // review | details | success
    const [loading, setLoading] = useState(false);
    const [customer, setCustomer] = useState({ name: '', phone: '', address: '' });
    const [placedOrderNumber, setPlacedOrderNumber] = useState('');

    const total = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0).toFixed(2);

    const handleCheckout = async (e) => {
        e.preventDefault();
        setLoading(true);

        const orderDetails = {
            cart: cart,
            total: total,
            customer: customer
        };

        try {
            const res = await fetch('/api/telegram-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(orderDetails),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                setPlacedOrderNumber(data.orderNumber);
                setStep('success');
                setTimeout(() => {
                    clearCart();
                    onClose();
                    setStep('review');
                    setCustomer({ name: '', phone: '', address: '' });
                }, 3000);
            } else {
                alert("Order failed: " + (data.message || "Unknown error"));
            }
        } catch (err) {
            console.error(err);
            alert("An error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
                    />
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        className="fixed top-0 right-0 h-full w-full max-w-md bg-zinc-900 border-l border-white/10 z-[70] shadow-2xl flex flex-col"
                    >
                        <div className="p-6 border-b border-white/5 flex justify-between items-center">
                            <h2 className="text-xl font-black uppercase tracking-wider">Your Bag</h2>
                            <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                <X size={20} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6">
                            {cart.length === 0 && step !== 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-zinc-500 gap-4">
                                    <span className="text-6xl">🛒</span>
                                    <p>Your bag is empty.</p>
                                    <button onClick={onClose} className="text-orange-500 font-bold hover:underline">Start Ordering</button>
                                </div>
                            ) : (
                                <>
                                    {step === 'review' && (
                                        <div className="space-y-4">
                                            {cart.map((item, idx) => (
                                                <div key={idx} className="flex gap-4 items-center bg-zinc-800/50 p-4 rounded-2xl">
                                                    <img src={item.img} alt={item.name} className="w-16 h-16 object-cover rounded-xl bg-zinc-800" />
                                                    <div className="flex-1">
                                                        <h4 className="font-bold text-sm md:text-base">{item.name}</h4>
                                                        <div className="flex gap-2 items-center">
                                                            {item.originalPrice && (
                                                                <span className="text-zinc-500 line-through text-xs italic">৳{item.originalPrice}</span>
                                                            )}
                                                            <p className="text-orange-400 font-mono text-sm font-bold">৳{(item.price * (item.quantity || 1)).toFixed(2)}</p>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center gap-3 bg-zinc-900/50 rounded-xl p-1 border border-white/5">
                                                        <button
                                                            onClick={() => updateQuantity(idx, -1)}
                                                            className="p-1 hover:bg-white/10 rounded-lg transition-colors text-zinc-400 hover:text-white"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                        <span className="font-mono font-bold text-sm min-w-[20px] text-center">
                                                            {item.quantity || 1}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(idx, 1)}
                                                            className="p-1 hover:bg-white/10 rounded-lg transition-colors text-zinc-400 hover:text-white"
                                                        >
                                                            <Plus size={14} />
                                                        </button>
                                                    </div>

                                                    <button
                                                        onClick={() => removeFromCart(idx)}
                                                        className="text-zinc-500 hover:text-red-500 p-2 transition-colors"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {step === 'details' && (
                                        <form className="space-y-6" onSubmit={handleCheckout}>
                                            <div className="bg-orange-900/20 border border-orange-500/20 p-4 rounded-xl mb-6">
                                                <h3 className="text-orange-400 text-sm font-bold uppercase mb-2">Order Summary</h3>
                                                <div className="flex justify-between text-lg font-black mb-2">
                                                    <span>Total</span>
                                                    <span>৳{total}</span>
                                                </div>
                                                <p className="text-[14px] text-zinc-400 italic mt-2">
                                                    * Delivery charge will be added based on your distance.
                                                </p>
                                            </div>

                                            <div className="space-y-4">
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-zinc-500 mb-1">Full Name</label>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="w-full bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-orange-500"
                                                        value={customer.name}
                                                        onChange={e => setCustomer({ ...customer, name: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-zinc-500 mb-1">Phone Number</label>
                                                    <input
                                                        required
                                                        type="tel"
                                                        className="w-full bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-orange-500"
                                                        value={customer.phone}
                                                        onChange={e => setCustomer({ ...customer, phone: e.target.value })}
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-xs uppercase font-bold text-zinc-500 mb-1">Delivery Address</label>
                                                    <textarea
                                                        required
                                                        rows="3"
                                                        className="w-full bg-zinc-800 border-none rounded-xl p-4 text-white focus:ring-2 focus:ring-orange-500"
                                                        value={customer.address}
                                                        onChange={e => setCustomer({ ...customer, address: e.target.value })}
                                                    ></textarea>
                                                </div>
                                            </div>

                                            <div className="flex gap-4">
                                                <button
                                                    type="button"
                                                    onClick={() => setStep('review')}
                                                    className="px-6 py-4 rounded-xl font-bold bg-zinc-800 hover:bg-zinc-700 transition-colors"
                                                >
                                                    Back
                                                </button>
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="flex-1 bg-orange-600 text-white font-black py-4 rounded-xl hover:bg-orange-500 transition-colors flex items-center justify-center gap-2"
                                                >
                                                    {loading ? 'Sending...' : 'Confirm Order'} <Send size={20} />
                                                </button>
                                            </div>
                                        </form>
                                    )}

                                    {step === 'success' && (
                                        <div className="h-full flex flex-col items-center justify-center text-center">
                                            <motion.div
                                                initial={{ scale: 0 }} animate={{ scale: 1 }}
                                                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 text-black"
                                            >
                                                <CheckCircle size={40} />
                                            </motion.div>
                                            <h3 className="text-2xl font-black mb-2">Order Sent!</h3>
                                            <div className="bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-lg mb-4">
                                                <span className="text-orange-400 font-mono font-bold tracking-wider">#{placedOrderNumber}</span>
                                            </div>
                                            <p className="text-zinc-400 text-sm max-w-[250px]">We've sent your order details to Telegram. We'll contact you shortly to confirm.</p>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>

                        {cart.length > 0 && step !== 'success' && step !== 'details' && (
                            <div className="p-6 border-t border-white/5 bg-zinc-900">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="text-zinc-400">Total</span>
                                    <span className="text-2xl font-black">৳{total}</span>
                                </div>
                                <button
                                    onClick={() => setStep('details')}
                                    className="w-full bg-white text-black font-black py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-colors flex items-center justify-center gap-2"
                                >
                                    Checkout <ArrowRight size={20} />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
