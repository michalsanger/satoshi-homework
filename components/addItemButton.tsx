import { useState } from "react";

export default function AddItemButton() {
  const [animate, setAnimate] = useState(false);

  return (
    <button
      type="submit"
      onClick={() => {
        setAnimate(true);
        setTimeout(() => setAnimate(false), 1000);
      }}
      className={`${
        animate && "animate-pulse"
      } flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50`}
    >
      Add to cart
    </button>
  );
}
