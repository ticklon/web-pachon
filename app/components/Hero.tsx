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
];

export function Hero() {
    // ② 現在表示している画像のインデックスを管理
    const [currentIndex, setCurrentIndex] = useState(0);

    // ③ 一定時間ごとに画像を切り替える副作用
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 7000); // 5秒ごとに切り替え

        return () => clearInterval(interval); // コンポーネントが不要になったらタイマーを解除
    }, []);

    return (
        <section className="relative h-screen text-white flex items-center justify-center overflow-hidden">
            {/* 背景画像コンテナ */}
            <div className="absolute inset-0 w-screen h-full">
                {images.map((image, index) => (
                    <div key={index} className={` absolute inset-0 w-full h-full ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"} `}>
                        <div key={currentIndex} className="w-full h-full bg-cover bg-center animate-zoomin" style={{
                            backgroundImage: `url(${image})`
                        }} />
                    </div>
                ))}
                {/* 文字を読みやすくするための黒いオーバーレイ */}
                <div className="absolute inset-0 bg-black/25"></div>
            </div>

            {/* テキストコンテンツ */}
            <div className="relative z-10 text-center">
                <h1 className="text-2xl md:text-6xl font-serif font-semibold sm:font-medium text-shadow-stone-900/50 text-shadow-lg">
                    伝統と郷土を、一皿に込めて
                </h1>
                <p className="mt-4 text-xl sm:text-2xl font-serif">PACHON</p>
            </div>
        </section>
    );
}
