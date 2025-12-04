import type { Route } from "./+types/chef";
import { Header } from "~/components/Header";
import { Access } from "~/components/Access";
import { FloatingCTA } from "~/components/FloatingCTA";

export function meta({ }: Route.MetaArgs) {
    return [
        { title: "シェフについて | Restaurant PACHON" },
        { name: "description", content: "オーナーシェフ アンドレ・パッションの紹介。フランス料理の草分けとして、その普及に尽力してきた功績。" },
    ];
}

export default function Chef() {
    return (
        <div className="antialiased text-gray-800">
            <Header />
            <main className="pt-20">
                <section className="py-20 bg-gray-50">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-serif mb-12 text-center">CHEF</h1>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                            <div className="md:w-1/2">
                                <img src="/DSC_0343.webp" alt="Chef Andre Pachon" className="w-full h-full object-cover shadow-lg" />
                            </div>
                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-serif mb-2">オーナーシェフ</h2>
                                <h3 className="text-3xl font-serif mb-6">アンドレ・パッション</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    1944年、南フランスのモンペリエに生まれ、城塞都市カルカッソンヌで育ちました。
                                    16歳で「カスレの王様」と名高いマルセル・エメリック氏に師事し、料理人としての道を歩み始めます。
                                </p>
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    1970年の大阪万国博覧会を機に来日。
                                    運命的な出会いを経て日本に留まり、名店でシェフを務めた後、1984年に代官山で「レストラン パッション」を開店しました。
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                    日本におけるフランス料理の草分けとして、その普及に尽力してきた功績が認められ、フランス共和国より最高勲章である「レジオン・ドヌール勲章」をはじめ、数々の栄誉ある勲章を授与されています。
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
