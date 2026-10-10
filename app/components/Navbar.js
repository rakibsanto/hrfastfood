import React, { useState } from 'react';
import { ShoppingBag, Menu as MenuIcon, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from './Menu';

export default function Navbar({ cartCount, setIsCartOpen, activeCategory, setActiveCategory }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleCategoryClick = (cat) => {
        setActiveCategory(cat);
        setIsMenuOpen(false);
        document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/50 border-b border-white/5">
                <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <Image src="/logo.png" alt="HR Fast Food & Cafe Logo" width={48} height={48} className="rounded-full border-2 border-orange-500/50 group-hover:border-orange-500 transition-all shadow-lg" />
                    <div className="flex flex-col">
                        <h1 className="text-xl font-black italic tracking-tighter text-white leading-none">
                            HR <span className="text-orange-500">FAST FOOD & CAFE</span>
                        </h1>
                        <span className="text-[10px] uppercase font-bold text-white tracking-[0.2em]">It's A Live Kitchen</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
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

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(true)}
                        className="relative cursor-pointer md:hidden"
                    >
                        <div className="bg-white/10 p-3 rounded-full hover:bg-orange-500 transition-colors group">
                            <MenuIcon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                        </div>
                    </motion.div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[60] bg-zinc-950 flex flex-col p-6"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-2xl font-black italic tracking-tighter text-white">
                                MENU <span className="text-orange-500">CATEGORIES</span>
                            </h2>
                            <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-white/10 rounded-full text-white hover:bg-white/20">
                                <X size={24} />
                            </button>
                        </div>
                        <div className="flex-1 overflow-y-auto">
                            <div className="flex flex-col gap-2">
                                {CATEGORIES.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => handleCategoryClick(cat)}
                                        className={`p-4 rounded-2xl text-left font-bold uppercase transition-colors ${activeCategory === cat ? 'bg-orange-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
