import * as React from "react";

export default function Header() {
  return (
    <header className="m-5px p-2px flex gap-5 justify-between w-full max-md:max-w-full">
      <div className=" m-5px p-2px flex flex-col text-3xl text-blue-100">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a4b3003c749fa23b28d4cb4c4fd62ed194ed2971cc53296215573090fc7ae3c0?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a"
          alt="MedToWeb Logo"
          className="object-contain self-center max-w-full aspect-[2.39] w-[110px]"
        />
        <div>
          Med<span className="text-green-500">To</span>Web
        </div>
      </div>
      <nav className="flex flex-col items-start my-auto text-base font-semibold max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-center self-stretch">
          <a href="#home" className="self-stretch my-auto text-xl font-bold leading-tight text-green-500">Home</a>
          <a href="#about" className="self-stretch my-auto">About</a>
          <a href="#products" className="self-stretch my-auto">Products</a>
          <a href="#pricing" className="self-stretch my-auto">Pricing</a>
          <a href="#clients" className="self-stretch my-auto">Clients</a>
          <a href="#dashboard" className="self-stretch my-auto">Dashboard</a>
          <a href="#demo" className="self-stretch my-auto">Book Demo</a>
          <a href="#contact" className="self-stretch my-auto">Contact</a>
        </div>
      </nav>
      <button className="bg-sky-500 gap-3 self-start px-6 py-4 mt-2 ml-5 text-2xl font-bold leading-none text-center rounded-xl shadow-[-8px_8px_28px_rgba(0,0,0,0.06)]">
        Join Us
      </button>
    </header>
  );
}