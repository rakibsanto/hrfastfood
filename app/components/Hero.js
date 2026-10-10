import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HERO_IMAGES = [
    { src: '/pasta.jpg', alt: 'Pasta' },
    { src: '/soup.jpg', alt: 'Soup' },
    { src: '/crispy-chicken-fry.jpg', alt: 'Chicken Fry' },
    { src: '/momos.png', alt: 'Momos' },
    { src: '/chicken-chaumin.jpg', alt: 'Chau Mein' },
    { src: '/fries.png', alt: 'Fries & Nachos' },
    { src: '/fuchka.jpg', alt: 'Fuchka & Velpuri' },
    { src: '/meatbox.png', alt: 'Meat Box' },
    { src: '/burger.png', alt: 'Burger' },
    { src: '/chicken-pizza.jpg', alt: 'Pizza' },
    { src: '/set-menu.jpg', alt: 'Set Menu' },
    { src: '/mix-chips.jpg', alt: 'Mix Chips' },
    { src: '/chocolate-shake.jpg', alt: 'Milk Shake' },
    { src: '/lemonet.jpg', alt: 'Drinks' },
    { src: '/cold-coffee.png', alt: 'Coffee' },
    { src: '/milk-tea.png', alt: 'Tea & Others' }
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    const getPosition = (index) => {
        if (index === currentImage) return 'center';
        if (index === (currentImage + 1) % HERO_IMAGES.length) return 'right';
        if (index === (currentImage - 1 + HERO_IMAGES.length) % HERO_IMAGES.length) return 'left';
        return 'hidden';
    };

    const variants = {
        center: { x: '0%', scale: 1, zIndex: 20, opacity: 1, filter: 'blur(0px)' },
        left: { x: '-60%', scale: 0.6, zIndex: 10, opacity: 0.6, filter: 'blur(2px)' },
        right: { x: '60%', scale: 0.6, zIndex: 10, opacity: 0.6, filter: 'blur(2px)' },
        hidden: { x: '0%', scale: 0.2, zIndex: 1, opacity: 0, filter: 'blur(10px)' },
    };

    return (
        <section className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-32 md:pt-20">
            {/* Background Gradient/Effects */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-black z-0 pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-block px-4 py-1 mb-6 border border-orange-500/30 rounded-full bg-orange-500/10"
                    >
                        <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">The Future of Fast Food</span>
                    </motion.div>
                    <h2 className="text-5xl md:text-7xl font-black mb-6 uppercase leading-tight">
                        It's A <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">Live Kitchen</span>
                    </h2>
                    <p className="text-white text-lg mb-8 max-w-md font-normal leading-relaxed">
                        Welcome to <strong>HR FAST FOOD & CAFE</strong>! Enjoy precision-grilled smash burgers, artisanal shakes, and gravity-defying fries. Experience the best fast food in town.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-500 transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)]"
                        onClick={() => document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })}
                    >
                        SEE MENU LIST
                    </motion.button>
                </motion.div>

                <div className="relative h-[400px] md:h-[500px] w-full flex items-center justify-center perspective-[1000px]">
                    {/* Glowing effect behind the burger */}
                    <div className="absolute inset-0 bg-orange-500/20 blur-[100px] rounded-full" />

                    {HERO_IMAGES.map((img, index) => (
                        <motion.div
                            key={index}
                            className="absolute w-[80%] h-[80%] drop-shadow-2xl rounded-[2rem] overflow-hidden"
                            initial="hidden"
                            animate={getPosition(index)}
                            variants={variants}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                fill
                                style={{ objectFit: 'cover' }}
                                quality={70}
                                priority={index === 0}
                            />
                        </motion.div>
                    ))}


                </div>
            </div>
        </section>
    );
}
