export default function Button({ children }) {
  return (
    <button className="w-full text-center bg-customBlue font-inter text-white py-4 rounded-md mt-8">
      {children}
    </button>
  );
}
