import * as React from "react";

const steps = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/014203034881f9750cc50db408a593b47f9ed84ddac954136a877c28448936cc?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    label: "Email Address",
    placeholder: "Enter Your Email Address"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/35cf729e5d5d425befad20d6149252aae86fe1884144cc8c7ae1e08b767b8e08?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    label: "Contact Number", 
    placeholder: "Enter Your Contact Number"
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cc746a44c8192d8bacaad790b7bdee5cb75fa206cd1d65cdea478c41cf736c34?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
    label: "Date of Appointment",
    placeholder: "Select Date of Appointment"
  }
];

export default function AppointmentForm() {
  return (
    <form className="flex overflow-hidden flex-col items-start px-10  w-full text-base font-semibold rounded-3xl max-w-[1166px] shadow-[3px_9px_22px_rgba(0,0,0,0.06)] max-md:px-5 max-md:max-w-full">
      <h2 className="text-3xl font-bold leading-none text-sky-700 justify-center items-center flex">
        Easily book an appointment in 3 simple steps.
      </h2>
      <div className="flex flex-wrap gap-5 justify-between mt-10 max-w-full text-zinc-600 w-[796px]">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-2">
            <img
              loading="lazy"
              src={step.icon}
              alt=""
              className="object-contain shrink-0 w-8 aspect-square"
            />
            <label htmlFor={`step${index}`} className="my-auto basis-auto">
              {step.label}
            </label>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-stretch mt-4 w-full text-black text-opacity-50 max-md:max-w-full">
        {steps.map((step, index) => (
          <input
            key={index}
            id={`step${index}`}
            type={index === 2 ? "date" : index === 1 ? "tel" : "email"}
            placeholder={step.placeholder}
            className="overflow-hidden p-5 bg-white rounded-xl border border-solid border-sky-500 border-opacity-50"
            required
          />
        ))}
        <button type="submit" className="flex gap-2 items-center px-5 py-5 text-2xl font-bold leading-none text-white bg-sky-500 rounded-xl shadow-[-8px_8px_28px_rgba(0,0,0,0.06)]">
          Book Now
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb64bfbb3053483df8f8800121c39b04c46c5c38c0a43122e2a27699f6bb6fb?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
          />
        </button>
      </div>
    </form>
  );
}