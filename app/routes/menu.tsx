import type { Route } from "./+types/menu";
import { Header } from "~/components/Header";
import { Access } from "~/components/Access";
import { FloatingCTA } from "~/components/FloatingCTA";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "メニュー | Restaurant PACHON" },
        { name: "description", content: "レストラン パッションのスペシャリテ。暖炉焼きと世界一のカスレ。" },
    ];
}

export default function Menu() {
    return (
        <div className="antialiased text-gray-800">
            <Header />
            <main className="pt-12 sm:pt-16">
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-serif mb-12 text-center">SPECIALITIES</h1>

                        {/* Fireplace Section */}
                        <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                            <div className="md:w-1/2">
                                <img src="/DSC_0041.webp" alt="Fireplace Cooking" className="w-full h-full object-cover shadow-lg" />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-serif mb-6">暖炉焼き ― 炎が織りなす至福の味わい</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    店の奥で赤々と燃える暖炉は、私たちの料理の心臓部です。
                                    厳選された牛肉や鴨などを直火でじっくりと焼き上げることで、余分な脂は落ち、薪の香ばしい薫りをまとった、シンプルかつ究極の一皿が生まれます。
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    お客様の目の前で切り分ける伝統的なサービス「デクパージュ」と共に、五感で味わう食の劇場をお楽しみください。
                                </p>
                            </div>
                        </div>

                        {/* Cassoulet Section */}
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="md:w-1/2">
                                <img src="/cassoulet.webp" alt="Cassoulet" className="w-full h-full object-cover shadow-lg" />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-serif mb-6">カスレ ― 世界一の称号を得た、情熱の煮込み料理</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    シェフの故郷の味であり、生涯を捧げるスペシャリテが「カスレ」です。
                                    師から受け継いだ伝統的なルセットを忠実に守り、煮込んでも皮が破れにくい最高級の白いんげん豆「タルブ産」を贅沢に使用。
                                    自家製のソーセージや鴨肉と共に、土鍋で長時間かけて煮込みます。
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    「熱々であることが生命線」という哲学のもと、お食事の最後まで最高の温度でお楽しみいただけるよう、暖炉のそばで保温しながらご提供いたします。
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    2024年には世界大会で優勝の栄誉にも輝いた、私たちの情熱の結晶をぜひご賞味ください。
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
