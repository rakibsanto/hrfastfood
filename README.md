# 🍔 HR FAST FOOD & CAFE - Premium Quick Bites

A modern, fast-loading, and responsive fast food ordering platform built with Next.js, Framer Motion, and Tailwind CSS. Featuring a seamless shopping experience and direct order integration.

![Project Preview](public/icon.png)

## ✨ Features

-   **🚀 High Performance**: Built with Next.js for lightning-fast page loads and SEO optimization.
-   **🎨 Premium UI/UX**: Stunning animations with Framer Motion and a sleek dark-themed design.
-   **🛒 Advanced Cart System**: Persistent shopping cart using local storage with real-time updates.
-   **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop viewing experiences.
-   **📤 Telegram Integration**: Automated order notifications sent directly to Telegram for quick processing.
-   **🗺️ Location Map**: Interactive footer featuring the restaurant's location.
-   **⚡ Live Search**: Quick menu filtering to find your favorite dishes instantly (in `Menu` component).

## 🛠️ Tech Stack

-   **Framework**: [Next.js](https://nextjs.org/) (App Router)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **Deployment**: [Netlify](https://www.netlify.com/)

## 🚀 Getting Started

### Prerequisites

-   Node.js 18.x or later
-   npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd fastfood
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add your Telegram credentials:
   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token
   TELEGRAM_CHAT_ID=your_chat_id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
├── app/
│   ├── api/            # Backend API routes (Telegram integration)
│   ├── components/     # Reusable UI components (Hero, Menu, Cart, etc.)
│   ├── globals.css     # Global styles and Tailwind imports
│   ├── layout.js       # Main application layout
│   └── page.js         # Homepage entry point
├── public/             # Static assets (images, icons)
├── tailwind.config.js  # Tailwind CSS configuration
├── package.json        # Project metadata and dependencies
└── netlify.toml        # Netlify deployment configuration
```

## 🌐 Deployment

This project is optimized for deployment on **Netlify**.

1. Connect your repository to Netlify.
2. Set the build command to `npm run build`.
3. Set the publish directory to `.next`.
4. Add your `.env` variables to the Netlify environment settings.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

Built with ❤️ by [Rakib Santo](https://github.com/rakibsanto)
