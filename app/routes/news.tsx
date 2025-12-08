import type { Route } from "./+types/news";
import { Header } from "~/components/Header";
import { Access } from "~/components/Access";
import { FloatingCTA } from "~/components/FloatingCTA";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "お知らせ | Restaurant PACHON" },
        { name: "description", content: "レストラン パッションからのお知らせ。イベント情報や季節のメニューなど。" },
    ];
}

export default function News() {
    return (
        <div className="antialiased text-gray-800">
            <Header />
            <main className="pt-12 sm:pt-16">
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-serif mb-12 text-center">NEWS</h1>

                        <div className="max-w-3xl mx-auto">
                            {/* News Item 1 */}
                            <article className="mb-12 border-b border-gray-200 pb-12">
                                <div className="text-sm text-gray-500 mb-2">2024.02.20</div>
                                <h2 className="text-2xl font-serif mb-4">世界大会優勝のお知らせ</h2>
                                <p className="text-gray-600 leading-relaxed mb-4">
                                    この度、フランスで開催されたカスレ世界大会において、当店が優勝の栄誉に輝きました。
                                    シェフの故郷の味であり、生涯を捧げるスペシャリテ「カスレ」が世界に認められたことを、大変嬉しく思います。
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    これもひとえに、長年支えてくださった皆様のおかげです。
                                    これからも、この味を守り続け、皆様に最高のフランス料理をお届けしてまいります。
                                </p>
                            </article>

                            {/* Placeholder for more news */}
                            <article className="mb-12 border-b border-gray-200 pb-12">
                                <div className="text-sm text-gray-500 mb-2">2024.01.01</div>
                                <h2 className="text-2xl font-serif mb-4">新年のご挨拶</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    新年あけましておめでとうございます。
                                    本年も変わらぬご愛顧のほど、よろしくお願い申し上げます。
                                </p>
                            </article>
                        </div>
                    </div>
                </section>
            </main>
            <Access />
            <FloatingCTA />
        </div>
    );
}
