import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const CATEGORIES = ["All", "Burgers", "Meat Box", "Momos", "Chicken Nuggets", "Meatball", "Mix Chips"];

const FOOD_ITEMS = [
    {
        id: 1,
        name: 'Chicken Meat Box Small',
        price: 80,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Layers of fries, grilled chicken, sausages, and melted cheese.',
        tags: ['Heavy', 'Best Seller']
    },
    {
        id: 2,
        name: 'Chicken Meat Box Medium',
        price: 140,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Layers of fries, grilled chicken, sausages, and melted cheese.',
        tags: ['Heavy', 'Best Seller']
    },
    {
        id: 3,
        name: 'Chicken Meat Box Large',
        price: 170,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Layers of fries, grilled chicken, sausages, and melted cheese.',
        tags: ['Heavy', 'Best Seller']
    },
    {
        id: 4,
        name: 'Chicken Cheese Meat Box Small',
        price: 110,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Layers of fries, grilled chicken, sausages, and melted cheese.',
        tags: ['Heavy', 'Best Seller']
    },
    {
        id: 5,
        name: 'Chicken Cheese Meat Box Medium',
        price: 170,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Layers of fries, grilled chicken, sausages, and melted cheese.',
        tags: ['Heavy', 'Best Seller']
    },
    {
        id: 6,
        name: 'Chicken Cheese Meat Box Large',
        price: 200,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Layers of fries, grilled chicken, sausages, and melted cheese.',
        tags: ['Heavy', 'Best Seller']
    },
    {
        id: 7,
        name: 'Mini Burger',
        price: 50,
        // originalPrice: 12.99,
        category: 'Burgers',
        img: '/burger.png',
        description: 'Double beef patty, cheddar, spicy sauce.',
        tags: ['Spicy', 'Popular']
    },
    {
        id: 8,
        name: 'Naga Burger',
        price: 70,
        category: 'Burgers',
        img: '/burger.png',
        description: 'Double beef patty, cheddar, spicy sauce.',
        tags: ['Spicy', 'Popular']
    },
    {
        id: 9,
        name: 'Cheese Burger',
        price: 70,
        category: 'Burgers',
        img: '/burger.png',
        description: 'Double beef patty, cheddar, spicy sauce.',
        tags: ['Spicy', 'Popular']
    },
    {
        id: 10,
        name: 'Burger Pizza',
        price: 100,
        category: 'Burgers',
        img: '/burger.png',
        description: 'Double beef patty, cheddar, spicy sauce.',
        tags: ['Spicy', 'Popular']
    },
    {
        id: 11,
        name: 'Chicken Momos',
        price: 120,
        category: 'Momos',
        img: '/momos.png',
        description: 'Steamed dumplings served with spicy red chutney.',
        tags: ['Steamed', 'Spicy']
    },
    {
        id: 12,
        name: 'B-B-Q Momos',
        price: 120,
        category: 'Momos',
        img: '/momos.png',
        description: 'Steamed dumplings served with spicy red chutney.',
        tags: ['Steamed', 'Spicy']
    },
    {
        id: 13,
        name: 'Chicken Nuggets 3 pcs',
        price: 60,
        category: 'Chicken Nuggets',
        img: '/nuggets.png',
        description: '10 pcs golden fried nuggets with signature dip.',
        tags: ['Crispy']
    },
    {
        id: 14,
        name: 'Chicken Nuggets 5 pcs',
        price: 1000,
        category: 'Chicken Nuggets',
        img: '/nuggets.png',
        description: '10 pcs golden fried nuggets with signature dip.',
        tags: ['Crispy']
    },
    {
        id: 15,
        name: 'Meatballs 5 pcs',
        price: 40,
        category: 'Meatball',
        img: '/meatball.png',
        description: 'Juicy meatballs glazed in teriyaki sauce with sesame.',
        tags: ['Savory']
    },
    {
        id: 16,
        name: 'American Mix Chips',
        price: 90,
        category: 'Mix Chips',
        img: '/fries.png', // Reusing fries image for chips
        description: 'Crispy fries tossed with secret masala mix.',
        tags: ['Spicy']
    }
    // {
    //     id: 17,
    //     name: 'Electro Shake',
    //     price: 5.99,
    //     originalPrice: 6.99,
    //     category: 'Drinks',
    //     img: '/shake.png',
    //     description: 'Strawberry blend with whipped cream.',
    //     tags: ['Cold', 'Offer']
    // }
];

export default function Menu({ addToCart }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? FOOD_ITEMS
        : FOOD_ITEMS.filter(item => item.category === activeCategory);

    return (
        <section id="menu" className="py-24 bg-zinc-950/50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-black uppercase text-white mb-2">Our Menu</h2>
                        <p className="text-white font-normal">Curated specifically for your cravings.</p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-2 mt-6 md:mt-0 justify-start md:justify-end">
                        {CATEGORIES.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold uppercase transition-all whitespace-nowrap ${activeCategory === cat
                                    ? 'bg-orange-600 text-white'
                                    : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                key={item.id}
                                className="group bg-zinc-900/50 border border-white/5 rounded-3xl p-6 hover:border-orange-500/30 transition-colors"
                            >
                                <div className="h-48 mb-6 relative flex items-center justify-center">
                                    <motion.img
                                        whileHover={{ scale: 1.1, rotate: 2 }}
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full object-contain drop-shadow-xl"
                                    />
                                </div>

                                <div className="flex justify-between items-start mb-2">
                                    <div>
                                        <h3 className="text-xl font-bold text-white">{item.name}</h3>
                                        <p className="text-sm text-white font-normal line-clamp-2 mb-4 min-h-[2.5rem]">{item.description}</p>
                                    </div>
                                    <div className="flex flex-col items-end">
                                        {item.originalPrice && (
                                            <span className="text-zinc-500 line-through text-xs font-bold">৳{item.originalPrice}</span>
                                        )}
                                        <span className="text-orange-400 font-mono text-lg font-bold">৳{item.price}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-[10px] uppercase font-bold bg-white/5 text-zinc-400 px-2 py-1 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <button
                                        onClick={() => addToCart(item)}
                                        className="bg-white text-black p-3 rounded-full hover:bg-orange-500 hover:text-white transition-all transform active:scale-90"
                                    >
                                        <Plus size={20} />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
