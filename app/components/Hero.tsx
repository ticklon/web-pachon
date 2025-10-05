import React, { useState, useEffect } from "react";

import { motion, AnimatePresence } from 'framer-motion';
//
// ① 表示したい画像のリストを準備します
const images = [
  "cassoulet.jpg", // 画像のパスやURLに置き換えてください
  "/DSC_0005.jpg", // 画像のパスやURLに置き換えてください
  "/DSC_0013.jpg",
  "/DSC_0364.jpg",
  "/DSC_0041.jpg",
  "/DSC_0343.jpg",
  "/DSC_0350.jpg",
  "/DSC_0039.jpg",
  "/DSC_0358.jpg",
  "/_MG_4824.jpg",
];

const SLIDE_INTERVAL = 5000;

const variants = {
  // 登場時の状態
  enter: {
    opacity: 1,
    scale: 1.15,
  },
  // 初期状態（画面外や透明な状態）
  hidden: {
    opacity: 0,
    scale: 1,
  },
  // 退場時の状態
  exit: {
    opacity: 0,
    scale: 1, // 退場時はズームを戻す
  },
};

export function Hero() {
  // ② 現在表示している画像のインデックスを管理
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div key={index} className={` absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out
      ${index === currentIndex ? "opacity-100" : "opacity-0"} `}>
            <div key={`${index}-${currentIndex}`} className="w-full h-full bg-cover bg-center animate-zoom" style={{ backgroundImage: `url(${image})` }} />
          </div>
        ))}
        <div className="absolute inset-0 bg-black opacity-50"></div>
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
