import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";

const Product: NextPage = () => {
  return (
    <Layout title="Enhanced seed capsule">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg lg:self-end">
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Enhanced seed capsule
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">$48</p>
              </div>

              <div className="mt-4 space-y-6">
                <p className="text-base text-gray-500">
                  The &quot;enhancement&quot; in this product refers to any number of features or
                  characteristics that make it superior to other seed capsules or seed phrase
                  storage methods.
                </p>
                <p className="text-base text-gray-500">
                  For example, the capsule has advanced encryption and security measures to protect
                  the seed phrase from being accessed by unauthorized individuals. It also have
                  additional features, such as a built-in display for viewing the seed phrase, or a
                  mechanism for generating a new seed phrase if the original one is lost or damaged.
                </p>
                <p className="text-base text-gray-500">
                  Overall, an &quot;Enhanced seed capsule&quot; that looks like a bottle is a
                  convenient and secure way to store a critical component of a bitcoin hardware
                  wallet.
                </p>
              </div>
            </section>
          </div>

          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <Image
                src="/products/enhanced-seed-capsule.jpg"
                alt="Enhanced seed capsule"
                className="h-full w-full object-cover object-center"
                fill
              />
            </div>
          </div>

          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <section aria-labelledby="options-heading">
              <form>
                <div className="mt-10">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                  >
                    Add to cart
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
