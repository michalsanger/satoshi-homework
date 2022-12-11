import { useState, createContext, ReactNode, useEffect } from "react";

export type Cart = Map<number, number>; // key - item ID, value - quantity

export type CartContextType = {
  cart: Cart;
  addItem: (id: number, quantity?: number) => void;
  removeItem: (id: number) => void;
};

type CartProviderProps = {
  children: ReactNode;
  initialValue?: Cart;
};

export const CartContext = createContext<CartContextType>({
  cart: new Map(),
  addItem: () => {},
  removeItem: () => {},
});

const CartProvider = ({ children }: CartProviderProps) => {
  const initialState = new Map();
  const [cart, setCart] = useState<Cart>(initialState);

  const addItem: CartContextType["addItem"] = (id, quantity) => {
    cart.set(id, quantity ?? 1);
    setCart(new Map(cart.entries()));
  };

  const removeItem: CartContextType["removeItem"] = (id) => {
    cart.delete(id);
    setCart(new Map(cart.entries()));
  };

  useEffect(() => {
    try {
      const cart = new Map<number, number>(JSON.parse(localStorage.getItem("cart") ?? "[]"));
      setCart(cart);
    } catch (e) {
      console.log(`Stored cart is corrupted`);
    }
  }, []);
  useEffect(() => {
    if (cart !== initialState) {
      localStorage.setItem("cart", JSON.stringify(Array.from(cart.entries())));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
