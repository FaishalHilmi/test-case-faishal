export default function Card({ title, description, monthPrice, yearPrice }) {
  return (
    <div className="card font-lexend bg-white hover:shadow-xl p-4 rounded-lg transition-shadow duration-300">
      <div className="card-header mb-4">
        <div className="header mb-3">
          <h6 className="text-xl text-black font-bold mb-1">{title}</h6>
          <p className="text-black text-sm">{description}</p>
        </div>
        <div className="price text-black mb-4">
          <h6 className="text-xl font-bold mb-1">
            Rp. {monthPrice} <sub className="font-medium">/bulan</sub>
          </h6>
          <span className="text-gray-400 text-sm">Rp. {yearPrice} /tahun</span>
        </div>
        <div>
          <button className="bg-customBlue hover:bg-customYellow transition-colors duration-300 text-white text-sm font-medium font-inter py-3 px-6 rounded-md w-full">
            Get Started
          </button>
        </div>
      </div>
      <div className="card-body text-black">
        <ul className="flex flex-col gap-2 text-sm">
          <li className="flex items-center gap-2">
            <img src="/images/time_auto.png" className="w-6" />
            <span>100 Auto reply</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/images/cast.png" className="w-6" />
            <span>500 Broadcast</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/images/data_exploration.png" className="w-6" />
            <span>50 Campaign</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/images/contacts.png" className="w-6" />
            <span>500 Contact</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/images/ad_units.png" className="w-6" />
            <span>50 Device</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/images/article.png" className="w-6" />
            <span>Excel / CSV Contact Import</span>
          </li>
          <li className="flex items-center gap-2">
            <img src="/images/sync_saved_locally.png" className="w-6" />
            <span>Google Contact Sync</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
