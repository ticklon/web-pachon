import type { Route } from "./+types/about";
import { Link } from "react-router"; // Keep Link if needed, though mostly using components
import { Header } from "~/components/Header";
import { Access } from "~/components/Access";
import { FloatingCTA } from "~/components/FloatingCTA";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "レストランについて | Restaurant PACHON" },
    { name: "description", content: "レストラン パッションの歴史と雰囲気。17世紀の暖炉と南フランスの邸宅のような空間。" },
  ];
}

export default function About() {
  return (
    <div className="antialiased text-gray-800">
      <Header />
      <main className="pt-12 sm:pt-16">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-serif mb-12 text-center">ABOUT US</h1>

            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-2xl font-serif mb-6">レストラン パッションへようこそ</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                暖炉の火のように、温かなフランス料理を。
                流行が移ろう街、代官山。その落ち着いた一角に佇むヒルサイドテラスの地下に、レストラン パッションは1984年の創業以来、変わることなくフランスの食文化を灯し続けてまいりました。
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
              <div className="md:w-1/2">
                <img src="/Pachon_inside-1.webp" alt="Restaurant Interior" className="w-full h-full object-cover shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-serif mb-6">南フランスの邸宅で、特別なひとときを</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  深紅の絨毯と、純白のテーブルクロスが映えるクラシックな空間。
                  そこはまるで、古き良きフランスの邸宅に招かれたかのような、重厚で落ち着いた雰囲気に満ちています。
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  お誕生日や記念日、大切な方とのご会食やご接待など、お客様の特別な一日を彩るのにふさわしいお料理と空間をご用意しております。
                  プライベートな時間を過ごせる個室もございますので、お気軽にお問い合わせください。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  フランス全土から厳選した豊富なワインの中から、常駐するソムリエがお客様のお好みとお料理に合わせた最高のマリアージュをご提案いたします。
                  皆様のお越しを、パッション・ファミリー一同、心よりお待ち申し上げております。
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Access />
      <FloatingCTA />
    </div>
  );
}
