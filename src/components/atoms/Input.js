export default function Input({
  type = "text",
  name,
  placeholder,
  value,
  onChange,
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="py-4 px-5 border-2 border-customGray font-inter rounded-md w-full focus:outline-black"
    />
  );
}
