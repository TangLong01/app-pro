import MenuItem from "@layouts/MenuItem";
import LabelIcon from "@mui/icons-material/Label";
import SettingsIcon from "@mui/icons-material/Settings";
import { Menu } from "react-admin";

const MainMenu: React.FC = () => {
  const menuItems = [
    {
      to: "/expenses",
      primaryText: "Expenses",
      leftIcon: <LabelIcon />,
    },
    {
      to: "/settings",
      primaryText: "Settings",
      leftIcon: <SettingsIcon />,
      subMenuItems: [
        { to: "/settings/general", primaryText: "General" },
        { to: "/settings/advanced", primaryText: "Advanced" },
      ],
    },
  ];

  return (
    <Menu>
      <MenuItem items={menuItems} />
    </Menu>
  );
};

export default MainMenu;
