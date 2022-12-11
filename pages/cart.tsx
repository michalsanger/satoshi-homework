import type { NextPage } from "next";
import { useContext } from "react";
import { CartContext } from "../components/cartContext";
import Layout from "../components/layout";
import OrderSummary from "../components/orderSummary";
import CartItem from "../components/cartItem";
import { products } from "../data/products";

const Cart: NextPage = () => {
  const { cart, removeItem, addItem } = useContext(CartContext);

  const productsInCart = products.filter((p) => cart.has(p.id));

  return (
    <Layout heading={`Shopping cart${productsInCart.length === 0 ? " is empty" : ""}`}>
      {productsInCart.length === 0 ? null : (
        <div className="bg-white">
          <div className="mx-auto max-w-4xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
            <form>
              <div>
                <h2 className="sr-only">Items in your shopping cart</h2>

                <ul
                  role="list"
                  className="divide-y divide-gray-200 border-t border-b border-gray-200"
                >
                  {productsInCart.map((product) => (
                    <CartItem
                      key={product.id}
                      onQuantityChange={addItem}
                      onRemove={removeItem}
                      product={product}
                      quantity={cart.get(product.id) ?? 1}
                    />
                  ))}
                </ul>
              </div>

              {productsInCart.length > 0 ? <OrderSummary products={products} cart={cart} /> : null}
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Cart;
