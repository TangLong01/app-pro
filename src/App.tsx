import ExpenseCreate from "@components/expenses/ExpensesCreate";
import ExpenseEdit from "@components/expenses/ExpensesEdit";
import ExpensesList from "@components/expenses/ExpensesList";
import customDataProvider from "@config/dataProvider";
import MainLayout from "@layouts/MainLayout";
import "@style/App.css";
import React from "react";
import { Admin, Resource } from "react-admin";
import { darkTheme, lightTheme } from "./config/theme";

const App: React.FC = () => {
  return (
    <Admin
      darkTheme={darkTheme}
      lightTheme={lightTheme}
      layout={MainLayout}
      dataProvider={customDataProvider}
    >
      <Resource
        name="expenses"
        list={ExpensesList}
        create={ExpenseCreate}
        edit={ExpenseEdit}
      />
    </Admin>
  );
};

export default App;
