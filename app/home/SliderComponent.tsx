
'use client'
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import SlideOverlay from "./SlideOverlay";

import slider1 from "@/public/images/slider1.jpg";
import slider2 from "@/public/images/slider2.jpg"; 
import slider3 from "@/public/images/slider3.jpg";
import slider4 from "@/public/images/slider4.jpg";
import slider5 from "@/public/images/slider5.jpg";

// Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const slides = [
  { image: slider1, contentType: "offer", alt: "Hot Offers - 50% Discount Banner" },
  { image: slider2, contentType: "collection", alt: "New Collection 2025 Promo" },
  { image: slider3, contentType: "deal", alt: "Deal of the Week Promo" },
  { image: slider4, contentType: "launch", alt: "Product Launch Announcement" },
  { image: slider5, contentType: "testimonial", alt: "Customer Testimonials" },
];

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
  arrows: false,
};

const SliderComponent: React.FC = () => (

    <div className="w-full dark:bg-neutral-700">
      <div className="w-[88%] mx-auto py-8" id="home">
    <Slider {...settings} className="mx-auto">
      {slides.map((slide, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px]" role="img" aria-label={slide.alt}>
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="rounded-3xl object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-30 rounded-3xl">
              <SlideOverlay contentType={slide.contentType} />
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
    </div>
);

export default SliderComponent;
