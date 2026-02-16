import { useState, useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sm:bg-white text-white sm:rounded-4xl sticky top-0 sm:top-5 flex items-center sm:mt-5 sm:py-1 transition-all duration-400 mx-auto ${
        scrolled ? "sm:max-w-[50%]" : "sm:max-w-[70%]"
      }`}
    >
      <div
        className="w-full hidden sm:flex flex-row justify-between items-center px-4 cursor-pointer"
        onClick={() => navigate({ to: "/" })}
      >
        <a>
          <img
            src="/KFLogo.png"
            alt="KitaFront Logo"
            className="h-14 w-26 rounded-4xl"
          />
        </a>
        <div>
          <a
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/" })}
          >
            Home
          </a>
          <a
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/about" })}
          >
            About Us
          </a>
          <a
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/services" })}
          >
            Services
          </a>
          <a
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/pricing" })}
          >
            Pricing
          </a>
          <a
            className="text-xl font-bold text-[#074C97] mx-4 cursor-pointer"
            onClick={() => navigate({ to: "/contact" })}
          ></a>
        </div>
        <a className="text-xl font-bold text-white bg-[#074C97] border-2 border-[#074C97] py-1 px-8 rounded-4xl cursor-pointer hover:bg-transparent hover:text-[#074C97] duration-300">
          Get Started
        </a>
      </div>
      <div className="block sm:hidden w-full">
        <div className="flex sm:hidden flex-row bg-[#074C97] items-center justify-between mx-auto w-full px-6 pt-2">
          <div></div>
          <img
            src="/KFLogoWhite.png"
            alt="KitaFront Logo"
            className="ml-5 h-18"
          />
          <button
            className="sm:hidden flex flex-col space-y-1"
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
          <div className="sm:hidden text-xl font-semibold flex flex-col bg-[#074C97] text-white pb-5 space-y-5 pt-2 border-b-2 border-white">
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
