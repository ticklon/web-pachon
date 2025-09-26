import React, { useState, useEffect } from "react";

// ① 表示したい画像のリストを準備します
const images = [
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836", // 画像のパスやURLに置き換えてください
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1",
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
                <div className="absolute inset-0 bg-black opacity-30"></div>
            </div>

            {/* テキストコンテンツ */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl md:text-6xl font-serif">
                    旬の恵みを、一皿に込めて
                </h1>
                <p className="mt-4 text-lg">レストラン パッション</p>
            </div>
        </section>
    );
}
