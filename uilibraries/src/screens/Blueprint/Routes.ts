import { IconName, IconNames } from "@blueprintjs/icons";
import GridDemo from "./Pages/GridDemo";
import SideNavDemo from "./Pages/SideNavDemo";
import DragDropDemo from "./Pages/DragDrop/DragDropDemo";
import DynaGrid from "./Pages/DynaGrid";

export interface IRoute {
  to: string;
  text: string;
  icon: IconName;
  page: any;
  hasSubRoutes?: boolean;
}

const Routes: Array<IRoute> = [
  {
    to: "/grid",
    text: "Grid Demo",
    icon: IconNames.GRID,
    page: GridDemo,
  },
  {
    to: "/sidenav",
    text: "Side Nav Demo",
    icon: IconNames.BRIEFCASE,
    page: SideNavDemo,
  },
  {
    to: "/dragdrop",
    text: "Drag & Demo",
    icon: IconNames.CARET_RIGHT,
    page: DragDropDemo,
    hasSubRoutes: true,
  },
  {
    to: "/dg",
    text: "DynaGrid",
    icon: IconNames.FAST_BACKWARD,
    page: DynaGrid,
  },
];

export default Routes;
