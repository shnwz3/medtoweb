import * as React from "react";

export default function PricingCard({ tier, price, features, isPopular }) {
  return (
    <div className={`flex overflow-hidden flex-col items-center min-w-[240px] ${isPopular ? 'bg-slate-800' : 'bg-white'}`}>
      <div className="flex flex-col items-center px-10 py-12 rounded-xl border border-sky-500 border-solid max-md:px-5">
        <h3 className={`text-2xl font-bold tracking-normal leading-none ${isPopular ? 'text-white' : 'text-slate-800'}`}>
          {tier}
        </h3>
        <p className={`mt-9 text-base font-bold tracking-normal leading-6 text-center ${isPopular ? 'text-white' : 'text-neutral-500'}`}>
          Organize across all <br />
          apps by hand
        </p>
        <div className="flex overflow-hidden gap-2.5 items-center mt-9">
          <span className={`self-stretch my-auto text-4xl font-bold tracking-wide leading-none ${isPopular ? 'text-white' : 'text-sky-500'}`}>
            {price}
          </span>
          <div className="flex flex-col self-stretch my-auto">
            <span className={`text-base font-bold tracking-normal ${isPopular ? 'text-white' : 'text-sky-500'}`}>
              ₹
            </span>
            <span className="text-sm font-semibold tracking-wide leading-6 text-blue-300">
              Per Month
            </span>
          </div>
        </div>
        <ul className={`flex overflow-hidden flex-col mt-9 text-sm font-semibold tracking-wide leading-6 ${isPopular ? 'text-white' : 'text-slate-800'}`}>
          {features.map((feature, index) => (
            <li key={index} className="flex overflow-hidden gap-2.5 items-center mt-4 first:mt-0">
              <img
                loading="lazy"
                src={feature.icon}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto w-8 aspect-square rounded-[200px]"
              />
              <span className="self-stretch my-auto w-[205px]">
                {feature.text}
              </span>
            </li>
          ))}
        </ul>
        <button 
          className={`overflow-hidden px-10 py-4 mt-9 max-w-full text-sm font-bold tracking-wide leading-loose text-center ${
            isPopular ? 'bg-sky-500 text-white' : 'bg-sky-500 text-white'
          } rounded-md w-[246px] max-md:px-5`}
        >
          Try for free
        </button>
      </div>
    </div>
  );
}