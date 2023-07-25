import { ColoredClothing } from "./database";

const cartKeyName = "cartItems";

export type CartItem = {
  clothing: ColoredClothing;
  size: string;
  quantity: number;
};

export function addToCart(item: CartItem) {
  const cartItems = JSON.parse(localStorage.getItem(cartKeyName) || "[]") as CartItem[];
  const cartItemIndex = cartItems.findIndex(
    (cartItem) =>
      cartItem.clothing.id === item.clothing.id &&
      cartItem.clothing.colorName === item.clothing.colorName &&
      cartItem.size === item.size
  );
  if (cartItemIndex !== -1) {
    cartItems[cartItemIndex].quantity += item.quantity;
  } else {
    cartItems.push(item);
  }
  localStorage.setItem(cartKeyName, JSON.stringify(cartItems));
  return cartItems;
}

export function removeFromCart(item: CartItem) {
  const cartItems = JSON.parse(localStorage.getItem(cartKeyName) || "[]") as CartItem[];
  const cartItemIndex = cartItems.findIndex(
    (cartItem) =>
      cartItem.clothing.id === item.clothing.id &&
      cartItem.clothing.colorName === item.clothing.colorName &&
      cartItem.size === item.size
  );
  if (cartItemIndex !== -1) {
    cartItems.splice(cartItemIndex, 1);
  }
  localStorage.setItem(cartKeyName, JSON.stringify(cartItems));
  return cartItems;
}

export function getCartItems() {
  return JSON.parse(localStorage.getItem(cartKeyName) || "[]") as CartItem[];
}

export function clearCart() {
  localStorage.removeItem(cartKeyName);
}