import * as React from "react";
import Header from './components/Header'
import Hero from "./components/Hero";
import AppointmentForm from "./components/AppointmentForm";
import TestimonialCard from "./components/TestimonialCard";
import ContactForm from "./components/ContactForm";
import PricingSection from "./pricing/PricingSection";
import ProductsSection from "./products/ProductsSection";
import Footer from './components/footer/Footer'
import TestimonialsSection from "./components/TestimonialSection";
import DoctorsSection from "./components/DoctorsSection";

const testimonials = [
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/183074ddaef35feae6e9a3675e8e89cd64e10405e9911377d491f5e39b4e64dc?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    text: "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined.",
    author: "Linda A."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d51c3fd4b55995573c5f342e58ca57f9bcbb2f3636f40d13553f2f6cdf20f49?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    text: "Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life.",
    author: "Henry B."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/32b48432aadc8f900a7a7f82c53805d4e539848de40f524eece6b53cac2c4266?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    text: "The prescription refill system is a game-changer for managing my diabetes. It's really efficient and completely hassle-free.",
    author: "Joshua T."
  },
  {
    imgSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/70b04733d04aeb0b5e1e45b0e11252b431e2ce83c329b4f062709f3dae4b6fd0?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    text: "Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life.",
    author: "Samantha K."
  }
];

export default function MedToWeb() {
  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <Header />
      <Hero />
      <AppointmentForm />
      <ProductsSection />
      <DoctorsSection />
      <TestimonialsSection />
      <PricingSection />
      
      {/* Rest of the components follow */}
      
      {/* <section className="flex flex-wrap gap-5 max-md:flex-col">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="flex flex-col w-6/12 max-md:w-full">
            <TestimonialCard {...testimonial} />
            
          </div>
        ))}
      </section> */}

      <ContactForm />
      
      <Footer />
    </main>
  );
}