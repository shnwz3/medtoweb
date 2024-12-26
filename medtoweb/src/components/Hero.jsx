import * as React from "react";
import doc from "./doc.png";

export default function Hero() {
  return (
    <section className="flex flex-wrap justify-between items-center px-20 pt-11 pb-28 w-full text-black max-md:px-5 max-md:pb-24">
      {/* Text and Button Container */}
      <div className="flex flex-col items-start max-w-[552px] z-10">
        <h1 className="text-5xl font-bold leading-[54px] max-md:max-w-full max-md:text-4xl max-md:leading-[53px]">
          Your
          <span className="font-extrabold text-black"> Trusted Partner</span> In
          Digital <span className="text-green-500">Healthcare</span>.
        </h1>
        <p className="mt-11 text-base font-medium leading-6 max-md:mt-10 max-md:max-w-full">
          <span className="font-bold text-green-500">
            Empowering Your Health at Every Step.
          </span>{" "}
          Experience personalized medical care from the comfort of your home.
          Connect with{" "}
          <span className="font-bold text-green-500">certified doctors,</span>{" "}
          manage prescriptions, and schedule appointments with ease. Ready to
          take control of your health?{" "}
          <span className="font-bold text-green-500">Get Started</span> or Book
          an Appointment today.
        </p>
        <button className="flex text-white bg-sky-500 gap-3 items-center px-9 py-5 mt-14 mb-0 text-2xl font-bold leading-none rounded-xl shadow-[-8px_8px_28px_rgba(0,0,0,0.06)] max-md:px-5 max-md:mt-10 max-md:mb-2.5">
          Book Demo
        </button>
      </div>
      {/* Background Image Container */}
      <div
        className="flex-shrink-0 w-[500px] h-[500px] bg-cover bg-center rounded-lg max-md:w-full"
        style={{ backgroundImage: `url(${doc})` }}
      ></div>
    </section>
  );
}
