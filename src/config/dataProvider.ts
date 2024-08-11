import { DataProvider } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const dataProvider: DataProvider = simpleRestProvider(
  "https://microservices-demo-backend.onrender.com"
);
export default dataProvider;
