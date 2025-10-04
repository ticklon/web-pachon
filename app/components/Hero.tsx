import React, { useState, useEffect } from "react";

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

export function Hero() {
  // ② 現在表示している画像のインデックスを管理
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leavingIndex, setLeavingIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setLeavingIndex(currentIndex);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, SLIDE_INTERVAL);

    return () => clearInterval(interval);
  }, [currentIndex]); // ★ currentIndexを依存配列に追加

  const animationClass =
    currentIndex % 2 === 0 ? "animate-zoom-in-1" : "animate-zoom-in-2";

  return (
    <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
      {/* 背景画像コンテナ */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => {
          const isActive = index === currentIndex;
          const isLeaving = index === leavingIndex;

          let className = "absolute inset-0 w-full h-full bg-cover bg-center";

          if (isActive) {
            className += " animate-enter"; // 登場アニメーションを適用
          } else if (isLeaving) {
            // 退場するスライドは拡大した状態を維持したまま、透明度だけを操作
            className +=
              " opacity-0 transition-opacity duration-1000 ease-in-out";
          } else {
            className += " opacity-0"; // それ以外は非表示
          }

          return (
            <div key={index} className={className} style={{ backgroundImage: `url(${image})` }} />
          );
        })}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* テキストコンテンツ */}
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
