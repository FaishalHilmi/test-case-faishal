export default function AuthTemplate({ title, description, children }) {
  return (
    <main className="bg-white lg:bg-customGray text-black font-lexend">
      <section className="px-9 lg:px-[150px] md: min-h-screen">
        <div className="flex justify-center relative">
          <div className="logo-wrapper pt-11 absolute mx-auto lg:mx-0 lg:left-0">
            <div className="logo-image mx-auto lg:mx-0 w-[135px] lg:w-[177px]">
              <img src="/images/Logo.png" className="w-full" />
            </div>
          </div>
        </div>
        <div className="content min-h-screen flex items-center justify-around">
          <div className="form-content hidden lg:flex justify-center lg:w-[40%]">
            <div className="form-content-wrapper">
              <img
                src="/images/dashboard-mockup.png"
                alt="Mockup Image"
                className="w-[465px] "
              />
              <div className="text-content">
                <h5 className="mb-4 text-2xl font-bold">
                  Elevate Your Messaging Efficiency with Our Innovative Admin
                  Tools
                </h5>
                <p className="font-medium text-sm leading-4">
                  Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi
                  lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi
                  Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan
                  kontak menjadi lebih praktis dengan fitur sinkronasi Google
                  Concact. Dapatkan kendali penuh pesan dengan manajemen konten
                  yang praktis.
                </p>
              </div>
            </div>
          </div>
          <div className="form-section w-full lg:w-[40%]">
            <div className="w-full lg:bg-white lg:shadow-lg lg:rounded-2xl lg:py-10 lg:px-8">
              <div className="title text-center text-black mb-8 lg:mb-6">
                <h5 className="text-2xl font-bold tracking-custom leading-5 lg:leading-7">
                  {title}
                </h5>
                <p className="text-sm font-inter font-medium tracking-custom leading-5">
                  {description}
                </p>
              </div>
              <div className="form-wrapper">{children}</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
