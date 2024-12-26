import * as React from "react";

export default function ContactForm() {
  return (
    <div>
      <h1 className="text-xl font-bold text-gray-800 justify-center items-center flex">
        Reach Our
         <span className="text-blue-500 gap-1 px-1"> Help Desk </span> For Support
      </h1>
      <p className="text-sm text-gray-600 justify-center items-center flex">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis iusto eos soluta!
      </p>
      <form className="flex gap-5 justify-between mt-4 ml-5 max-w-full text-base font-semibold text-zinc-400 w-[853px] max-md:mt-10">
        <div className="flex overflow-hidden gap-3 items-center p-5 bg-white rounded-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ddeb64468f8c450bd59de7e363dca37c76601d12c447119de77e4b3c7e234ec?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
          />
          <label htmlFor="firstName" className="sr-only">First Name</label>
          <input
            id="firstName"
            type="text"
            placeholder="Enter Your First Name"
            className="self-stretch my-auto bg-transparent border-none outline-none"
            required
          />
        </div>
        <div className="flex overflow-hidden gap-3 items-center p-5 bg-white rounded-xl">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/056baa5c0a3ca134ca88bbdc49d9718346b5fc7010584636ac8534c30f61d4e7?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-square"
          />
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email Address"
            className="self-stretch my-auto bg-transparent border-none outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="flex gap-2 justify-center items-center px-6 py-5 text-2xl font-bold leading-none text-center text-white bg-sky-500 rounded-xl shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] max-md:px-5"
        >
          Contact us
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f82cd18e8a7dfa7aaa016e9166203373fc84876a715b31ded7a12f951b84cd85?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 rounded-none aspect-square"
          />
        </button>
      </form>
    </div>
  );
}
