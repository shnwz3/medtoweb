import * as React from "react";

export default function ProductCard({ icon, title, description }) {
  return (
    <article className="flex overflow-hidden flex-col grow items-start px-10 py-11 w-full bg-white rounded-3xl shadow-[3px_9px_22px_rgba(0,0,0,0.06)] max-md:px-5">
      <img
        loading="lazy"
        src={icon}
        alt=""
        className="object-contain w-11 aspect-square"
        aria-hidden="true"
      />
      <h3 className="mt-4 text-xl font-bold leading-none text-sky-700">
        {title}
      </h3>
      <p className="self-stretch mt-4 text-sm font-semibold leading-6 text-neutral-500">
        {description}
      </p>
    </article>
  );
}