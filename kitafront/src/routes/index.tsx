import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const navigate = useNavigate();
  const maxw = "max-w-[85%] sm:max-w-280 mx-auto";
  const [isMonthly, setIsMonthly] = useState(false);

  const tiers = [
    {
      name: "Basic",
      description: "Perfect for personal projects and small blogs.",
      upfront: { price: "5.000kr", recurring: "200kr/mo" },
      monthly: { price: "500kr/mo", perks: "1hr dev time/mo" },
      features: ["5 Pages", "Contact Form", "SEO Optimized", "Mobile Responsive"],
    },
    {
      name: "Standard",
      description: "Ideal for small businesses needing a professional edge.",
      upfront: { price: "10.000kr", recurring: "200kr/mo" },
      monthly: { price: "1.000kr/mo", perks: "2hrs dev time/mo" },
      features: ["10 Pages", "Advanced SEO", "Custom Graphics", "Priority Support"],
    },
    {
      name: "Premium",
      description: "Full-scale solution for growing enterprises.",
      upfront: { price: "20.000kr", recurring: "400kr/mo" },
      monthly: { price: "2.000kr/mo", perks: "5hrs dev time/mo" },
      features: ["Unlimited Pages", "E-commerce Ready", "API Integrations", "Weekly Updates"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#074C97] overflow-x-hidden">
      <div className="relative pb-32 sm:pb-48 lg:pb-60">
        <div className={`text-4xl text-center sm:text-left pt-20 sm:pt-0 text-white flex flex-col sm:flex-row sm:h-182 sm:justify-between items-center ${maxw}`}>
          <div className="sm:max-w-[46%]">
            <h1 className="sm:ml-5 font-bold">
              Need a website? <br />
              We got you covered.
            </h1>
            <h2 className="sm:ml-5 text-xl mt-8 sm:mt-5">
              No cheap page builders or WordPress. We offer 100% custom hand-coded
              websites with superior results starting at 1000kr / month.
            </h2>
            <button
              className="text-xl ml-5 mt-8 font-bold text-white bg-[#074C97] border-2 border-white py-1 px-8 rounded-full cursor-pointer hover:bg-white hover:text-[#074C97] duration-300 shadow-xl"
              onClick={() => navigate({ to: "/contact" })}
            >
              Get Started
            </button>
          </div>
          <img
            src="/MobileScreenshot.png"
            alt="Mobile Website Screenshot"
            className="w-80 mt-10"
          />
        </div>

        <div className={`${maxw} mt-20 sm:mt-0 relative z-10`}>
          <h1 className="text-white text-4xl font-bold text-center underline underline-offset-4 decoration-1 decoration-blue-300">
            Optimal performance and design.
          </h1>
          <h2 className="text-white text-2xl mt-12 text-center max-w-[90%] sm:max-w-[60%] mx-auto">
            We don't just create visually stunning websites, because we always
            optimize for performance, SEO and user experience. <br /> <br />
            <br /> Our websites are always built to load as quickly as possible
            and are tailored to all devices.
          </h2>
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-0 translate-y-px">
          <svg
            viewBox="0 0 1440 290"
            className="w-full h-30 sm:h-50 lg:h-100"
            preserveAspectRatio="none"
          >
            <path
              fill="#ffffff"
              d="M0,0 C360,420 1080,0 1440,170 L1440,300 L0,300 Z"
            />
          </svg>
        </div>
      </div>

      <div className="bg-white relative z-20 pb-20">
        <div className={`${maxw}`}>
          <h1 className="text-4xl text-[#074C97] font-bold text-center pt-10 sm:pt-0 mb-25">
            Don't just take our word for it - see for yourself.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <img
              src="/skinsmart-iphone.png"
              className="w-80 rounded-4xl bg-transparent p-5 hover:scale-105 duration-600 hover:rotate-z-1"
            />
            <img
              src="/renhus-iphone.png"
              className="w-80 rounded-4xl bg-transparent p-5 hover:scale-105 duration-600"
            />
            <img
              src="/sweethouse-iphone.png"
              className="w-80 rounded-4xl bg-transparent p-5 hover:scale-105 duration-600 hover:-rotate-z-1"
            />
          </div>
        </div>

        <div className={`${maxw} mt-32`}>
          <h1 className="text-4xl text-[#074C97] font-bold text-center mb-10">
            Why choose us?
          </h1>
          <h2 className="text-xl text-gray-700 text-center mb-10 sm:max-w-[70%] mx-auto">
            We are a small team of passionate web developers who are dedicated
            to creating beautiful and functional websites for our clients. We
            take pride in our work and strive to exceed our clients'
            expectations.
          </h2>
        </div>

        <div className={`${maxw} mt-20`}>
          <h1 className="text-4xl text-[#074C97] text-center font-bold mb-10">
            Quality Guaranteed
          </h1>
          <h2 className="text-xl text-gray-700 text-center sm:max-w-[75%] mx-auto">
            Every project we undertake is built from the ground up. This ensures
            clean code, lightning-fast load speeds, and a unique design that
            represents your brand perfectly.
          </h2>
        </div>
        <div className={`${maxw} mt-32 pb-32`}>
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-4xl text-[#074C97] font-bold text-center mb-8">
          Flexible Pricing Models
        </h1>

        <div className="flex items-center p-1 space-x-1 bg-gray-100 rounded-full border border-[#074C97]">
          <button
            onClick={() => setIsMonthly(false)}
            className={`px-4 sm:px-8 py-2 cursor-pointer rounded-full text-sm sm:text-base font-semibold duration-300 ${
              !isMonthly ? "bg-[#074C97] text-white" : "text-[#074C97] hover:opacity-80"
            }`}
          >
            Upfront + Hosting
          </button>
          <button
            onClick={() => setIsMonthly(true)}
            className={`px-4 sm:px-8 py-2 cursor-pointer rounded-full text-sm sm:text-base font-semibold duration-300 ${
              isMonthly ? "bg-[#074C97] text-white" : "text-[#074C97] hover:opacity-80"
            }`}
          >
            Monthly Subscription
          </button>
        </div>
        <p className="text-gray-500 mt-4 text-sm italic">
          {isMonthly ? "Zero upfront cost — includes maintenance" : "One-time build fee — you own everything"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            onClick={() => navigate({to: "/contact"})}
            className={`p-8 rounded-3xl cursor-pointer duration-500 flex flex-col h-full ${
              tier.name === "Standard"
                ? "border-[#074C97] border-2 shadow-lg scale-105 z-10 bg-white"
                : "shadow-md border border-[#074C97] bg-gray-50/50 hover:scale-101"
            }`}
          >
            {tier.name === "Standard" && (
              <span className="bg-[#074C97] text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full self-center mb-4">
                Recommended
              </span>
            )}
            
            <h3 className="text-2xl font-bold text-[#074C97] mb-2">{tier.name}</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">{tier.description}</p>

            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-900 leading-none">
                {isMonthly ? tier.monthly.price : tier.upfront.price}
              </div>
              <div className="text-[#074C97] font-medium mt-2 text-sm">
                + {isMonthly ? tier.monthly.perks : tier.upfront.recurring}
              </div>
            </div>

            <ul className="space-y-4 mb-10 grow">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-gray-700 text-sm">
                  <svg className="w-5 h-5 text-[#074C97] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => navigate({ to: "/contact" })}
              className={`w-full py-4 rounded-xl font-bold cursor-pointer duration-300 ${
                tier.name === "Standard"
                  ? "bg-[#074C97] text-white hover:bg-white border-2 border-[#074C97] shadow-md hover:text-[#074C97]"
                  : "border-2 border-[#074C97] text-[#074C97] hover:bg-[#074C97] hover:text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
      </div>
    </div>
  );
}