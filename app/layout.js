import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'HR FAST FOOD | Best Burgers, Fries & Shakes',
    description: 'Looking for the best fast food? HR FAST FOOD offers precision-grilled smash burgers, artisanal shakes, and gravity-defying fries. Visit HR FAST FOOD today!',
    keywords: ['HR FAST FOOD', 'hr fast food menu', 'best fast food', 'smash burgers', 'artisanal shakes', 'fast food restaurant'],
    authors: [{ name: 'HR FAST FOOD' }],
    creator: 'HR FAST FOOD',
    publisher: 'HR FAST FOOD',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: 'HR FAST FOOD | Best Burgers & Fast Food',
        description: 'Taste the best fast food at HR FAST FOOD! Precision-grilled smash burgers, artisanal shakes, and gravity-defying fries await you.',
        url: 'https://hrfastfood.netlify.app',
        siteName: 'HR FAST FOOD',
        images: [
            {
                url: '/icon.png',
                width: 800,
                height: 600,
                alt: 'HR FAST FOOD Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'HR FAST FOOD | Best Fast Food Experience',
        description: 'Experience HR FAST FOOD! Premium quality smash burgers, loaded fries, and more.',
        images: ['/icon.png'],
    },
    icons: {
        icon: [
            { url: '/favicon.ico' },
            { url: '/icon.png', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-icon.png' },
        ],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    )
}
