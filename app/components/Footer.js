import React from 'react';
import { Facebook } from 'lucide-react';
import Image from 'next/image';

const WhatsappIcon = ({ size = 16, className = "" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M16.5 15.25c-.24.7-.97 1.15-1.7 1.15-1.12 0-3.32-1.54-5.32-3.54S6 8.66 6 7.54c0-.73.45-1.46 1.15-1.7l1.04-.37c.36-.13.78-.06 1.05.21l1.41 1.41c.23.23.32.55.24.86l-.27.81c-.13.4.03.85.39 1.09l2 1.33c.33.22.77.21 1.08-.03l.63-.5c.29-.23.68-.28 1.02-.13l1.52.68c.32.14.53.47.47.81l-.33 1.29z" />
    </svg>
);

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <Image src="/logo.png" alt="HR Fast Food & Cafe Logo" width={40} height={40} className="rounded-full" />
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-black italic tracking-tighter leading-none">HR <span className="text-orange-500">FAST FOOD & CAFE</span></h2>
                                <span className="text-[10px] uppercase font-bold text-white tracking-[0.2em]">It's A Live Kitchen</span>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex gap-3 text-sm">
                                <span className="text-orange-500 font-bold uppercase tracking-wider min-w-[80px]">Location:</span>
                                <a href="https://maps.app.goo.gl/gSmtMhiBbd6LKU1y6" target="_blank" rel="noopener noreferrer" className="text-zinc-490 hover:text-orange-500 transition-colors">Vejaler Mor, Rothghor Road (Beside Edward College Dormitory Building)</a>
                            </div>
                            <div className="flex gap-3 text-sm">
                                <span className="text-orange-500 font-bold uppercase tracking-wider min-w-[80px]">Phone:</span>
                                <a href="tel:01745933455" className="text-zinc-490 hover:text-orange-500 transition-colors">01745-933455</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-2 h-[300px] rounded-2xl overflow-hidden border border-white/10 mt-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.576820709481!2d89.2361416265336!3d24.010716228493827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b0056cd9a7b%3A0xd76e33ec1429bf3e!2sHR%20FAST%20FOOD%20%26%20CAFE!5e0!3m2!1sbn!2sbd!4v1789724412834!5m2!1sbn!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full border-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} HR Fast Food & Cafe. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="https://www.facebook.com/HRfastfoodandcafe" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:border-[#1877F2] hover:text-[#1877F2] transition-colors cursor-pointer text-zinc-400" title="Follow us on Facebook">
                            <Facebook size={16} />
                        </a>
                        <a href="https://wa.me/8801745933455" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:border-green-500 hover:text-green-500 transition-colors cursor-pointer text-zinc-400" title="Chat on WhatsApp">
                            <WhatsappIcon size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
