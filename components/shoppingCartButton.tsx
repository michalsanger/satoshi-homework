import Link from "next/link";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

type Props = {
  showAlert?: boolean;
};

export default function ShoppingCartButton({ showAlert = false }: Props) {
  return (
    <span className="relative inline-block">
      <Link href="/cart" passHref data-testid="shopping-cart">
        <button
          type="button"
          className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="sr-only">Shopping cart</span>
          <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </Link>
      {showAlert ? (
        <span
          className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white"
          data-testid="shopping-cart-notification"
        />
      ) : null}
    </span>
  );
}
