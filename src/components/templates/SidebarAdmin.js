import DropwdownAdmin from "../molecules/DropdownAdmin";

export default function SidebarAdmin() {
  const dropdownContacts = [
    { label: "Contacts", icon: "/images/contacts_black.png", href: "#" },
    { label: "Groups", icon: "/images/group.png", href: "#" },
  ];

  const dropdownMesage = [
    { label: "Messenger", icon: "/images/messenger.png", href: "#" },
    { label: "Incoming Chat", icon: "/images/incoming_chat.png", href: "#" },
    { label: "Outgoing Chat", icon: "/images/forward_to_inbox.png", href: "#" },
  ];

  return (
    <aside className="bg-white w-60 min-h-screen">
      <div className="sidebar px-4 pt-11 pb-5">
        <div className="sidebar-warpper">
          <img
            src="/images/logo-blue.png"
            alt="Logo"
            className="w-36 mx-auto mb-7"
          />
        </div>
        <div>
          <ul>
            <li>
              <button className="bg-customBlue flex items-center gap-2 py-2 px-6 w-full rounded-xl">
                <img src="/images/dashboard.png" className="w-4 h-4" />
                <span>Dashboard</span>
              </button>
            </li>
            <li>
              <button className="bg-white hover:bg-customGray text-black flex items-center gap-2 py-2 px-6 w-full rounded-xl">
                <img src="/images/device.png" className="w-4 h-4" />
                <span>Device</span>
              </button>
            </li>
            <li>
              <DropwdownAdmin
                label="Contacts"
                icon="/images/contacts_black.png"
                items={dropdownContacts}
              />
            </li>
            <li>
              <DropwdownAdmin
                label="Messenger"
                icon="/images/incoming_chat.png"
                items={dropdownMesage}
              />
            </li>
            <li>
              <span className="text-sm text-black py-2">Tools</span>
            </li>
            <li>
              <button className="bg-white hover:bg-customGray text-black flex items-center gap-2 py-2 px-6 w-full rounded-xl">
                <img src="/images/broadcast_icon.png" className="w-4 h-4" />
                <span>Broadcast</span>
              </button>
            </li>
            <li>
              <button className="bg-white hover:bg-customGray text-black flex items-center gap-2 py-2 px-6 w-full rounded-xl">
                <img src="/images/campaign_icon.png" className="w-4 h-4" />
                <span>Campaign</span>
              </button>
            </li>
            <li>
              <button className="bg-white hover:bg-customGray text-black flex items-center gap-2 py-2 px-6 w-full rounded-xl">
                <img src="/images/auto_reply_icon.png" className="w-4 h-4" />
                <span>Auto Reply</span>
              </button>
            </li>
            <li>
              <button className="bg-white hover:bg-customGray text-black flex items-center gap-2 py-2 text-start px-6 w-full rounded-xl">
                <img src="/images/customer_service.png" className="w-4 h-4" />
                <span>Customer Service</span>
              </button>
            </li>
            <li>
              <button className="bg-white hover:bg-customGray text-black text-start flex items-center gap-2 py-2 px-6 w-full rounded-xl">
                <img src="/images/analytics.png" className="w-4 h-4" />
                <span>Analytics</span>
              </button>
            </li>
            <li>
              <button className="bg-white hover:bg-customGray text-black text-start flex items-center gap-2 py-2 px-6 w-full rounded-xl">
                <img src="/images/api.png" className="w-4 h-4" />
                <span>Forwardin API</span>
              </button>
            </li>
            <li>
              <span className="text-sm text-black py-2">Others</span>
            </li>
            <li>
              <button className="bg-white hover:bg-customGray text-black flex items-center gap-2 py-2 px-6 w-full rounded-xl">
                <img src="/images/settings.png" className="w-4 h-4" />
                <span>Settings</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
