// src/MyMenu.tsx
import LabelIcon from "@mui/icons-material/Label";
import { Menu, MenuItemLink } from "react-admin";

const MyMenu = () => (
  <Menu>
    <MenuItemLink to="/posts" primaryText="Posts" leftIcon={<LabelIcon />} />
    <MenuItemLink to="/comments" primaryText="Comments" />
    {/* <MenuItemLink
      to="/custom-route"
      primaryText="Miscellaneous"
      leftIcon={<LabelIcon />}
    /> */}
  </Menu>
);

export default MyMenu;
