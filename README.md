# Project Description

This project is a handmade goods ecommerce platform aimed at providing users with an easy way to buy unique handcrafted items.

# Tech Stack

| Technology          | Version     |
|---------------------|-------------|
| React               | 17.0.2     |
| Tailwind CSS        | 2.2.19      |
| Node.js             | 14.18.1    |
| Express             | 4.17.1     |
| MongoDB             | 4.4.6      |
| Redux               | 4.1.1      |

# Project Structure

Manolya-Handmade/
├── manolya-handmade/                 # Main application directory
│   ├── src/
│   │   ├── components/               # Reusable React components
│   │   │   ├── Navbar.tsx           # Navigation bar component
│   │   │   ├── Footer.tsx           # Footer component
│   │   │   ├── CartDrawer.tsx       # Shopping cart drawer
│   │   │   └── ...                  # Other components
│   │   ├── pages/                    # Page components (full page views)
│   │   │   ├── Home.tsx             # Home page
│   │   │   ├── Shop.tsx             # Products shop page
│   │   │   ├── ProductDetail.tsx    # Single product detail page
│   │   │   ├── About.tsx            # About us page
│   │   │   ├── Contact.tsx          # Contact page
│   │   │   ├── Login.tsx            # Login page
│   │   │   ├── Register.tsx         # Registration page
│   │   │   ├── Checkout.tsx         # Checkout page
│   │   │   ├── Favourites.tsx       # Favorites/wishlist page
│   │   │   └── ...                  # Other pages
│   │   ├── types/                    # TypeScript type definitions
│   │   │   └── index.ts             # Type definitions (Product, User, CartItem, etc.)
│   │   ├── App.tsx                   # Main application component with routing
│   │   ├── main.tsx                  # Application entry point
│   │   └── index.css                 # Global styles and Tailwind imports
│   ├── public/                       # Static assets
│   │   └── favicon.svg              # Website favicon
│   ├── index.html                    # HTML entry point
│   ├── package.json                  # Project dependencies and scripts
│   ├── package-lock.json             # Locked dependency versions
│   ├── vite.config.ts                # Vite build configuration
│   ├── tsconfig.json                 # TypeScript configuration
│   ├── tsconfig.app.json             # TypeScript config for application code
│   ├── tsconfig.node.json            # TypeScript config for build files
│   ├── tailwind.config.js            # Tailwind CSS configuration
│   ├── postcss.config.js             # PostCSS configuration
│   ├── eslint.config.js              # ESLint configuration
│   └── README.md                     # Component/setup documentation
├── .gitignore                        # Git ignore rules
└── README.md                         # Main project documentation

Styling & Design
The project uses Tailwind CSS for styling, allowing for rapid UI development. The color palette is designed to create a warm and inviting atmosphere, consisting of earthy tones. The design is fully responsive, ensuring a seamless experience on both desktop and mobile devices.

Core Features Explained
Shopping Cart System
Users can add items to their cart, view their cart, and proceed to checkout with a smooth user interface.
User Authentication
A secure authentication system is implemented, allowing users to register, login, and manage their accounts.
Favorites/Wishlist System
Users can save their favorite items to a wishlist for future reference.
Multi-page Navigation
The application provides intuitive navigation across different pages, enhancing user experience throughout their shopping journey.
