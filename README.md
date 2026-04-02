# Manolya Handmade

Manolya Handmade is a frontend e-commerce project for showcasing and purchasing handmade beaded jewelry.  
It is built as a responsive single-page application using React, TypeScript, Vite, and Tailwind CSS.

## Project Scope

This repository currently contains the **frontend application only** (no backend API or database integration).
Product and user-related data are handled on the client side, with local persistence via `localStorage` for selected features.

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- React Router
- ESLint

## Key Features

- Multi-page storefront experience (Home, Shop, Product Detail, About, Contact)
- Product listing with category filtering
- Product detail view
- Shopping cart drawer with quantity updates and item removal
- Favourites (wishlist) with persistent state in `localStorage`
- Client-side register/login flow using `localStorage`
- Checkout page with login protection and order summary
- Responsive navigation for desktop and mobile

## Repository Structure

```text
Manolya-Handmade/
├── README.md
└── manolya-handmade/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── assets/
    │   ├── data.ts
    │   ├── types.ts
    │   ├── App.tsx
    │   └── main.tsx
    ├── public/
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.js
    ├── postcss.config.js
    └── eslint.config.js
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm

### Install

```bash
cd manolya-handmade
npm install
```

### Run in Development

```bash
npm run dev
```

### Lint

```bash
npm run lint
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Notes

- Authentication and registration are demo-level and stored in browser `localStorage`.
- Checkout currently demonstrates client-side flow and UI only.
