export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

// Add this new type for the cart
export interface CartItem extends Product {
  quantity: number;
}

// New: for authentication
export interface User {
  name: string;
  email: string;
}