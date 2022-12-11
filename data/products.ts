export type Product = {
  id: number;
  name: string;
  href: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  description: string;
};

// Descriptions provided by https://chat.openai.com/ :-)
export const products: Product[] = [
  {
    id: 1,
    name: "Seed keeper",
    href: "/product/1",
    price: 9,
    imageSrc: "/products/seed-keeper.jpg",
    imageAlt: "Handy seed keeper",
    description: `
      The Handy seed keeper is a revolutionary product that allows you to securely store
      your bitcoin wallet seed in a convenient and easy-to-use format. With its sleek and
      compact design, you can easily carry the Handy seed keeper with you wherever you go,
      ensuring that your valuable bitcoin wallet seed is always within reach.

      Unlike other seed storage options that can be bulky and awkward to use, the Handy
      seed keeper is designed to be user-friendly and intuitive. Its high-quality paper
      material is durable and resistant to tearing, so you can trust that your seed will
      be safe and secure at all times.
    `,
  },
  {
    id: 2,
    name: "Seed capsule",
    href: "/product/2",
    price: 35,
    imageSrc: "/products/seed-capsule.jpg",
    imageAlt: "Keep the seed safe",
    description: `
      The Seed capsule is a revolutionary new product that allows you to securely store
      your bitcoin wallet seed in a compact and convenient format. With its sleek and
      stylish design, the Seed capsule is the perfect solution for anyone who wants to
      keep their seed safe and secure while on the go

      But the Seed capsule is more than just a simple storage container. It also features
      a unique, easy-to-use design that allows you to quickly and easily record your seed
      using a pen or pencil. The clear, transparent material makes it easy to read your
      seed, even in low light conditions, and the numbered grid ensures that you can keep
      track of your seed with ease.
    `,
  },
  {
    id: 3,
    name: "Enhanced seed capsule",
    href: "/product/3",
    price: 48,
    imageSrc: "/products/enhanced-seed-capsule.jpg",
    imageAlt: "Multi purpose seed capsule",
    description: `
      The "enhancement" in this product refers to any number of features or
      characteristics that make it superior to other seed capsules or seed phrase
      storage methods.

      For example, the capsule has advanced encryption and security measures to protect
      the seed phrase from being accessed by unauthorized individuals. It also have
      additional features, such as a built-in display for viewing the seed phrase, or a
      mechanism for generating a new seed phrase if the original one is lost or damaged.

      Overall, an "Enhanced seed capsule" that looks like a bottle is a
      convenient and secure way to store a critical component of a bitcoin hardware
      wallet.
    `,
  },
  {
    id: 4,
    name: "Large seed keeper",
    href: "/product/4",
    price: 15,
    imageSrc: "/products/large-seed-keeper.jpg",
    imageAlt: "Extra large seed keeper",
    description: `
      The Large seed keeper is the perfect solution for storing your bitcoin wallet seed
      in a convenient and secure manner. With its generous size, the Large seed keeper
      allows you to easily record and store your seed, ensuring that it is always within
      reach when you need it.

      Unlike other seed storage options that can be small and difficult to use, the Large
      seed keeper is designed for ease of use and convenience. Its high-quality paper
      material is durable and resistant to tearing, so you can trust that your seed will
      be safe and secure at all times.
    `,
  },
];
