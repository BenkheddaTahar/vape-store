import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

const products = [
  {
    id: 1,
    name: "Neon Grape E-Liquid",
    price: 14.99,
    image: "https://via.placeholder.com/300x200.png?text=Grape+E-Liquid",
  },
  {
    id: 2,
    name: "Disposable Vape - Blueberry",
    price: 9.99,
    image: "https://via.placeholder.com/300x200.png?text=Blueberry+Vape",
  },
  {
    id: 3,
    name: "Vape Mod X200",
    price: 59.99,
    image: "https://via.placeholder.com/300x200.png?text=Mod+X200",
  },
];

export default function VapeStore() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-black text-white p-4">
      <h1 className="text-4xl font-bold text-center text-blue-400 mb-8">
        CloudRush Vape Co.
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="bg-gray-900">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-t"
            />
            <CardContent>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-blue-300">${product.price.toFixed(2)}</p>
              <Button
                onClick={() => addToCart(product)}
                className="mt-2 w-full bg-blue-500 hover:bg-blue-600"
              >
                Add to Cart
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6">
        <h2 className="text-2xl font-bold">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-400">Your cart is empty.</p>
        ) : (
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <p className="mt-4 font-semibold">Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  );
}
