"use client";
import { useState } from "react";
import Dropdown from "../molecules/Dropdown";

export default function OpportunityTemplate() {
  const [active, setActive] = useState("business");

  const handleActiveBusiness = () => {
    setActive("business");
  };
  const handleActiveCommercial = () => {
    setActive("commercial");
  };
  const handleActiveOrganization = () => {
    setActive("organization");
  };

  const dropdownItems = [
    { label: "Komersial dan Penjualan", href: "#" },
    { label: "Organisasi Sosial", href: "#" },
  ];
  return (
    <section
      id="opportunity"
      className="py-28 lg:py-32 flex items-center justify-center bg-white relative"
    >
      <div className="px-9 lg:px-[150px] lg:ms-24 items-center relative z-20">
        <div>
          <h4 className="text-3xl font-bold text-customBlue font-lexend text-center mb-6 lg:mb-14">
            <span className="block">
              "One Step Closer to More Effective and{" "}
              <span className="lg:hidden">Connected Communication!"</span>
            </span>
            <span className="hidden lg:block">Connected Communication!"</span>
          </h4>
          <div className="content">
            <div className="content-wrapper lg:flex items-center">
              <img
                src="/images/opportunity.png"
                className="w-64 mx-auto mb-9 lg:mb-0"
              />
              <div className="content-description lg:ps-12">
                <div className="button-mobile lg:hidden mb-6">
                  <Dropdown
                    label="Bisnis dan Pemasaran"
                    items={dropdownItems}
                  />
                </div>
                <div className="button-desktop hidden lg:block mb-7">
                  <div className="button-desktop-wrapper flex gap-4">
                    <button
                      onClick={handleActiveBusiness}
                      className={`py-2 px-6 w-full border border-customBlue rounded-lg ${
                        active == "business"
                          ? "bg-customBlue text-white"
                          : "text-customBlue"
                      }`}
                    >
                      Bisnis dan Pemasaran
                    </button>
                    <button
                      onClick={handleActiveCommercial}
                      className={`py-2 px-6 w-full border border-customBlue rounded-lg ${
                        active == "commercial"
                          ? "bg-customBlue text-white"
                          : "text-customBlue"
                      }`}
                    >
                      Komersial dan Penjualan
                    </button>
                    <button
                      onClick={handleActiveOrganization}
                      className={`py-2 px-6 w-full border border-customBlue rounded-lg ${
                        active == "organization"
                          ? "bg-customBlue text-white"
                          : "text-customBlue"
                      }`}
                    >
                      Organisasi Sosial
                    </button>
                  </div>
                </div>
                <p className="text-sm font-medium text-black">
                  Bidang ini dapat memanfaatkan fitur broadcast untuk mengirim
                  promosi, pengumuman, dan informasi produk kepada pelanggan
                  dalam jumlah besar secara efisien. Sementara itu, fitur
                  campaign dapat membantu merencanakan dan menyampaikan pesan
                  iklan dengan waktu yang tepat kepada target audiens yang
                  sesuai.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
