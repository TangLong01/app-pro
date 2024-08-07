// src/dataProvider.ts
import { DataProvider } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider: DataProvider = simpleRestProvider(
  "https://api.example.com"
);
export default dataProvider;
