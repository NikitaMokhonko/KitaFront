import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
  const navigate = useNavigate();
  const maxw = "max-w-[85%] sm:max-w-280 mx-auto";

  return (
    <div className="min-h-screen bg-[#074C97] overflow-x-hidden">
      <div className="relative pb-32 sm:pb-48 lg:pb-68">
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

        <div className={`${maxw} mt-20 sm:mt-2 relative z-10`}>
          <h1 className="text-white text-4xl font-bold text-center underline underline-offset-4 decoration-1 decoration-blue-300">
            Optimal performance and design.
          </h1>
          <h2 className="text-white text-2xl mt-10 text-center max-w-[90%] sm:max-w-[60%] mx-auto">
            We don't just create visually stunning websites, because we always
            optimize for performance, SEO and user experience. <br />
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
          <h1 className="text-4xl text-[#074C97] font-bold text-center mb-25">
            Don't just take our word for it - see for yourself.
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            <img
              src="/MobileScreenshot.png"
              className="w-80 rounded-4xl shadow-2xl"
            />
            <img
              src="/MobileScreenshot.png"
              className="w-80 rounded-4xl shadow-2xl"
            />
            <img
              src="/MobileScreenshot.png"
              className="w-80 rounded-4xl shadow-2xl"
            />
          </div>
        </div>

        <div className={`${maxw} mt-32`}>
          <h1 className="text-4xl text-[#074C97] font-bold text-left ml-5 mb-10">
            Why choose us?
          </h1>
          <h2 className="text-xl text-gray-700 text-left mb-10 max-w-[80%] ml-5">
            We are a small team of passionate web developers who are dedicated
            to creating beautiful and functional websites for our clients. We
            take pride in our work and strive to exceed our clients'
            expectations.
          </h2>
        </div>

        <div className={`${maxw} mt-20`}>
          <h1 className="text-4xl text-[#074C97] font-bold text-left ml-5 mb-10">
            Quality Guaranteed
          </h1>
          <h2 className="text-xl text-gray-700 text-left max-w-[80%] ml-5">
            Every project we undertake is built from the ground up. This ensures
            clean code, lightning-fast load speeds, and a unique design that
            represents your brand perfectly.
          </h2>
        </div>
      </div>
    </div>
  );
}