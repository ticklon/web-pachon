import React, { useState, useEffect } from "react";

const images = [
  "cassoulet.jpg", 
  "/Pachon_inside-1.jpg", 
  "/DSC_0005.jpg", 
  "/DSC_0013.jpg",
  "/DSC_0364.jpg",
  "/DSC_0041.jpg",
  "/DSC_0343.jpg",
  "/DSC_0350.jpg",
  "/DSC_0039.jpg",
  "/DSC_0358.jpg",
  "/_MG_4824.jpg",
];

const SLIDE_INTERVAL = 7000;
const ANIMATION_DELAY = 1100;

export function Hero() {
  // ② 現在表示している画像のインデックスを管理
  const [currentIndex, setCurrentIndex] = useState(0);
  const [innerCurrentIndex, setInnerCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setInnerCurrentIndex(currentIndex);
    }, ANIMATION_DELAY);

    return () => clearTimeout(animationTimer); // クリーンアップ
  }, [currentIndex]);


  return (
    <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div key={index} className={` absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
      ${index === currentIndex ? "opacity-100" : "opacity-0"} `}>
            <div
              className={`
                w-full h-full bg-cover bg-center
                ${index === innerCurrentIndex ? 'animate-zoom' : ''}
              `}
              style={{ backgroundImage: `url(${image})` }}
            />

          </div>
        ))}
      </div>

      <div className="relative z-10 text-center">
        <h1
          className="text-2xl md:text-6xl font-serif font-semibold sm:font-medium text-shadow-stone-900/50 text-shadow-lg">
          伝統と郷土を、一皿に込めて
        </h1>
        <p className="mt-4 text-xl sm:text-2xl font-serif text-shadow-stone-900/50 text-shadow-lg">
          PACHON
        </p>
      </div>
    </section>
  );
}
