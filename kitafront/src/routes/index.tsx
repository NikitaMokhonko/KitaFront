import { createFileRoute, useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {

  const navigate = useNavigate();
  return (
    <div className="max-w-[84%] sm:max-w-[50%] mx-auto min-h-screen">
      <div className="text-4xl text-center sm:text-left mt-20 sm:mt-16 text-white flex flex-col sm:flex-row sm:justify-between items-center">
        <div className="sm:max-w-[50%]">
          <h1 className="sm:ml-5 font-bold">
            Need a website? <br />
            We got you covered.
          </h1>
          <h2 className="sm:ml-5 text-xl mt-8 sm:mt-5">
            No page builders or WordPress. We offer 100% hand-coded websites
            with superior results starting at 1000kr / month.
          </h2>
          <button className="text-xl ml-5 mt-8 font-bold text-white bg-[#074C97] border-2 border-white py-1 px-8 rounded-4xl cursor-pointer hover:bg-white hover:text-[#074C97] duration-300 shadow-xl" onClick={() => navigate({ to: "/contact" })}>
            Get Started
          </button>
        </div>
        <img
          src="/MobileScreenshot.png"
          alt="Mobile Website Screenshot"
          className="w-80 mt-10"
        />
      </div>
    </div>
  );
}
