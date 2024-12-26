import * as React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e53540b8fc937b0a6493b290b0bf88fbefa021749d79fe24105abf5c1c97a1d?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    title: "Online Consultations",
    description: "Consult with top doctors across various specialties via video or chat communication. It's totally secure, private, and convenient. Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6d44682e4e10c6f0ea587d68230802071a55cac6bb6f8b434673220e1ea31bf3?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    title: "Booking Appointments",
    description: "Choose the best time for an in-person visit with our easy-to-use scheduling system, or proceed with our online consultation features."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/afa39ac4f1ba066630bec9d5ee075476e28d4a36aafb6773e2901ef488ad0cfc?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    title: "Prescriptions",
    description: "Receive and renew prescriptions digitally after your consultation with our specialists."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c21efbec9c3ecc8c2f91050b2406b7b46f3e5cf99dd08ff14707e84700b4045?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    title: "Medicine Refills",
    description: "Skip the pharmacy queues and save time + energy by ordering medicine refills online."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb581417a6c80f131cec85fed12d30604d90a8d61b682f9a90c645e088222c2a?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    title: "Medical Notes",
    description: "Obtain necessary medical notes for work or school with only a few clicks of hassle."
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0c21efbec9c3ecc8c2f91050b2406b7b46f3e5cf99dd08ff14707e84700b4045?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    title: "Medicine Refills",
    description: "Skip the pharmacy queues and save time + energy by ordering medicine refills online."
  }
];

export default function ProductsSection() {
  return (
    <section className="flex flex-col items-center w-full max-w-[1050px] py-16 mt-10" aria-labelledby="products-title">
      <h2 id="products-title" className="text-4xl font-bold leading-tight text-center text-sky-500">
        Top <span className="text-sky-500">Products</span> we offer
      </h2>
      <p className="mt-4 text-base font-semibold leading-6 text-center text-neutral-400 w-[816px] max-md:max-w-full">
        In today's fast-paced world, your health deserves the utmost attention and convenience. That's why MedToWeb offers a suite of integrated services designed to cater to your healthcare needs digitally:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-8 w-full max-w-[977px]">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            icon={product.icon}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
}