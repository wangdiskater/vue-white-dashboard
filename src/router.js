import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Activity from "@/pages/Activity.vue";
import Tool from "@/pages/Tool.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
import Tracker from "@/pages/Tracker.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        cn: "仪表盘",
        component: Dashboard,
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons,
      },
      {
        path: "activity",
        name: "Activity",
        component: Activity,
      },
      {
        path: "tool",
        name: "Tool",
        component: Tool,
      },
      {
        path: "tracker",
        name: "Tracker",
        component: Tracker,
      },
      {
        path: "maps",
        name: "Maps",
        component: Maps,
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications,
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile,
      },
      {
        path: "table",
        name: "Table List",
        component: TableList,
      },
      {
        path: "typography",
        name: "Typography",
        component: Typography,
      },
      {
        path: "upgradeToPro",
        name: "Upgrade to PRO",
        component: UpgradeToPRO,
      },
    ],
  },
];

export default routes;
