import TextDescription from "../molecules/TextDescription";

export default function HeroDescription({ title, description }) {
  return (
    <TextDescription>
      <h4 className="text-2xl lg:text-3xl font-bold text-black font-lexend">
        {title}
      </h4>
      <p className="font-inter font-medium text-black text-sm">{description}</p>
      <div>
        <button className="px-9 py-1 bg-black text-white flex items-center text-sm rounded-md">
          Daftar Sekarang <img src="/images/arrow-right.png" className="w-9" />
        </button>
      </div>
    </TextDescription>
  );
}
