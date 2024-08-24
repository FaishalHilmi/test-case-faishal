export default function DashboardTemplate() {
  return (
    <section className="bg-white w-full text-black">
      <div className="p-5">
        <div className="content-wrapper bg-gray-100 rounded-xl min-h-screen py-6 px-6">
          <div className="header">
            <div className="w-full">
              <div className="content-contact flex items-center justify-end gap-4 mb-6">
                <div className=" bg-white w-fit p-3 rounded-full">
                  <img src="/images/bell.png" className="w-4 h-4" />
                </div>
                <div className=" bg-white w-fit p-1 rounded-full flex items-center">
                  <span className="font-medium ps-12 pe-4">Alif Rizki</span>
                  <div className="p-2 bg-customBlue rounded-full">
                    <img src="/images/user.png" className="w-4 h-4" />
                  </div>
                </div>
                <div className=" bg-white w-fit p-3 rounded-full">
                  <img src="/images/bell.png" className="w-4 h-4" />
                </div>
              </div>
              <div className="flex items-center justify-between mb-8">
                <h5 className="text-2xl font-bold">Selamat siang, Alifr</h5>
                <div className="date flex items-center gap-4 text-end">
                  <div className="date-time">
                    <span className="text-gray-300 text-sm block">
                      Tanggal hari ini
                    </span>
                    <span className="text-gray-500 text-sm">
                      Selasa, 29 Agustus 2023
                    </span>
                  </div>
                  <div>
                    <img src="/images/calendar.png" className="w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white rounded-lg pt-7 pb-2 px-9 w-[65%]">
                  <div className="package-wrapper flex gap-20">
                    <div className="w-full">
                      <div className="package flex items-center gap-5 mb-10">
                        <div className="w-[90px]">
                          <div className="ps-5 font-medium">Paket saat ini</div>
                        </div>
                        <div>
                          <div className="flex gap-1">
                            <h5 className="text-2xl font-bold">Starter</h5>
                            <div>
                              <span className="py-1 px-2 text-[10px] bg-black text-white rounded-lg ms-2">
                                Free
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="package flex items-center gap-5 mb-5">
                        <div className="w-[90px]">
                          <div className="ps-5 font-medium">Devices</div>
                        </div>
                        <div>
                          <div className="w-full rounded-full overflow-hidden h-3 bg-customGray">
                            <div className="w-[80%] h-3 rounded-full bg-customRed"></div>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">
                            8 dari 10 device yang tersedia
                          </p>
                        </div>
                      </div>
                      <div className="package flex items-center gap-5">
                        <div className="w-[90px]">
                          <div className="ps-5 font-medium">Contacts</div>
                        </div>
                        <div>
                          <div className="w-full rounded-full overflow-hidden h-3 bg-customGray">
                            <div className="w-[30%] h-3 rounded-full bg-customGreen"></div>
                          </div>
                          <p className="text-gray-300 text-sm mt-1">
                            5 dari 100 kontak yang tersedia
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="package ">
                        <div className="text-end mb-7">
                          <span className="text-gray-400 text-sm block">
                            Aktif sampai dengan{" "}
                          </span>
                          <span className="text-black">
                            Selasa, 29 Agustus 2023
                          </span>
                        </div>
                        <div className="text-end mb-6">
                          <span className="text-sm">
                            Upgrade paket untuk meningkatkan batasan fitur yang
                            ada
                          </span>
                        </div>
                        <div className="text-end mb-6">
                          <button className="w-full border border-customBlue text-customBlue py-1 rounded-lg">
                            Upgrade Paket
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center">
                    <a
                      href="#"
                      className="text-center mx-auto font-medium text-gray-400"
                    >
                      Tampilkan kapasitas fitur lainnya
                    </a>
                  </div>
                </div>
                <div className="message flex gap-28 w-[35%] bg-white rounded-lg pt-7 pb-2 px-9">
                  <div className="w-full">
                    <span className="text-black text-xl font-bold">
                      Pesan terakhir
                    </span>

                    <div className="message mt-2 flex flex-col gap-1">
                      <div className="message-item p-3 bg-customGray rounded-lg w-full flex items-center justify-between">
                        <div className="flex gap-2">
                          <div className="p-2 bg-customBlue rounded-full w-fit">
                            <img
                              src="/images/user.png"
                              className="w-4 h-4 mx-auto"
                            />
                          </div>
                          <div className="text-[10px]">
                            <p className="font-bold">Anda</p>
                            <p>Hai apa kabarmu hari ini? Semoga...</p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-customBlue text-white text-[10px] p-1 rounded-lg">
                            Terkirim
                          </div>
                        </div>
                      </div>
                      <div className="message-item p-3 bg-customGray rounded-lg w-full flex items-center justify-between">
                        <div className="flex gap-2">
                          <div className="p-2 bg-customBlue rounded-full w-fit">
                            <img
                              src="/images/user.png"
                              className="w-4 h-4 mx-auto"
                            />
                          </div>
                          <div className="text-[10px]">
                            <p className="font-bold">Anda</p>
                            <p>Hai apa kabarmu hari ini? Semoga...</p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-customBlue text-white text-[10px] p-1 rounded-lg">
                            Terkirim
                          </div>
                        </div>
                      </div>
                      <div className="message-item p-3 bg-customGray rounded-lg w-full flex items-center justify-between">
                        <div className="flex gap-2">
                          <div className="py-1 px-2 bg-customGreen rounded-full w-fit text-white">
                            IA
                          </div>
                          <div className="text-[10px]">
                            <p className="font-bold">Anda</p>
                            <p>Hai apa kabarmu hari ini? Semoga...</p>
                          </div>
                        </div>
                        <div>
                          <div className="bg-customGreen text-white text-[10px] p-1 rounded-lg">
                            Diterima
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
