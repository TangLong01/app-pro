import MainMenu from "@layouts/MainMenu";
import React from "react";
import { Layout, LayoutProps } from "react-admin";

const MainLayout: React.FC<LayoutProps> = (props) => (
  <Layout menu={MainMenu} {...props} />
);

export default MainLayout;
