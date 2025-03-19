"use client";

import { useRouter } from "next/navigation";
import "@ant-design/v5-patch-for-react-19";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our Store!</h1>
      <p className="text-lg text-gray-600 mb-6">
        Discover amazing products and great deals.
      </p>
      <button
        className="cursor-pointer bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition"
        onClick={() => router.push("/products")}
      >
        Shop Now
      </button>
    </div>
  );
}
