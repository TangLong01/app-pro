import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState, ReactElement } from "react";
import { MenuItemLink } from "react-admin";
import { useLocation } from "react-router-dom";

interface MenuItem {
  to: string;
  primaryText: string;
  leftIcon?: ReactElement;
  subMenuItems?: MenuItem[];
}

interface MenuItemProps {
  items: MenuItem[];
}

const MenuItem: React.FC<MenuItemProps> = ({ items }) => {
  const location = useLocation();
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const isActive = (path: string) => location.pathname.includes(path);

  const handleClick = (text: string) => {
    setOpen((prevOpen) => ({ ...prevOpen, [text]: !prevOpen[text] }));
  };

  const renderMenuItem = (item: MenuItem, level: number) => (
    <React.Fragment key={item.to}>
      {item.subMenuItems ? (
        <>
          <ListItem
            button
            onClick={() => handleClick(item.primaryText)}
            sx={{ pl: level == 0 ? 2 : level * 4, py: 1.5 }}
          >
            <ListItemIcon sx={{ minWidth: 40, pr: level == 0 ? 2 : 0 }}>
              {item.leftIcon}
            </ListItemIcon>
            <ListItemText primary={item.primaryText} />
            {open[item.primaryText] ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open[item.primaryText]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.subMenuItems.map((subItem) =>
                renderMenuItem(subItem, level + 1)
              )}
            </List>
          </Collapse>
        </>
      ) : (
        <ListItem
          button
          component={MenuItemLink}
          to={item.to}
          sx={{ pl: level == 0 ? 2 : level * 4, py: 1.5 }}
          selected={isActive(item.to)}
        >
          <ListItemIcon sx={{ minWidth: 40, pr: level == 0 ? 2 : 0 }}>
            {item.leftIcon}
          </ListItemIcon>
          <ListItemText primary={item.primaryText} />
        </ListItem>
      )}
    </React.Fragment>
  );

  return <List>{items.map((item) => renderMenuItem(item, 0))}</List>;
};

export default MenuItem;
