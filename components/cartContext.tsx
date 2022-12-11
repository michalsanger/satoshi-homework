import { useState, createContext, ReactNode } from "react";

export type Cart = Map<number, number>; // key - item ID, value - quantity

type CartContextType = {
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
  const [cart, setCart] = useState<Cart>(new Map());

  const addItem: CartContextType["addItem"] = (id, quantity) => {
    cart.set(id, quantity ?? 1);
    setCart(new Map(cart.entries()));
  };

  const removeItem: CartContextType["removeItem"] = (id) => {
    cart.delete(id);
    setCart(new Map(cart.entries()));
  };

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem }}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
