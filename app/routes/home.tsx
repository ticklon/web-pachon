import type { Route } from "./+types/home";
import { Link } from "react-router";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { Access } from "~/components/Access";
import { News } from "~/components/News";
import { FloatingCTA } from "~/components/FloatingCTA";

// --- Data for News Section ---
// Using React Router's loader function is considered for future data fetching.
// --- Components for each section ---

function Concept() {
  return (
    <section id="concept" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-serif mb-4">CONCEPT</h2>
        <p className="text-gray-600 mb-8 max-w-4xl mx-auto">
          暖炉の火のように温かなフランスの郷土料理を通して、心満たされる豊かなひとときを。
          <br />
          素材が持つ本来の味わいを最大限に引き出し、最高の状態で「熱々」のままお客様の元へお届けします。
        </p>
        <Link
          to="/concept"
          className="inline-block bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition"
        >
          コンセプトページへ
        </Link>
      </div>
    </section>
  );
}
function History() {
  return (
    <section id="history" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/Pachon_inside-1.webp"
              alt="Restaurant Interior with Fireplace"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-serif mb-4">HISTORY & ATMOSPHERE</h2>
            <p className="text-gray-600 mb-4">
              1984年の創業以来、変わることなくフランスの食文化を灯し続けてまいりました。
            </p>
            <p className="text-gray-600 mb-4">
              私たちのレストランの主役は、17世紀フランスの修道院から受け継いだ本物の暖炉。
              <br className="sm:hidden" />
              <br className="sm:hidden" />
              パチパチと薪がはぜる音、
              <br className="sm:hidden" />
              そして香ばしい匂いが、
              <br className="sm:hidden" />
              お客様を南フランスの邸宅へとお招きします。
              <br className="sm:hidden" />
            </p>
            <p className="text-gray-600 mb-8">
              ここは、ただお食事を召し上がっていただく場所ではありません。
              <br className="sm:hidden" />
              <br className="sm:hidden" />
              暖炉の火のように温かな
              <br className="sm:hidden" />
              フランスの郷土料理を通して、
              <br className="sm:hidden" />
              心満たされる豊かなひとときを
              <br className="sm:hidden" />
              お過ごしいただくための空間です。
            </p>
            <Link
              to="/about"
              className="inline-block bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition"
            >
              パッションについて
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuAndChef() {
  return (
    <section id="menu" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="/cassoulet.webp"
              alt="Cassolette dish"
              className="w-full h-full object-cover shadow-lg"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-serif mb-4">MENU & CHEF</h2>
            <p className="text-gray-600 mb-8">
              シェフの故郷の味であり、生涯を捧げるスペシャリテ「カスレ」。
              厳選された食材と、伝統のレシピが織りなす情熱の煮込み料理をご堪能ください。
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link
                to="/menu"
                className="bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition"
              >
                メニュー詳細へ
              </Link>
              <Link
                to="/chef"
                className="bg-gray-800 text-white px-8 py-3 hover:bg-gray-700 transition"
              >
                シェフについて
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
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
      <Header />
      <Hero />
      <Concept />
      <News />
      <History />
      <MenuAndChef />
      <Access />
      <FloatingCTA />
    </div>
  );
}
export function meta({ }: Route.MetaArgs) {
  return [
    {
      title:
        "Restaurant PACHON 代官山の老舗フランス料理 【レストラン パッション】 | 17世紀の暖炉と世界一のカスレをフレンチレストランで堪能",
    },
    {
      name: "description",
      content:
        "代官山のフレンチレストラン「パッション」。暖炉の火のように温かなフランス料理で、心満たされるひとときを。",
    },
  ];
}
