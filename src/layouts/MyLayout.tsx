import React from "react";
import { Layout, LayoutProps } from "react-admin";
import MyMenu from "./MyMenu";

const MyLayout: React.FC<LayoutProps> = (props) => (
  <Layout menu={MyMenu} {...props} />
);

export default MyLayout;
