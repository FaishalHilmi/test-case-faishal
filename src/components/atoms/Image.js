export default function Image({ src, width = "w-full" }) {
  return <img src={src} alt="Mockup" className={`w-full lg:${width}`} />;
}
