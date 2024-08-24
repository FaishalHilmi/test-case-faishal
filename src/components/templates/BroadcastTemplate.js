import Image from "../atoms/Image";
import SectionDescription from "../organism/SectionDescription";

export default function BroadcastTemplate() {
  return (
    <section
      id="broadcast"
      className="py-36 flex items-center justify-center bg-customGray relative"
    >
      <div className="px-9 lg:px-[150px] relative z-20">
        <div className="content-wrapper flex flex-col lg:flex-row items-center lg:gap-28">
          <div className="lg:ms-24">
            <Image src="/images/broadcast.png" />
          </div>
          <SectionDescription
            title="Reach Further with Ease"
            description="Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini."
          />
        </div>
      </div>
    </section>
  );
}
