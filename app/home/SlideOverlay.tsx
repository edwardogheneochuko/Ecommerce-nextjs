
import React from "react";

type SlideOverlayProps = {
  contentType: string;
};

const SlideOverlay: React.FC<SlideOverlayProps> = ({ contentType }) => {
  switch (contentType) {
    case "offer":
      return (
        <div className="absolute inset-0 flex justify-center md:justify-start">
          <div className="pl-0 sm:pl-20 h-full flex flex-col justify-center items-center space-y-4">
            <span className="text-white text-5xl lg:text-7xl font-extrabold uppercase text-center">
              HOT OFFERS
            </span>
            <span className="text-pink-400 text-6xl md:text-9xl font-bold text-center">
              50%
            </span>
          </div>
        </div>
      );
    case "collection":
      return (
        <div className="text-white absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-2">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold flex items-start">New</h2>
            <h2 className="text-4xl sm:text-6xl lg:text-9xl font-light text-pink-400">Collection...</h2>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold flex justify-end">2025</h2>
          </div>
        </div>
      );
    case "deal":
      return (
        <div className="absolute inset-0 flex items-center justify-center md:justify-end pr-10">
          <div className="w-3/4 md:w-1/2 flex flex-col items-center space-y-3">
            <span className="text-pink-400 text-5xl md:text-9xl font-extrabold leading-none uppercase text-center">
              DEAL
            </span>
            <span className="text-xl md:text-5xl font-semibold uppercase py-2 text-center bg-white text-black w-fit px-3 sm:px-4">
              of The Week
            </span>
            <span className="text-white text-sm md:text-base text-center">
              Limited Time Only - Grab It Now
            </span>
          </div>
        </div>
      );
    case "launch":
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-3xl">
          <div className="text-center text-white space-y-4 px-4">
            <h2 className="text-4xl sm:text-6xl font-bold">New Product Launch</h2>
            <p className="text-lg sm:text-2xl">Revolutionary Tech, Available Now!</p>
            <button className="mt-2 px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600">
              Learn More
            </button>
          </div>
        </div>
      );
    case "testimonial":
      return (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 rounded-3xl px-6">
          <div className="text-white max-w-xl text-center space-y-3">
            <p className="text-xl italic">"This brand changed my life. Outstanding quality and service!"</p>
            <p className="text-pink-400 text-lg font-semibold">– Jane Doe, Customer</p>
          </div>
        </div>
      );
    default:
      return null;
  }
};

export default SlideOverlay;
