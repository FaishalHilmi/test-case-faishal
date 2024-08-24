import DashboardTemplate from "@/components/templates/DashboardTemplate";
import SidebarAdmin from "@/components/templates/SidebarAdmin";

export default function Dashboard({ children }) {
  return (
    <div className="flex">
      <SidebarAdmin />
      <DashboardTemplate />
    </div>
  );
}
