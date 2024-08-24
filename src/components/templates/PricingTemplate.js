"use client";
import { useState } from "react";
import Card from "../molecules/Card";

export default function PricingTemplate() {
  const [active, setActive] = useState("monthly");

  const cardPricing = [
    {
      title: "Basic",
      description:
        "Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      monthPrice: "65.000",
      yearPrice: "650.000",
    },
    {
      title: "Premium",
      description:
        "Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      monthPrice: "78.000",
      yearPrice: "800.000",
    },
    {
      title: "Pro",
      description:
        "Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.",
      monthPrice: "86.000",
      yearPrice: "900.000",
    },
  ];

  const handleMonthlyActive = () => {
    setActive("monthly");
  };
  const handleYearlyActive = () => {
    setActive("yearly");
  };

  return (
    <section
      id="pricing"
      className="py-11 lg:py-32 flex items-center justify-center bg-white relative"
    >
      <div className="px-9 lg:px-[150px] lg:ms-24 items-center relative z-20">
        <div className="lg:ps-12">
          <h6 className="text-xl font-bold text-black font-lexend text-center mb-1">
            Our Pricing
          </h6>
          <h4 className="text-3xl font-bold text-black font-lexend text-center mb-12 p-0">
            Subscription
          </h4>
          <div className="content">
            <div className="content-wrapper lg:flex items-center">
              <div className="content-description">
                <div className="button mb-7 mx-auto w-fit">
                  <div className="button-wrapper p-2 rounded-full bg-white shadow-xl w-fit flex gap-2">
                    <button
                      onClick={handleMonthlyActive}
                      className={`py-2 px-6 rounded-full ${
                        active == "monthly"
                          ? "text-customGray bg-customBlue"
                          : "text-black bg-transparent"
                      }`}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={handleYearlyActive}
                      className={`py-2 px-6 rounded-full ${
                        active == "yearly"
                          ? "text-customGray bg-customBlue"
                          : "text-black bg-transparent"
                      }`}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
                <div className="card-price grid grid-cols-1 gap-1 lg:grid-cols-4">
                  <div className="card font-lexend bg-white hover:shadow-xl p-4 rounded-lg transition-shadow duration-300">
                    <div className="card-header mb-4">
                      <div className="header mb-3">
                        <h6 className="text-xl text-black font-bold mb-1">
                          Starter
                        </h6>
                        <p className="text-black text-sm">
                          Mulai perjalanan Anda dengan paket Starter selama 14
                          hari. Nikmati pesan otomatis, siaran pesan, dan
                          manajemen kontak yang efisien. Dapatkan integrasi yang
                          membantu dan sinkronisasi kontak WhatsApp.
                        </p>
                      </div>
                      <div className="price text-black mb-4">
                        <h6 className="text-xl font-bold mb-1">Gratis</h6>
                        <span className="text-gray-400 text-sm">-</span>
                      </div>
                      <div>
                        <button className="bg-customBlue hover:bg-customYellow transition-colors duration-300 text-white text-sm font-medium font-inter py-3 px-6 rounded-md w-full">
                          Get Started
                        </button>
                      </div>
                    </div>
                    <div className="card-body text-black">
                      <ul className="flex flex-col gap-2 text-sm">
                        <li className="flex items-center gap-2">
                          <img src="/images/time_auto.png" className="w-6" />
                          <span>100 Auto reply</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <img src="/images/cast.png" className="w-6" />
                          <span>500 Broadcast</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <img
                            src="/images/data_exploration.png"
                            className="w-6"
                          />
                          <span>50 Campaign</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <img src="/images/contacts.png" className="w-6" />
                          <span>500 Contact</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <img src="/images/ad_units.png" className="w-6" />
                          <span>50 Device</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <img src="/images/article.png" className="w-6" />
                          <span>Excel / CSV Contact Import</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <img
                            src="/images/sync_saved_locally.png"
                            className="w-6"
                          />
                          <span>Google Contact Sync</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {cardPricing.map((card, index) => (
                    <Card
                      title={card.title}
                      description={card.description}
                      monthPrice={card.monthPrice}
                      yearPrice={card.yearPrice}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
