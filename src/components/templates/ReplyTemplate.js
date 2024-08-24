import Image from "../atoms/Image";
import SectionDescription from "../organism/SectionDescription";

export default function ReplyTemplate() {
  return (
    <section
      id="reply"
      className="py-36 flex items-center justify-center bg-customGray relative"
    >
      <div className="px-9 lg:px-[150px] relative z-20">
        <div className="content-wrapper flex flex-col lg:flex-row items-center lg:gap-28">
          <div className="lg:ms-24">
            <Image src="/images/auto-reply.png" />
          </div>
          <SectionDescription
            title="Respond Faster with the Convenience of Auto Reply"
            description="Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin."
          />
        </div>
      </div>
    </section>
  );
}
