import type { Route } from "./+types/home";
import { Link } from "react-router";
import { useState, useEffect } from "react";

// --- Data for News Section ---
// Using React Router's loader function is considered for future data fetching.
const newsData = [
  {
    date: "2025.09.20",
    category: "EVENT",
    title: "秋の味覚、ジビエ料理フェア開催のお知らせ",
  },
  {
    date: "2025.09.15",
    category: "INFO",
    title: "ウェブサイトをリニューアルしました",
  },
  {
    date: "2025.08.30",
    category: "EVENT",
    title: "シェフ、アンドレ・パッションによる料理教室",
  },
];

// --- Components for each section ---

function Hero() {
  return (
    <section className="h-screen bg-gray-800 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-serif">旬の恵みを、一皿に込めて</h1>
        <p className="mt-4 text-lg">レストラン パッション</p>
      </div>
    </section>
  );
}

function Concept() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-4">CONCEPT</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          暖炉の火のように温かなフランスの郷土料理を通して、心満たされる豊かなひとときを。
          <br />
          素材が持つ本来の味わいを最大限に引き出し、最高の状態で「熱々」のままお客様の元へお届けします。
        </p>
        <Link to="/concept" className="inline-block bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition">
          コンセプトページへ
        </Link>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-center">NEWS</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {newsData.map((item, index) => (
            <div key={index} className="bg-white p-6 shadow-md">
              <p className="text-sm text-gray-500">{item.date}</p>
              <span className={`inline-block bg-red-800 text-white text-xs px-2 py-1 my-2`}>
                {item.category}
              </span>
              <h3 className="font-bold">{item.title}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/news" className="inline-block bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition">
            お知らせ一覧へ
          </Link>
        </div>
      </div>
    </section>
  );
}

function MenuAndChef() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img src="https://source.unsplash.com/random/800x600/?cassolette" alt="Cassolette dish" className="w-full h-full object-cover shadow-lg"/>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-serif mb-4">MENU & CHEF</h2>
            <p className="text-gray-600 mb-8">
              シェフの故郷の味であり、生涯を捧げるスペシャリテ「カスレ」。
              厳選された食材と、伝統のレシピが織りなす情熱の煮込み料理をご堪能ください。
            </p>
            <Link to="/menu" className="inline-block bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition mr-4">
              メニュー詳細へ
            </Link>
            <Link to="/chef" className="inline-block bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition">
              シェフについて
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Instagram() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-8">INSTAGRAM</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Placeholder for Instagram feed */}
          {[...Array(6)].map((_, i) => (
            <div key={i} className="relative group aspect-square">
              <img
                src={`https://source.unsplash.com/random/600x600/?food,${i}`}
                alt={`Instagram post ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition">
                  View on Instagram
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Access() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-center">ACCESS & RESERVATION</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2 h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.931352039998!2d139.6984879762454!3d35.65409503128535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b455c9b233b%3A0x8b8337639c696853!2z44CSMTUwLTAwMzMg5p2x5Lqs6YO95riL6LC35Yy654Sg5qWk55S677yS77yZ4oiS77yR77yYIOODkeOCu-OCQ-OCv-ODvOODq-OCv-ODvA!5e0!3m2!1sja!2sjp!4v1726810011011!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <p className="mb-2"><strong>住所:</strong> 東京都渋谷区猿楽町29-18 ヒルサイドテラス</p>
            <p className="mb-2"><strong>電話番号:</strong> 03-3476-5025</p>
            <p className="mb-2"><strong>営業時間:</strong> 12:00-15:00 / 18:00-22:00</p>
            <p className="mb-4"><strong>定休日:</strong> 月曜日</p>
            <a href="#" className="inline-block w-full text-center bg-red-800 text-white px-8 py-4 text-lg font-bold hover:bg-red-700 transition">
              オンライン予約
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCTA() {
  return (
    <Link to="/reservation" className="fixed bottom-8 right-8 bg-red-800 text-white w-20 h-20 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition z-50">
      <span className="text-center text-sm font-bold">予約</span>
    </Link>
  );
}



// The loader can be used in the future to fetch dynamic data, for example, for the News section.
export function loader({ context }: Route.LoaderArgs) {
  // Example: return fetchNews();
  return { message: "Data loaded" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <div className="antialiased text-gray-800">
      <Hero />
      <Concept />
      <News />
      <MenuAndChef />
      <Instagram />
      <Access />
      <FloatingCTA />
    </div>
  );
}
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Restaurant Pachon | レストラン パッション" },
    { name: "description", content: "代官山のフレンチレストラン「パッション」。暖炉の火のように温かなフランス料理で、心満たされるひとときを。" },
  ];
}

