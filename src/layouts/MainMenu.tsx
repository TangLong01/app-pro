import MenuItem from "@layouts/MenuItem";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import React from "react";
import { Menu } from "react-admin";

const MainMenu: React.FC = () => {
  const menuItems = [
    {
      to: "/expenses",
      primaryText: "Expenses",
      leftIcon: <ShoppingCartCheckoutIcon />,
    },
    {
      to: "/settings",
      primaryText: "Settings",
      leftIcon: <SettingsIcon />,
      subMenuItems: [
        {
          to: "/settings/general",
          primaryText: "General",
          leftIcon: <CategoryIcon />,
        },
        {
          to: "/settings/advanced",
          primaryText: "Advanced",
          leftIcon: <CategoryIcon />,
          subMenuItems: [
            {
              to: "/settings/advanced/option1",
              primaryText: "Option 1",
              leftIcon: <CategoryIcon />,
            },
            {
              to: "/settings/advanced/option2",
              primaryText: "Option 2",
              leftIcon: <CategoryIcon />,
              subMenuItems: [
                {
                  to: "/settings/advanced/test1",
                  primaryText: "Test 1",
                  leftIcon: <CategoryIcon />,
                },
                {
                  to: "/settings/advanced/test2",
                  primaryText: "Test 2",
                  leftIcon: <CategoryIcon />,
                },
              ],
            },
          ],
        },
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
