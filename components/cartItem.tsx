import Image from "next/image";
import { FormEvent, MouseEvent } from "react";
import { Product } from "../data/products";
import { CartContextType } from "./cartContext";

type Props = {
  product: Product;
  quantity: number;
  onRemove: CartContextType["removeItem"];
  onQuantityChange: CartContextType["addItem"];
};

export default function CartItem({ product, quantity, onRemove, onQuantityChange }: Props) {
  const handleOnRemove = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onRemove(product.id);
  };

  const handleOnQuantityChange = (event: FormEvent<HTMLSelectElement>) => {
    event.preventDefault();
    const quantity = Number(event.currentTarget.value);
    onQuantityChange(product.id, quantity);
  };

  return (
    <li key={product.id} className="cart-item flex py-6 sm:py-10">
      <div className="flex-shrink-0">
        <Image
          src={product.imageSrc}
          alt={product.name}
          className="h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"
          width="96"
          height="96"
        />
      </div>

      <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div>
          <div className="flex justify-between sm:grid sm:grid-cols-2">
            <div className="pr-6">
              <h3 className="text-sm">
                <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                  {product.name}
                </a>
              </h3>
            </div>

            <p className="text-right text-sm font-medium text-gray-900">${product.price}</p>
          </div>

          <div className="mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block">
            <label htmlFor={`quantity-${product.id}`} className="sr-only">
              Quantity, {product.name}
            </label>
            <select
              onChange={handleOnQuantityChange}
              value={quantity}
              id={`quantity-${product.id}`}
              name={`quantity-${product.id}`}
              className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
              data-testid="quantity"
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
            </select>

            <button
              type="button"
              value={product.id}
              className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
              onClick={handleOnRemove}
            >
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
