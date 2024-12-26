import * as React from "react";

export default function TestimonialCard({ imgSrc, text, author }) {
  return (
    <div className="flex flex-wrap gap-5 items-center px-10 py-7 text-base font-semibold leading-6 rounded-3xl shadow-[3px_9px_22px_rgba(0,0,0,0.06)] text-zinc-600 max-md:px-5 max-md:mt-10">
      <img
        loading="lazy"
        src={imgSrc}
        alt={`${author}'s testimonial`}
        className="object-contain shrink-0 self-stretch my-auto rounded-lg aspect-square w-[76px]"
      />
      <div className="grow shrink self-stretch my-auto w-80">
        <span className="font-medium">{text}</span>
        <br />
        <span className="font-bold text-zinc-600">- {author}</span>
      </div>
    </div>
  );
}