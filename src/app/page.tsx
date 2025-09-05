"use client";

declare global {
  interface Window {
    dataLayer?: Array<{
      event: string;
      sneaker_name?: string;
      sneaker_price?: number;
    }>;
  }
}

type Sneaker = {
  id: number;
  name: string;
  price: number;
  image: string;
};

import { useState } from "react";
import SneakerCard from "../components/SneakerCard";
import { sneakers } from "../data/sneakers";

export default function Home() {
  const [cart, setCart] = useState<Sneaker[]>([]);

  const addToCart = (sneaker: Sneaker) => {
    setCart([...cart, sneaker]);
    alert(`Added ${sneaker.name} to cart!`);

    if (window.dataLayer) {
      window.dataLayer.push({
        event: "buy_button_click",
        sneaker_name: sneaker.name,
        sneaker_price: sneaker.price,
      });
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-4">Sneaker Shop</h1>

      {/* Cart summary */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Cart: {cart.length} items</h2>
      </div>

      {/* Sneaker list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sneakers.map((sneaker) => (
          <SneakerCard
            key={sneaker.id}
            sneaker={sneaker}
            onBuy={() => addToCart(sneaker)}
          />
        ))}
      </div>
    </main>
  );
}
