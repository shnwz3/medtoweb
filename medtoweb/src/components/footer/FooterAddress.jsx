import * as React from "react";

export default function FooterAddress() {
  return (
    <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col grow text-base font-bold text-green-500 whitespace-nowrap max-md:mt-10">
        <h3 className="self-start">Address</h3>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06594dec1ea01488f1d292c9895e2b90c4b6dc19cb2cc8cc98fd873555710d5f?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a"
          alt="MedToWeb office location map"
          className="object-contain mt-5 rounded-xl aspect-[0.96] w-[177px]"
        />
      </div>
    </div>
  );
}