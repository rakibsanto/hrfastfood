import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-zinc-950 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo.png" alt="HR Fast Food Logo" className="w-10 h-10 rounded-full" />
                            <div className="flex flex-col">
                                <h2 className="text-2xl font-black italic tracking-tighter leading-none">HR <span className="text-orange-500">FAST FOOD</span></h2>
                                <span className="text-[10px] uppercase font-bold text-white tracking-[0.2em]">It's A Live Kitchen</span>
                            </div>
                        </div>
                        <p className="text-zinc-400 max-w-sm">
                            <span className="text-white font-bold block mb-1">Location: বড় ব্রিজ সংলগ্ন (একতা মাইকের বিপরীতে )</span>
                            <span className="text-white font-bold">Phone: 01745-933455</span>
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2 h-[300px] rounded-2xl overflow-hidden border border-white/10 mt-0">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.8967520421253!2d89.23536531109968!3d24.007987878168275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b0071ebbf13%3A0x12d7c4f1729555d2!2sHR%20Fast%20Food!5e0!3m2!1sen!2sbd!4v1735544615234!5m2!1sen!2sbd"
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
