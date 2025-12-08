import React from "react";

export function Access() {
    return (
        <section id="access" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-serif mb-8 text-center">
                    ACCESS & RESERVATION
                </h2>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/2 h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.931352039998!2d139.6984879762454!3d35.65409503128535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b455c9b233b%3A0x8b8337639c696853!2z44CSMTUwLTAwMzMg5p2x5Lqs6YO95riL6LC35Yy654Sg5qWk55S677yS77yZ4oiS77yR77yYIOODkeOCu-OCQ-OCv-ODvOODq-OCv-ODvA!5e0!3m2!1sja!2sjp!4v1726810011011!5m2!1sja!2sjp"
                            width="100%" height="100%" style={{ border: 0 }} allowFullScreen={false} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="md:w-1/2 text-center md:text-left">
                        <p className="mb-2">
                            <strong>住所:</strong> 東京都渋谷区猿楽町29-18 <br />ヒルサイドテラスB棟1号
                        </p>
                        <p className="mb-2">
                            <strong>電話番号:</strong> 03-3476-5025
                        </p>
                        <p className="mb-2">
                            <strong>営業時間:</strong> 12:00-15:00 / 18:00-22:00
                        </p>
                        <p className="mb-4">
                            <strong>定休日:</strong> 火曜日
                        </p>
                        <a href="https://res-reserve.com/ja/restaurants/149343-129c694b" target="_blank" rel="noopener noreferrer"
                            className="inline-block w-full text-center bg-red-800 text-white px-8 py-4 text-lg font-bold hover:bg-red-700 transition">
                            オンライン予約
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
