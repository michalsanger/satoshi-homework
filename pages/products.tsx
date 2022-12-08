import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";

const products = [
  {
    id: 1,
    name: "Seed keeper",
    href: "#",
    price: 9,
    imageSrc: "/products/seed-keeper.jpg",
    imageAlt: "Handy seed keeper",
  },
  {
    id: 2,
    name: "Seed capsule",
    href: "#",
    price: 35,
    imageSrc: "/products/seed-capsule.jpg",
    imageAlt: "Keep the seed safe",
  },
  {
    id: 3,
    name: "Enhanced seed capsule",
    href: "#",
    price: 48,
    imageSrc: "/products/enhanced-seed-capsule.jpg",
    imageAlt: "Multi purpose seed capsule",
  },
  {
    id: 4,
    name: "Large seed keeper",
    href: "#",
    price: 15,
    imageSrc: "/products/large-seed-keeper.jpg",
    imageAlt: "Extra large seed keeper",
  },
];

const Home: NextPage = () => {
  return (
    <Layout title="Products">
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                    fill
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
