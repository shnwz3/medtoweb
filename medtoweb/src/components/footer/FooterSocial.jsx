import * as React from "react";

const socialLinks = [
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/865afd278c559cf6989f1a0519ef060a4bea72c9b38c1eacf7a2796d27163d38?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a", label: "Facebook", url: "#facebook" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ea14dd9d0c757fce6135bfc065474160cb8b3ed558f7a79e040d238726a10e1e?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a", label: "Twitter", url: "#twitter" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f3c0c68634d5be156b7eba8cfda203de2b24fa896b387e62d7930686761df443?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a", label: "Instagram", url: "#instagram" },
  { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1e1463e2eb269d377515a60b5ded82a0d4b3cd8f4648ef9f5c8b9f04677726ad?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a", label: "LinkedIn", url: "#linkedin" }
];

export default function FooterSocial() {
  return (
    <div className="flex gap-3" role="navigation" aria-label="Social media links">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          aria-label={social.label}
          className="focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 hover:opacity-80"
        >
          <img
            loading="lazy"
            src={social.icon}
            alt=""
            className="object-contain shrink-0 w-8 aspect-square"
          />
        </a>
      ))}
    </div>
  );
}