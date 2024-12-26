import * as React from "react";
import PricingCard from "./PricingCard";

const pricingTiers = [
  {
    tier: "FREE",
    price: "0",
    isPopular: false,
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/d25836b238cdd3ee39c00db2d5636e9eeff6e68287838e90aedccce014b1731e?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/c567f0f18d3ca32c83abc5bf99278aae89ad5077498a8e60644e935537c0dda0?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/784da1a0fcdf5a16f137416e626e3705a567f2c0078dfa4caa903a4acd7afc98?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/1fa62da5ffb5c77abbdc3820f0d61663c27ccee7ce80bd4b6dc3522f7de5f347?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "1GB Cloud storage"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4294ab1b25cc1e5b20f90637d96289fb527c7a7e11b97296ea725eb343df291b?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Email and community support"
      }
    ]
  },
  {
    tier: "STANDARD",
    price: "9.99",
    isPopular: true,
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/38a6b395682aac1f1474c6f16a97215339eb1df31974956cac223823c21f6843?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a81f105179e663bbc1f7bb780d73408580217eb3868eb60e557721e92c782d98?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6deed603e7b7ae43e634de7a9648569b5af453954d6797e5a780dde818cc70c7?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/6efeb820662cfc8a8a0050a8c6e7b153bcd44e95d57ad571e10dd3bf1409f9f4?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "1GB Cloud storage"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/72e57381ed6b344ed7717f4b6a08169e024c6f2aeee8e218f06d6be401bdf9de?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Email and community support"
      }
    ]
  },
  {
    tier: "PREMIUM",
    price: "19.99",
    isPopular: false,
    features: [
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2f385200815bfb09b57a57c7ebad3567f9125df2da76bdfa8a15371734dfb993?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/794d964a188bc1be564c31ae11b90d71bf53d50099549ed3cf3e8f0bbe4a0a24?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/7ce59f74ce7f9cec3c9f329eca9fcc58abac10202e768b8889a6b0a693ac786e?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Unlimited product updates"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e5664360ab07ba9b147c03c4e690c3d6cd38b9ce0ebbefb230d653218d4b5a6c?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "1GB Cloud storage"
      },
      {
        icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/4b0da8e711d2b737a677f58e0f63ac3020b95d6cc40b9bf327b3ed802a9dd88e?placeholderIfAbsent=true&apiKey=675854ba84844804b926882e0a413f4a",
        text: "Email and community support"
      }
    ]
  }
];

export default function PricingSection() {
  return (
    <section className="flex overflow-hidden flex-col items-center pb-28 mt-14 w-full max-w-[1050px] max-md:pb-24 max-md:mt-10 max-md:max-w-full" aria-labelledby="pricing-title">
      <div className="flex overflow-hidden flex-col items-center max-w-full tracking-wide w-[633px]">
        <div className="flex overflow-hidden flex-col items-center w-full">
          <h2 id="pricing-title" className="text-4xl font-bold leading-none text-sky-500">
            Pricing
          </h2>
          <p className="mt-2.5 text-sm font-medium leading-5 text-center text-neutral-500 max-md:max-w-full">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>
      <div className="flex flex-wrap items-end justify-center gap-4 mt-6 max-md:max-w-full">
        {pricingTiers.map((tier, index) => (
          <PricingCard key={index} {...tier} />
        ))}
      </div>
    </section>
  );
}