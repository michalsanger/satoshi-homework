import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ShoppingCartButton from "./shoppingCartButton";
import { useContext } from "react";
import { CartContext } from "./cartContext";

export default function Navigation() {
  const { cart } = useContext(CartContext);
  return (
    <Disclosure as="nav" className="border-b border-gray-200 bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className="block h-8 w-auto" src="/logo.svg" alt="Trezor shop" />
                  </Link>
                </div>
                {open ? null : (
                  <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                    <Link
                      key="Products"
                      href="/products"
                      className={`${
                        true
                          ? "border-indigo-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                      aria-current={true ? "page" : undefined}
                    >
                      Products
                    </Link>
                  </div>
                )}
              </div>
              {open ? null : (
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                  <ShoppingCartButton showAlert={cart.size > 0} />
                </div>
              )}
              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button
                  data-testid="mobile-menu-button"
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-3">
              <Disclosure.Button
                key="Products"
                as="a"
                href="/products"
                className={`
                            ${
                              true
                                ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                                : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800"
                            }
                            block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                aria-current={true ? "page" : undefined}
              >
                Products
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 pt-4 pb-3">
              <div className="flex items-center px-4">
                <ShoppingCartButton showAlert={cart.size > 0} />
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
