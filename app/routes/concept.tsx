import type { Route } from "./+types/concept";
import { Header } from "~/components/Header";
import { Access } from "~/components/Access";
import { FloatingCTA } from "~/components/FloatingCTA";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "コンセプト | Restaurant PACHON" },
        { name: "description", content: "レストラン パッションのコンセプト。味わいの真髄を求めて、素材が持つ本来の味わいを最大限に引き出します。" },
    ];
}

export default function Concept() {
    return (
        <div className="antialiased text-gray-800">
            <Header />
            <main className="pt-12 sm:pt-16">
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-serif mb-12 text-center">PHILOSOPHY</h1>
                        <div className="flex flex-col md:flex-row items-center gap-12">
                            <div className="md:w-1/2">
                                <img src="/DSC_0013.webp" alt="Restaurant Interior" className="w-full h-full object-cover shadow-lg" />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-serif mb-6">味わいの真髄を求めて</h2>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    「フランス料理は、目で味わうものではなく、口で味わうもの」
                                    <br />
                                    オーナーシェフ、アンドレ・パッションが半世紀以上にわたり守り続けてきた信念です。
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    過度な装飾よりも、素材が持つ本来の味わいを最大限に引き出すこと。
                                    そして、温かいお料理は、最高の状態で「熱々」のままお客様の元へお届けすること。
                                    私たちは、この基本に忠実であり続けます。
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    「郷土料理こそが、本物のフランス料理」
                                    <br />
                                    私たちの料理の根幹にあるのは、シェフの故郷ラングドック地方をはじめとする、フランス各地の伝統的な郷土料理（Cuisine de Terroir）です。
                                    旬の食材を使い、余計な細工はせず、ただ時間を惜しみなくかけてじっくりと煮込む。
                                    そうして生まれる滋味深い味わいこそ、私たちが届けたいフランス料理の魂です。
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
