import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const CATEGORIES = [
    "All", "Pasta", "Soup", "Chicken Fry", "Momos", "Chaumin",
    "Fries & Nachos", "Fuchka & Velpuri", "Meat Box", "Burger",
    "Pizza", "Set Menu", "Mix Chips", "Milk Shake", "Drinks", "Coffee", "Tea & Others"
];

const FOOD_ITEMS = [
    // 1. Pasta
    {
        id: 1,
        name: 'Oven Bake Pasta',
        price: 100,
        category: 'Pasta',
        img: '/pasta.jpg',
        description: 'Baked pasta with cheese and tomato sauce.',
        tags: ['Hot', 'Popular']
    },
    {
        id: 2,
        name: 'Naga Pasta',
        price: 120,
        category: 'Pasta',
        img: '/pasta.jpg',
        description: 'Special pasta made with spicy naga chili.',
        tags: ['Spicy', 'Hot']
    },
    {
        id: 3,
        name: 'Fry Pan Pasta',
        price: 120,
        category: 'Pasta',
        img: '/pasta.jpg',
        description: 'Delicious pan-fried pasta.',
        tags: ['Hot', 'Crispy']
    },

    // 2. Soup
    {
        id: 4,
        name: 'Thai Soup [1:1]',
        price: 90,
        category: 'Soup',
        img: '/soup.jpg',
        description: 'Sweet and spicy soup made with authentic Thai spices.',
        tags: ['Hot', 'Thai']
    },
    {
        id: 5,
        name: 'Thai Soup [1:3]',
        price: 250,
        category: 'Soup',
        img: '/soup.jpg',
        description: 'Large serving Thai soup, perfect for family.',
        tags: ['Hot', 'Thai', 'Family']
    },
    {
        id: 6,
        name: 'Corn Soup',
        price: 80,
        category: 'Soup',
        img: '/soup.jpg',
        description: 'Creamy soup made with sweet corn.',
        tags: ['Hot', 'Creamy']
    },

    // 3. Chicken Fry
    {
        id: 7,
        name: 'Thai Chicken Fry',
        price: 120,
        category: 'Chicken Fry',
        img: '/chicken-fry.jpg',
        description: 'Crispy chicken marinated in Thai spices.',
        tags: ['Crispy', 'Thai']
    },
    {
        id: 8,
        name: 'Crispy Chicken Fry',
        price: 120,
        category: 'Chicken Fry',
        img: '/chicken-fry.jpg',
        description: 'Golden crispy fried chicken.',
        tags: ['Crispy', 'Popular']
    },
    {
        id: 9,
        name: 'Wings BBQ',
        price: 130,
        category: 'Chicken Fry',
        img: '/chicken-fry.jpg',
        description: 'Grilled chicken wings with BBQ sauce.',
        tags: ['BBQ', 'Smoky']
    },
    {
        id: 10,
        name: 'Naga Wings',
        price: 130,
        category: 'Chicken Fry',
        img: '/chicken-fry.jpg',
        description: 'Chicken wings marinated with spicy naga chili.',
        tags: ['Spicy', 'Naga']
    },
    {
        id: 11,
        name: 'Lollipop BBQ',
        price: 160,
        category: 'Chicken Fry',
        img: '/chicken-fry.jpg',
        description: 'BBQ glazed lollipop chicken.',
        tags: ['BBQ', 'Juicy']
    },
    {
        id: 12,
        name: 'Lollipop Naga',
        price: 160,
        category: 'Chicken Fry',
        img: '/chicken-fry.jpg',
        description: 'Spicy lollipop chicken with naga seasoning.',
        tags: ['Spicy', 'Hot']
    },

    // 4. Mix Chips
    {
        id: 13,
        name: 'Mix Chips',
        price: 100,
        category: 'Mix Chips',
        img: '/mix-chips.jpg',
        description: 'Mixed platter of assorted crispy chips.',
        tags: ['Crispy', 'Popular']
    },

    // 5. Momos (6 pcs)
    {
        id: 14,
        name: 'Steam Momos (6 pcs)',
        price: 120,
        category: 'Momos',
        img: '/momos1.jpg',
        description: 'Traditional steamed momos served with red chutney.',
        tags: ['Steamed', 'Healthy']
    },
    {
        id: 15,
        name: 'BBQ Momos (6 pcs)',
        price: 180,
        category: 'Momos',
        img: '/bbg-momos.avif',
        description: 'BBQ glazed special momos.',
        tags: ['BBQ', 'Smoky']
    },
    {
        id: 16,
        name: 'Fried Momos (6 pcs)',
        price: 140,
        category: 'Momos',
        img: '/momos.png',
        description: 'Deep fried crispy momos.',
        tags: ['Fried', 'Crispy']
    },

    // 6. Chaumin
    {
        id: 17,
        name: 'Chicken Chaumin',
        price: 120,
        category: 'Chaumin',
        img: '/chaumin.jpg',
        description: 'Chaumin made with chicken and vegetables.',
        tags: ['Popular', 'Savory']
    },
    {
        id: 18,
        name: 'Naga Chaumin',
        price: 150,
        category: 'Chaumin',
        img: '/chaumin.jpg',
        description: 'Spicy chaumin with naga chili flavor.',
        tags: ['Spicy', 'Naga']
    },
    {
        id: 19,
        name: 'Special Chaumin',
        price: 200,
        category: 'Chaumin',
        img: '/chaumin.jpg',
        description: 'Special chaumin with chicken, vegetables and unique spices.',
        tags: ['Special', 'Best Seller']
    },

    // 7. French Fries
    {
        id: 20,
        name: 'French Fry',
        price: 80,
        category: 'Fries & Nachos',
        img: '/fries.png',
        description: 'Golden crispy french fries.',
        tags: ['Crispy', 'Classic']
    },

    // 8. Nachos
    {
        id: 21,
        name: 'Nachos Mini',
        price: 120,
        category: 'Fries & Nachos',
        img: '/nachos.jpg',
        description: 'Mini nachos served with cheese sauce and jalapenos.',
        tags: ['Crispy', 'Cheesy']
    },
    {
        id: 22,
        name: 'Nachos Special',
        price: 160,
        category: 'Fries & Nachos',
        img: '/nachos.jpg',
        description: 'Special nachos platter with all toppings.',
        tags: ['Special', 'Loaded']
    },

    // 9. Fuchka & Velpuri
    {
        id: 23,
        name: 'Fuchka',
        price: 40,
        category: 'Fuchka & Velpuri',
        img: '/fuchka.jpg',
        description: 'Traditional Bangladeshi fuchka with tamarind water.',
        tags: ['Street Food', 'Tangy']
    },
    {
        id: 24,
        name: 'Velpuri',
        price: 40,
        category: 'Fuchka & Velpuri',
        img: '/fuchka.jpg',
        description: 'Puffed rice, chanachur and chutney mix.',
        tags: ['Street Food', 'Tangy']
    },

    // Meat Box
    {
        id: 25,
        name: 'Regular Meat Box',
        price: 90,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Meat box with fries, chicken and sauce.',
        tags: ['Heavy', 'Popular']
    },
    {
        id: 26,
        name: 'Cheese Meat Box',
        price: 120,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Special meat box with melted cheese.',
        tags: ['Cheesy', 'Heavy']
    },
    {
        id: 27,
        name: 'Naga Meat Box',
        price: 120,
        category: 'Meat Box',
        img: '/meatbox.png',
        description: 'Spicy naga chili meat box.',
        tags: ['Spicy', 'Naga']
    },

    // Burger
    {
        id: 28,
        name: 'Regular Burger',
        price: 50,
        category: 'Burger',
        img: '/mini.jpg',
        description: 'Classic chicken patty burger.',
        tags: ['Classic', 'Popular']
    },
    {
        id: 29,
        name: 'Cheese Burger',
        price: 80,
        category: 'Burger',
        img: '/chease.jpg',
        description: 'Burger with cheese and special sauce.',
        tags: ['Cheesy', 'Popular']
    },
    {
        id: 30,
        name: 'Special Double Patty Cheese',
        price: 160,
        category: 'Burger',
        img: '/burger.png',
        description: 'Premium burger with double chicken patty and melted cheese.',
        tags: ['Double', 'Best Seller']
    },

    // Pizza - Naga
    {
        id: 31,
        name: 'Naga Pizza (8")',
        price: 280,
        category: 'Pizza',
        img: '/naga-pizza.jpg',
        description: 'Pizza with spicy naga chili toppings.',
        tags: ['Spicy', 'Naga']
    },
    {
        id: 32,
        name: 'Naga Pizza (10")',
        price: 380,
        category: 'Pizza',
        img: '/naga-pizza.jpg',
        description: 'Medium pizza with spicy naga chili toppings.',
        tags: ['Spicy', 'Naga']
    },
    {
        id: 33,
        name: 'Naga Pizza (12")',
        price: 880,
        category: 'Pizza',
        img: '/naga-pizza.jpg',
        description: 'Large pizza with spicy naga chili toppings.',
        tags: ['Spicy', 'Large']
    },
    // BBQ Pizza
    {
        id: 34,
        name: 'BBQ Pizza (8")',
        price: 280,
        category: 'Pizza',
        img: '/bbq-pizza.jpg',
        description: 'Pizza made with smoky BBQ sauce.',
        tags: ['BBQ', 'Smoky']
    },
    {
        id: 35,
        name: 'BBQ Pizza (10")',
        price: 380,
        category: 'Pizza',
        img: '/bbq-pizza.jpg',
        description: 'Medium pizza with smoky BBQ sauce.',
        tags: ['BBQ', 'Smoky']
    },
    {
        id: 36,
        name: 'BBQ Pizza (12")',
        price: 880,
        category: 'Pizza',
        img: '/bbq-pizza.jpg',
        description: 'Large pizza with smoky BBQ sauce.',
        tags: ['BBQ', 'Large']
    },
    // Sausage Pizza
    {
        id: 37,
        name: 'Sausage Pizza (8")',
        price: 300,
        category: 'Pizza',
        img: '/sausage-pizza.jpg',
        description: 'Special pizza with sausage toppings.',
        tags: ['Sausage', 'Savory']
    },
    {
        id: 38,
        name: 'Sausage Pizza (10")',
        price: 400,
        category: 'Pizza',
        img: '/sausage-pizza.jpg',
        description: 'Medium pizza with sausage toppings.',
        tags: ['Sausage', 'Savory']
    },
    {
        id: 39,
        name: 'Sausage Pizza (12")',
        price: 500,
        category: 'Pizza',
        img: '/sausage-pizza.jpg',
        description: 'Large pizza with sausage toppings.',
        tags: ['Sausage', 'Large']
    },
    // Four Season Pizza
    {
        id: 40,
        name: 'Four Season Pizza (8")',
        price: 280,
        category: 'Pizza',
        img: '/four-season-pizza.jpg',
        description: 'Classic pizza with four different toppings.',
        tags: ['Classic', 'Four Season']
    },
    {
        id: 41,
        name: 'Four Season Pizza (10")',
        price: 380,
        category: 'Pizza',
        img: '/four-season-pizza.jpg',
        description: 'Medium pizza with four different toppings.',
        tags: ['Classic', 'Four Season']
    },
    {
        id: 42,
        name: 'Four Season Pizza (12")',
        price: 480,
        category: 'Pizza',
        img: '/four-season-pizza.jpg',
        description: 'Large pizza with four different toppings.',
        tags: ['Classic', 'Large']
    },
    // Cheese Lover Special
    {
        id: 43,
        name: 'Cheese Lover Pizza Special (8")',
        price: 320,
        category: 'Pizza',
        img: '/cheese-pizza.jpg',
        description: 'Special pizza with extra cheese for cheese lovers.',
        tags: ['Cheesy', 'Special']
    },
    {
        id: 44,
        name: 'Cheese Lover Pizza Special (10")',
        price: 420,
        category: 'Pizza',
        img: '/cheese-pizza.jpg',
        description: 'Medium extra cheese pizza for cheese lovers.',
        tags: ['Cheesy', 'Special']
    },
    {
        id: 45,
        name: 'Cheese Lover Pizza Special (12")',
        price: 520,
        category: 'Pizza',
        img: '/cheese-pizza.jpg',
        description: 'Large extra cheese pizza for cheese lovers.',
        tags: ['Cheesy', 'Large']
    },
    // Chicken Pizza
    {
        id: 46,
        name: 'Chicken Pizza (8")',
        price: 220,
        category: 'Pizza',
        img: '/chicken-pizza.jpg',
        description: 'Classic pizza with chicken toppings.',
        tags: ['Chicken', 'Classic']
    },
    {
        id: 47,
        name: 'Chicken Pizza (10")',
        price: 320,
        category: 'Pizza',
        img: '/chicken-pizza.jpg',
        description: 'Medium pizza with chicken toppings.',
        tags: ['Chicken', 'Popular']
    },
    {
        id: 48,
        name: 'Chicken Pizza (12")',
        price: 420,
        category: 'Pizza',
        img: '/chicken-pizza.jpg',
        description: 'Large pizza with chicken toppings.',
        tags: ['Chicken', 'Large']
    },

    // Set Menu
    {
        id: 49,
        name: 'Set Menu 11',
        price: 140,
        category: 'Set Menu',
        img: '/set-menu.jpg',
        description: 'Fried Rice + Vegetable + Chicken Fry 1 pcs.',
        tags: ['Combo', 'Value']
    },
    {
        id: 50,
        name: 'Set Menu 12',
        price: 150,
        category: 'Set Menu',
        img: '/set-menu.jpg',
        description: 'Fried Rice + Vegetable + BBQ Chicken 1 pcs.',
        tags: ['Combo', 'Value']
    },
    {
        id: 51,
        name: 'Set Menu 13',
        price: 160,
        category: 'Set Menu',
        img: '/set-menu.jpg',
        description: 'Fried Rice + Chicken Chili Onion + Chicken BBQ Wings 3 pcs.',
        tags: ['Combo', 'Best Seller']
    },
    {
        id: 52,
        name: 'Extra Rice',
        price: 60,
        category: 'Set Menu',
        img: '/set-menu.jpg',
        description: 'Extra rice with set menu.',
        tags: ['Add-on']
    },

    // Cashew Nut Salad
    {
        id: 53,
        name: 'Cashew Nut Salad',
        price: 200,
        category: 'Tea & Others',
        img: '/cashew-salad.jpg',
        description: 'Fresh salad with roasted cashew nuts and vegetables.',
        tags: ['Healthy', 'Fresh']
    },

    // Milk Shake
    {
        id: 54,
        name: 'Vanilla Mix Shake',
        price: 130,
        category: 'Milk Shake',
        img: '/milkshake.jpg',
        description: 'Creamy vanilla milkshake.',
        tags: ['Cold', 'Sweet']
    },
    {
        id: 55,
        name: 'Chocolate Mix Shake',
        price: 130,
        category: 'Milk Shake',
        img: '/milkshake.jpg',
        description: 'Rich chocolate milkshake.',
        tags: ['Cold', 'Chocolate']
    },
    {
        id: 56,
        name: 'Strawberry Mix Shake',
        price: 130,
        category: 'Milk Shake',
        img: '/milkshake.jpg',
        description: 'Fresh strawberry milkshake.',
        tags: ['Cold', 'Fruity']
    },
    {
        id: 57,
        name: 'Mango Mix Shake',
        price: 130,
        category: 'Milk Shake',
        img: '/milkshake.jpg',
        description: 'Milkshake made with real mango.',
        tags: ['Cold', 'Mango']
    },
    {
        id: 58,
        name: 'KitKat Mix Shake',
        price: 150,
        category: 'Milk Shake',
        img: '/milkshake.jpg',
        description: 'Premium shake made with KitKat and chocolate.',
        tags: ['Cold', 'Special']
    },
    {
        id: 59,
        name: 'Faluda Mix',
        price: 180,
        category: 'Milk Shake',
        img: '/milkshake.jpg',
        description: 'Faluda made with rose syrup, basil seeds and vermicelli.',
        tags: ['Cold', 'Traditional']
    },
    {
        id: 60,
        name: 'Lassi',
        price: 100,
        category: 'Milk Shake',
        img: '/milkshake.jpg',
        description: 'Cold lassi made from fresh yogurt.',
        tags: ['Cold', 'Refreshing']
    },

    // Drinks
    {
        id: 61,
        name: 'Mint Lemon',
        price: 60,
        category: 'Drinks',
        img: '/drinks.jpg',
        description: 'Refreshing drink made with mint and lemon.',
        tags: ['Cold', 'Refreshing']
    },
    {
        id: 62,
        name: 'Lemonet',
        price: 40,
        category: 'Drinks',
        img: '/drinks.jpg',
        description: 'Fresh lemon juice.',
        tags: ['Cold', 'Classic']
    },

    // Coffee
    {
        id: 63,
        name: 'Hot Coffee',
        price: 80,
        category: 'Coffee',
        img: '/coffee.jpg',
        description: 'Hot latte art coffee.',
        tags: ['Hot', 'Classic']
    },
    {
        id: 64,
        name: 'Black Coffee',
        price: 50,
        category: 'Coffee',
        img: '/coffee.jpg',
        description: 'Strong black espresso coffee.',
        tags: ['Hot', 'Strong']
    },
    {
        id: 65,
        name: 'Cold Coffee',
        price: 100,
        category: 'Coffee',
        img: '/coffee.jpg',
        description: 'Iced cold coffee.',
        tags: ['Cold', 'Refreshing']
    },
    {
        id: 66,
        name: 'Chocolate Cold Coffee',
        price: 120,
        category: 'Coffee',
        img: '/coffee.jpg',
        description: 'Cold coffee with chocolate syrup.',
        tags: ['Cold', 'Chocolate']
    },

    // Tea
    {
        id: 67,
        name: 'Milk Tea',
        price: 30,
        category: 'Tea & Others',
        img: '/tea.jpg',
        description: 'Traditional Bangladeshi milk tea.',
        tags: ['Hot', 'Classic']
    },
    {
        id: 68,
        name: 'Malai Cha',
        price: 40,
        category: 'Tea & Others',
        img: '/tea.jpg',
        description: 'Special tea made with creamy malai.',
        tags: ['Hot', 'Creamy']
    },
    {
        id: 69,
        name: 'Malai Ruti',
        price: 70,
        category: 'Tea & Others',
        img: '/tea.jpg',
        description: 'Bread served with malai cream.',
        tags: ['Hot', 'Special']
    },
    {
        id: 70,
        name: 'Malai Ruti Special',
        price: 100,
        category: 'Tea & Others',
        img: '/tea.jpg',
        description: 'Special bread with extra malai and nuts.',
        tags: ['Hot', 'Premium']
    },
    {
        id: 71,
        name: 'Milk Danish',
        price: 100,
        category: 'Tea & Others',
        img: '/tea.jpg',
        description: 'Sweet milk and danish pastry combo.',
        tags: ['Sweet', 'Special']
    },
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
                                className="group bg-zinc-900 border border-white/5 rounded-3xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 hover:shadow-[0_0_32px_0_rgba(251,146,60,0.12)]"
                            >
                                {/* Image — fills full card width at 4:3 ratio */}
                                <div className="relative w-full aspect-[4/3] overflow-hidden">
                                    <motion.img
                                        whileHover={{ scale: 1.08 }}
                                        transition={{ duration: 0.4, ease: 'easeOut' }}
                                        src={item.img}
                                        alt={item.name}
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    {/* Bottom fade overlay */}
                                    <div className="absolute inset-0 pointer-events-none"
                                        style={{ background: 'linear-gradient(to top, rgba(24,24,27,0.92) 0%, rgba(24,24,27,0.25) 45%, transparent 100%)' }}
                                    />
                                    {/* Top gloss */}
                                    <div className="absolute inset-0 pointer-events-none"
                                        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 50%)' }}
                                    />
                                    {/* Tags on image */}
                                    <div className="absolute bottom-3 left-3 flex gap-1.5 flex-wrap z-10">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="text-[9px] uppercase font-bold bg-black/60 backdrop-blur-sm text-orange-300 px-2 py-0.5 rounded-full border border-orange-500/20">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex-1 pr-2">
                                            <h3 className="text-base font-bold text-white leading-tight">{item.name}</h3>
                                            <p className="text-xs text-zinc-400 line-clamp-2 mt-1 min-h-[2rem]">{item.description}</p>
                                        </div>
                                        <div className="flex flex-col items-end flex-shrink-0">
                                            {item.originalPrice && (
                                                <span className="text-zinc-500 line-through text-xs">৳{item.originalPrice}</span>
                                            )}
                                            <span className="text-orange-400 font-mono text-lg font-bold">৳{item.price}</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button
                                            onClick={() => addToCart(item)}
                                            className="bg-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold hover:bg-orange-400 transition-all active:scale-90 flex items-center gap-1.5"
                                        >
                                            <Plus size={14} />
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
