import Image from "../atoms/Image";
import SectionDescription from "../organism/SectionDescription";

export default function CampaignTemplate() {
  return (
    <section
      id="campaign"
      className="py-36 flex items-center justify-center bg-white relative"
    >
      <div className="px-9 lg:px-[150px] items-center relative z-20">
        <div className="content-wrapper flex flex-col-reverse lg:flex-row items-center lg:gap-28">
          <div className="lg:ms-24">
            <SectionDescription
              title="Right Time, Effective Messages"
              description="Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar."
            />
          </div>
          <Image src="/images/campaign.png" width="w-[558px]" />
        </div>
      </div>
    </section>
  );
}
