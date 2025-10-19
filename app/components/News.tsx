import { Link } from "react-router";

const newsData = [
  {
    date: "2025.09.20",
    category: "EVENT",
    title: "11/5 オクシタン ディナー開催",
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


export function News() {
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

