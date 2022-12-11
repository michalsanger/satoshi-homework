import { Product } from "../data/products";
import { Cart } from "../components/cartContext";

type Props = {
  products: Product[];
  cart: Cart;
};

const shipping = 5;
const taxRate = 0.1;

export default function OrderSummary({ products, cart }: Props) {
  const subtotal = products.reduce((sum, product) => {
    const quantity = cart.get(product.id);
    return quantity === undefined ? sum : sum + product.price * quantity;
  }, 0);

  const tax = (subtotal + shipping) * taxRate;

  return (
    <div className="mt-10 sm:ml-32 sm:pl-6">
      <div className="rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8">
        <h2 className="sr-only">Order summary</h2>

        <div className="flow-root">
          <dl className="-my-4 divide-y divide-gray-200 text-sm">
            <div className="flex items-center justify-between py-4">
              <dt className="text-gray-600">Subtotal</dt>
              <dd className="font-medium text-gray-900" data-testid="subtotal">
                ${subtotal}
              </dd>
            </div>
            <div className="flex items-center justify-between py-4">
              <dt className="text-gray-600">Shipping</dt>
              <dd className="font-medium text-gray-900">${shipping}</dd>
            </div>
            <div className="flex items-center justify-between py-4">
              <dt className="text-gray-600">Tax</dt>
              <dd className="font-medium text-gray-900">${tax}</dd>
            </div>
            <div className="flex items-center justify-between py-4">
              <dt className="text-base font-medium text-gray-900">Order total</dt>
              <dd className="text-base font-medium text-gray-900">${subtotal + shipping + tax}</dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="submit"
          className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
