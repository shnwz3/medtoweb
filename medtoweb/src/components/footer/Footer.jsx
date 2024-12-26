import * as React from "react";
import FooterLinks from "./FooterLinks";
import FooterSocial from "./FooterSocial";
import FooterAddress from "./FooterAddress";

const supportLinks = ["Getting Started", "FAQS", "Help Articles", "Report an issue", "Contact Help Desk"];
const serviceLinks = ["Booking appointments", "Online consultations", "Prescriptions", "Medicine Refills", "Medical Notes"];
const legalLinks = ["Terms & Conditions", "Privacy Policy", "Cookie Notice", "Cookie Preferences", "Trust Center"];

export default function Footer() {
  return (
    <footer className="flex overflow-hidden flex-col items-start self-stretch px-20 pt-20 pb-5 mt-24 w-full bg-slate-700 max-md:px-5 max-md:mt-10 max-md:max-w-full" role="contentinfo">
      <div className="w-full max-w-[1198px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-start mt-3 text-white max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/493169b73cff655284526cfc2eee88ee8ee9ed11203c29b8424e156a374bd41b?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a"
                alt="MedToWeb Logo"
                className="object-contain max-w-full aspect-[2.41] w-[195px] max-md:ml-2.5"
              />
              <h2 className="text-5xl">
                Med<span className="text-green-500">To</span>Web
              </h2>
              <p className="self-stretch mt-16 text-base font-medium leading-6 max-md:mt-10">
                Experience personalized medical care from the comfort of your home.
              </p>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-9/12 max-md:ml-0 max-md:w-full">
            <div className="max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <FooterLinks title="Support" links={supportLinks} />
                <FooterLinks title="Services" links={serviceLinks} />
                <FooterLinks title="Legal" links={legalLinks} />
                <FooterAddress />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 mt-12 max-w-full h-0.5 bg-sky-200 border-2 border-sky-200 border-solid w-[1166px] max-md:mt-10" />
      <div className="flex flex-wrap gap-5 justify-between mt-5 w-full max-w-[1166px] max-md:max-w-full">
        <FooterSocial />
        <p className="my-auto text-base font-semibold text-right text-zinc-400">
          MedToWeb 2024 © All Rights Reserved
        </p>
      </div>
    </footer>
  );
}