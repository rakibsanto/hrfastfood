import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="HR Fast Food Logo" className="w-10 h-10 rounded-full" />
                            <h2 className="text-2xl font-black italic tracking-tighter">HR <span className="text-orange-500">FAST FOOD</span></h2>
                        </div>
                        <p className="text-zinc-400 max-w-sm">
                            <span className="text-white font-bold">It's A Live Kitchen.</span> Redefining the fast food experience with premium ingredients, cutting-edge flavors, and seamless digital ordering.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6">Explore</h4>
                        <ul className="space-y-4 text-zinc-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Menu</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Locations</li>
                            <li className="hover:text-white cursor-pointer transition-colors">About Us</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Careers</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold uppercase tracking-widest mb-6">Support</h4>
                        <ul className="space-y-4 text-zinc-400">
                            <li className="hover:text-white cursor-pointer transition-colors">Contact</li>
                            <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-600 text-sm">
                    <p>&copy; {new Date().getFullYear()} HR Fast Food. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        {/* Social Placeholders */}
                        <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer">FB</div>
                        <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer">IG</div>
                        <div className="w-8 h-8 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center hover:border-orange-500 hover:text-orange-500 transition-colors cursor-pointer">TW</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
