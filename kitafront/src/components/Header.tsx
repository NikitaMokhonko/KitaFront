import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`lg:bg-white text-white lg:rounded-4xl sticky top-0 lg:top-5 flex items-center z-60 lg:border-2 lg:border-[#074C97] lg:mt-5 lg:py-1 transition-all duration-500 mx-auto ${
        scrolled ? "lg:max-w-282" : "lg:max-w-420"
      }`}
    >
      <div
        className="w-full hidden lg:flex flex-row justify-between items-center px-4"
      >
        <a>
          <img
            src="/KFLogo.png"
            alt="KitaFront Logo"
            className="h-14 w-26 rounded-4xl cursor-pointer"
            onClick={() => navigate({ to: "/" })}
          />
        </a>
        <div>
          <button
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/" })}
          >
            Home
            <span className="block h-px bg-black w-full transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100" />
          </button>
          <button
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/about" })}
          >
            About Us
            <span className="block h-px bg-black w-full transform scale-x-0 origin-left transition-transform duration-300 ease-out hover:scale-x-100" />
          </button>
          <button
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/services" })}
          >
            Services
          </button>
          <button
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/pricing" })}
          >
            Pricing
          </button>
          <button
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/contact" })}
          >
            Contact
          </button>
        </div>
        <a
          className="text-xl font-bold text-white bg-[#074C97] border-2 border-[#074C97] py-1 px-8 rounded-4xl cursor-pointer hover:bg-transparent hover:text-[#074C97] duration-300"
          onClick={() => navigate({ to: "/contact" })}
        >
          Get Started
        </a>
      </div>
      <div className="block lg:hidden w-full">
        <div className="flex lg:hidden flex-row bg-[#074C97] items-center justify-between mx-auto w-full px-6 pt-2">
          <div></div>
          <img
            src="/KFLogoWhite.png"
            alt="KitaFront Logo"
            className="ml-5 h-18"
          />
          <button
            className="lg:hidden flex flex-col space-y-1"
            onClick={() => setMenuOpen((s) => !s)}
            aria-label="Toggle menu"
            type="button"
          >
            <span
              className={`h-0.5 w-6 bg-white transition ${
                menuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-white transition ${
                menuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden text-xl font-semibold flex flex-col bg-[#074C97] text-white pb-5 space-y-5 pt-2 border-b-2 border-white">
            <button
              onClick={() => {
                navigate({ to: "/" });
                setMenuOpen(false);
              }}
            >
              Home
            </button>
            <button
              onClick={() => {
                navigate({ to: "/about" });
                setMenuOpen(false);
              }}
            >
              About Us
            </button>
            <button
              onClick={() => {
                navigate({ to: "/services" });
                setMenuOpen(false);
              }}
            >
              Services
            </button>
            <button
              onClick={() => {
                navigate({ to: "/pricing" });
                setMenuOpen(false);
              }}
            >
              Pricing
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
