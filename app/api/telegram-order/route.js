import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
    try {
        const { cart, total, customer } = await req.json();

        const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
        const CHAT_ID = process.env.TELEGRAM_CHAT_ID;

        if (!BOT_TOKEN) {
            return NextResponse.json({ success: false, message: "Missing TELEGRAM_BOT_TOKEN on server." }, { status: 500 });
        }
        if (!CHAT_ID || CHAT_ID.includes('your_chat_id')) {
            return NextResponse.json({ success: false, message: "Missing TELEGRAM_CHAT_ID on server." }, { status: 500 });
        }

        // Sequential Order Number Logic
        const counterFile = path.join(process.cwd(), 'order-count.txt');
        let count = 0;
        let isServerless = false;

        try {
            if (fs.existsSync(counterFile)) {
                count = parseInt(fs.readFileSync(counterFile, 'utf8')) || 0;
            } else {
                // If we can't write to files (like on Netlify), use a timestamp-based ID
                isServerless = true;
            }
        } catch (e) {
            isServerless = true;
        }

        count++;

        if (!isServerless) {
            try {
                fs.writeFileSync(counterFile, count.toString());
            } catch (e) { isServerless = true; }
        }

        const orderNumber = isServerless
            ? `HR-T${Date.now().toString().slice(-5)}`
            : `HR-${count.toString().padStart(4, '0')}`;

        const itemsList = cart.map((i, idx) => {
            const qty = i.quantity || 1;
            const subtotal = (i.price * qty).toFixed(2);
            return `${idx + 1}. ${i.name} (x${qty}) - ৳${subtotal}`;
        }).join("\n");

        const message = `📋 *ORDER #${orderNumber}*
🍔 *NEW WEB ORDER*

👤 *Customer Details:*
Name: ${customer.name}
Phone: ${customer.phone}
Address: ${customer.address}

🛒 *Order:*
${itemsList}

💰 *Total: ৳${total}*

_Sent via HR Fast Food Web_`;

        const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;

        const res = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text: message,
                parse_mode: 'Markdown'
            })
        }).catch(err => {
            console.error("Fetch implementation error:", err);
            throw new Error(`Connection to Telegram failed: ${err.message}`);
        });

        const data = await res.json();

        if (!data.ok) {
            console.error("Telegram API response error:", data);
            throw new Error(data.description || "Telegram API Error");
        }

        return NextResponse.json({
            success: true,
            message: "Order Sent Successfully!",
            orderNumber: orderNumber
        });

    } catch (error) {
        console.error("Order process error:", error);
        return NextResponse.json({ success: false, message: error.message }, { status: 500 });
    }
}
