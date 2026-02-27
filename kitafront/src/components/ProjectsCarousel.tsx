"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    img: "/renhus-image.png",
    alt: "Nordic Renhus Website Screenshot",
  },
  {
    img: "/sweethouse-image.png",
    alt: "Sweethouse Website Screenshot",
  },
  {
    img: "/skinsmart-image.png",
    alt: "Skinsmart Website Screenshot",
  },
  {
    img: "/craftprices-image.png",
    alt: "Craftprices Website Screenshot",
  },
];

export default function ProjectsCarousel() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % projects.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));

  // start autoplay; defined below as a small hook helper
  useAutoplay(setIndex, projects.length, isPaused);

  return (
    <div className="relative w-full max-w-5xl mx-auto sm:min-h-72">
      {/* Slide */}
      <div
        className="overflow-hidden rounded-3xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
      >
        <AnimatePresence mode="wait">
          <motion.a
            key={index}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={(e, info) => {
              if (info.offset.x < -100) next();
              if (info.offset.x > 100) prev();
              setTimeout(() => setIsPaused(false), 600);
            }}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.35 }}
            className="block"
          >
            <img
              src={projects[index].img}
              alt={projects[index].alt}
              className="w-full rounded-3xl bg-transparent object-fill h-56 sm:h-72 md:h-auto transition-transform duration-200"
            />
          </motion.a>
        </AnimatePresence>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        aria-label="Previous project"
        className="flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow cursor-pointer hover:scale-110 duration-300"
      >
        <ChevronLeft size={24} color="#074C97" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        aria-label="Next project"
        className="flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur p-3 rounded-full shadow cursor-pointer hover:scale-110 duration-300"
      >
        <ChevronRight size={24} color="#074C97" />
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {projects.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to project ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`rounded-full cursor-pointer transition-all ${
              i === index
                ? "h-3 w-8 md:h-2 md:w-6 bg-black"
                : "h-3 w-3 md:h-2 md:w-2 bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Autoplay effect: advances the slide every 4s unless paused
function useAutoplay(
  setIndex: (updater: (prev: number) => number) => void,
  length: number,
  isPaused: boolean,
) {
  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused, length, setIndex]);
}
