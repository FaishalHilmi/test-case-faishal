import TextDescription from "../molecules/TextDescription";

export default function SectionDescription({ title, description }) {
  return (
    <TextDescription>
      <h4 className="text-2xl lg:text-3xl font-bold text-black font-lexend">
        {title}
      </h4>
      <p className="font-inter font-medium text-black text-sm">{description}</p>
    </TextDescription>
  );
}
