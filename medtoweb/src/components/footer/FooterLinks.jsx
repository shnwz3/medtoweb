import * as React from "react";

export default function FooterLinks({ title, links }) {
  return (
    <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
      <nav className="flex flex-col grow items-start text-base font-medium text-white max-md:mt-10" aria-label={`${title} navigation`}>
        <h3 className="font-bold text-green-500">{title}</h3>
        <ul className="w-full mt-5 space-y-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}