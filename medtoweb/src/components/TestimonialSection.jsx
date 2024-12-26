import * as React from "react";

const testimonials = [
  {
    id: 1,
    name: "Linda A.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/183074ddaef35feae6e9a3675e8e89cd64e10405e9911377d491f5e39b4e64dc?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    text: "After my knee surgery, the convenience of online consultations made my recovery smoother than I could have imagined."
  },
  {
    id: 2,
    name: "Henry B.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/0d51c3fd4b55995573c5f342e58ca57f9bcbb2f3636f40d13553f2f6cdf20f49?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    text: "Managing chronic conditions like diabetes requires a lot of vigilance, but the medicine refill system has simplified my life."
  },
  {
    id: 3,
    name: "Joshua T.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/32b48432aadc8f900a7a7f82c53805d4e539848de40f524eece6b53cac2c4266?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    text: "The prescription refill system is a game-changer for managing my diabetes. It's really efficient and completely hassle-free."
  },
  {
    id: 4,
    name: "Samantha K.",
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/70b04733d04aeb0b5e1e45b0e11252b431e2ce83c329b4f062709f3dae4b6fd0?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    text: "Finding a doctor who really understands all of my health needs has never been easier. This platform has changed my life."
  }
];

export default function TestimonialsSection() {
  const [currentPage, setCurrentPage] = React.useState(0);
  const testimonialsPerPage = 2;
  const pageCount = Math.ceil(testimonials.length / testimonialsPerPage);

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section 
      aria-labelledby="testimonials-heading"
      className="mt-16 w-full max-w-[1102px] max-md:mt-10 max-md:max-w-full"
    >
      <h2 
        id="testimonials-heading"
        className="text-4xl font-bold text-center leading-[52px] text-neutral-700 mb-6"
      >
        <span className="text-sky-600">Patient Testimonials</span> Hear from
        Those We've Cared For
      </h2>
      <p className="text-base font-semibold text-center text-zinc-400 mb-10">
        Discover the difference we make through the voices of those we've served:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials
          .slice(
            currentPage * testimonialsPerPage,
            (currentPage + 1) * testimonialsPerPage
          )
          .map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-wrap gap-5 items-center p-7 rounded-3xl shadow-[3px_9px_22px_rgba(0,0,0,0.06)]"
            >
              <img
                loading="lazy"
                src={testimonial.image}
                alt={`${testimonial.name}'s portrait`}
                className="w-[76px] h-[76px] rounded-lg object-cover"
              />
              <div className="flex-1">
                <blockquote className="mb-2 font-medium text-zinc-600">
                  "{testimonial.text}"
                </blockquote>
                <cite className="font-bold text-zinc-600 not-italic">
                  - {testimonial.name}
                </cite>
              </div>
            </article>
          ))}
      </div>
      <div className="flex justify-center gap-2 mt-8" role="navigation" aria-label="Testimonials pagination">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index)}
            aria-label={`Go to testimonials page ${index + 1}`}
            aria-current={currentPage === index ? "page" : undefined}
            className={`w-3 h-3 rounded-full ${
              currentPage === index ? "bg-blue-500" : "bg-slate-200"
            }`}
          />
        ))}
      </div>
    </section>
  );
}