import { ColoredClothing } from "./clothing-data";

export type CartItem = {
  clothing: ColoredClothing;
  size: string;
  quantity: number;
};

export function addToCart(item: CartItem) {
  const existingCartItems = JSON.parse(localStorage.getItem("cartItems") || "[]") as CartItem[];
  const existingCartItemIndex = existingCartItems.findIndex(
    (cartItem) => cartItem.clothing.id === item.clothing.id && cartItem.clothing.colorName === item.clothing.colorName
  );
  if (existingCartItemIndex !== -1) {
    existingCartItems[existingCartItemIndex].quantity += item.quantity;
  } else {
    existingCartItems.push(item);
  }
  localStorage.setItem("cartItems", JSON.stringify(existingCartItems));
}

export function getCartItems() {
  return JSON.parse(localStorage.getItem("cartItems") || "[]") as CartItem[];
}