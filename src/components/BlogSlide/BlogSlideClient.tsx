"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ReactNode } from "react";

interface BlogSlideClientProps {
  children: ReactNode[];
}

export default function BlogSlideClient({ children }: BlogSlideClientProps) {
  if (!Array.isArray(children) || children.length === 0) {
    return null;
  }
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    cssEase: "ease-in-out",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <div className="w-full flex justify-center items-center pb-4 ">
      <div className="w-full max-w-6xl overflow-hidden rounded-xl shadow min-h-[300px] sm:min-h-[350px] flex justify-center items-center">
        <div className="w-full px-2 py-6">
          <Slider {...settings}>{children}</Slider>
        </div>
      </div>
    </div>
  );
}
