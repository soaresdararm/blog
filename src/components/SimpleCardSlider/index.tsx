import React from "react";

export type Slide = {
  title: string;
  description: string;
};

export interface SimpleCardSliderProps {
  slides: Slide[];
  autoPlayInterval?: number;
  className?: string;
}

export function SimpleCardSlider({
  slides,
  autoPlayInterval = 4000,
  className = "",
}: SimpleCardSliderProps) {
  const [current, setCurrent] = React.useState(0);
  const total = slides.length;

  React.useEffect(() => {
    if (total <= 1) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval, total]);

  if (total === 0) return null;

  return (
    <div
      className={`w-full flex justify-center items-center mb-12 ${className}`}
    >
      <div
        className="relative flex flex-col justify-end p-3 gap-3 rounded-lg cursor-pointer card-slide"
        style={{ width: 190, height: 254, backgroundColor: "#000" }}
        tabIndex={0}
      >
        {/* Gradiente e blur com pseudo-elementos via style tag */}
        <style>{`
          .card-slide::before {
            content: '';
            position: absolute;
            inset: 0;
            left: -5px;
            margin: auto;
            width: 200px;
            height: 264px;
            border-radius: 10px;
            background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100% );
            z-index: -10;
            pointer-events: none;
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          }
          .card-slide::after {
            content: '';
            z-index: -1;
            position: absolute;
            inset: 0;
            background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100% );
            transform: translate3d(0, 0, 0) scale(0.95);
            filter: blur(20px);
            border-radius: 10px;
          }
          .card-slide:hover::after {
            filter: blur(30px);
          }
          .card-slide:hover::before {
            transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
          }
        `}</style>
        <h2
          className="heading text-white mb-1"
          style={{ fontSize: 20, fontWeight: 700, textTransform: "capitalize" }}
        >
          {slides[current].title}
        </h2>
        <p className="text-gray-200 mb-2" style={{ fontSize: 14 }}>
          {slides[current].description}
        </p>
        <div className="flex gap-2 mt-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full border-2 border-white transition-all duration-300 ${
                idx === current ? "bg-pink-400" : "bg-white/40"
              }`}
              onClick={() => setCurrent(idx)}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
