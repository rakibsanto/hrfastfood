import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar({ cartCount, setIsCartOpen }) {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/5">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src="/logo.png" alt="HR Fast Food Logo" className="w-12 h-12 rounded-full border-2 border-orange-500/50 group-hover:border-orange-500 transition-all shadow-lg" />
                <div className="flex flex-col">
                    <h1 className="text-xl font-black italic tracking-tighter text-white leading-none">
                        HR <span className="text-orange-500">FAST FOOD</span>
                    </h1>
                    <span className="text-[10px] uppercase font-bold text-white tracking-[0.2em]">It's A Live Kitchen</span>
                </div>
            </div>
            <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                className="relative cursor-pointer"
            >
                <div className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition-colors group">
                    <ShoppingBag className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
                {cartCount > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold border-2 border-black"
                    >
                        {cartCount}
                    </motion.span>
                )}
            </motion.div>
        </nav>
    );
}
