import Image from "../atoms/Image";
import HeroDescription from "../organism/HeroDescription";

export default function HeroTemplate() {
  return (
    <section
      id="started"
      className="min-h-screen flex items-center justify-center bg-customGray relative"
    >
      <div>
        <img
          src="/images/background-pattern.png"
          className="absolute w-[54.894em] lg:w-[164.5em] top-0 z-0"
        />
      </div>
      <div className="hero px-9 lg:px-[150px] items-center relative z-20">
        <div className="content-wrapper flex flex-col-reverse lg:flex-row items-center lg:gap-28">
          <div className="lg:ms-24">
            <HeroDescription
              title="Elevate Your Messaging Efficiency with Our Innovative Admin Tools"
              description="Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah
        dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan
        fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan
        fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan
        manajemen konten yang praktis."
            />
          </div>
          <Image src="/images/dashboard-mockup.png" width="w-[558px]" />
        </div>
      </div>
    </section>
  );
}
