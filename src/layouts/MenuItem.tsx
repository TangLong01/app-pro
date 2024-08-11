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

  return (
    <List>
      {items.map((item) => (
        <React.Fragment key={item.to}>
          {item.subMenuItems ? (
            <>
              <ListItem button onClick={() => handleClick(item.primaryText)}>
                <ListItemIcon sx={{ minWidth: 40 }}>
                  {item.leftIcon}
                </ListItemIcon>
                <ListItemText primary={item.primaryText} />
                {open[item.primaryText] ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse
                in={open[item.primaryText]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {item.subMenuItems.map((subItem) => (
                    <MenuItemLink
                      key={subItem.to}
                      to={subItem.to}
                      primaryText={subItem.primaryText}
                      sx={{ pl: 4, py: 1.5 }}
                      selected={isActive(subItem.to)}
                    />
                  ))}
                </List>
              </Collapse>
            </>
          ) : (
            <MenuItemLink
              to={item.to}
              primaryText={item.primaryText}
              leftIcon={item.leftIcon}
              sx={{ py: 1.5 }}
              selected={isActive(item.to)}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default MenuItem;
