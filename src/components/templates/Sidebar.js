"use client";

export default function Sidebar({ activeSection }) {
  const handleScroll = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <aside className="bg-transparent border-l-2 fixed top-[40%] left-10 z-50 hidden lg:block">
      <div className="container px-4 flex items-center justify-start">
        <div className="flex flex-col">
          <button
            className={` hover:text-black text-start ${
              activeSection === "started"
                ? "text-black font-bold"
                : "text-gray-400"
            }`}
            onClick={() => handleScroll("started")}
          >
            Get Started
          </button>

          <button
            className={` hover:text-black text-start ${
              activeSection === "broadcast"
                ? "text-black font-bold"
                : "text-gray-400"
            }`}
            onClick={() => handleScroll("broadcast")}
          >
            Broadcast
          </button>
          <button
            className={` hover:text-black text-start ${
              activeSection === "campaign"
                ? "text-black font-bold"
                : "text-gray-400"
            }`}
            onClick={() => handleScroll("campaign")}
          >
            Campaign
          </button>
          <button
            className={` hover:text-black text-start ${
              activeSection === "reply"
                ? "text-black font-bold"
                : "text-gray-400"
            }`}
            onClick={() => handleScroll("reply")}
          >
            Auto Reply
          </button>
          <button
            className={` hover:text-black text-start ${
              activeSection === "opportunity"
                ? "text-black font-bold"
                : "text-gray-400"
            }`}
            onClick={() => handleScroll("opportunity")}
          >
            Opportunity
          </button>
          <button
            className={` hover:text-black text-start ${
              activeSection === "pricing"
                ? "text-black font-bold"
                : "text-gray-400"
            }`}
            onClick={() => handleScroll("pricing")}
          >
            Pricing
          </button>
          <button
            className={` hover:text-black text-start ${
              activeSection === "faq" ? "text-black font-bold" : "text-gray-400"
            }`}
            onClick={() => handleScroll("faq")}
          >
            FAQ
          </button>
          <button
            className={` hover:text-black text-start ${
              activeSection === "contact"
                ? "text-black font-bold"
                : "text-gray-400"
            }`}
            onClick={() => handleScroll("contact")}
          >
            Contact
          </button>
        </div>
      </div>
    </aside>
  );
}
