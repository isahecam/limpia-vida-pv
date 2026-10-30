import { HomeIcon, PackageIcon } from "lucide-react";

import type { NavGroup } from "../types";

export const NAV_GROUPS: NavGroup[] = [
  {
    label: "General",
    items: [{ label: "Panel", route: "/", icon: HomeIcon }],
  },
  {
    label: "Operación",
    items: [{ label: "Productos", route: "/products", icon: PackageIcon }],
  },
];
