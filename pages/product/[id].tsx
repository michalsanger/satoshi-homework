import type { NextPage, GetStaticProps } from "next";
import Image from "next/image";
import { useContext, FormEvent } from "react";
import AddItemButton from "../../components/addItemButton";
import { CartContext } from "../../components/cartContext";
import Layout from "../../components/layout";
import { Product, products } from "../../data/products";

type Props = {
  product: Product;
};

export async function getStaticPaths() {
  return {
    paths: products.map((p) => p.href),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const productId = Number(context.params?.id);
  const product = products.find((p) => p.id === productId);

  if (product === undefined) {
    return { notFound: true };
  }

  return {
    props: { product },
  };
};

const ProductPage: NextPage<Props> = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    addItem(product.id);
  };

  return (
    <Layout title={product.name}>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:max-w-lg lg:self-end">
            <div className="mt-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <h2 id="information-heading" className="sr-only">
                Product information
              </h2>

              <div className="flex items-center">
                <p className="text-lg text-gray-900 sm:text-xl">${product.price}</p>
              </div>

              <div className="mt-4 space-y-6">
                {product.description.split("\n\n").map((p, i) => (
                  <p className="text-base text-gray-500" key={i}>
                    {p}
                  </p>
                ))}
              </div>
            </section>
          </div>

          <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg">
              <Image
                src={product.imageSrc}
                alt={product.imageAlt}
                className="h-full w-full object-cover object-center"
                fill
                priority
              />
            </div>
          </div>

          <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
            <section aria-labelledby="options-heading">
              <form onSubmit={handleOnSubmit}>
                <div className="mt-10">
                  <AddItemButton />
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductPage;
