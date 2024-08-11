import ExpenseCreate from "@components/expenses/ExpensesCreate";
import ExpenseEdit from "@components/expenses/ExpensesEdit";
import ExpensesList from "@components/expenses/ExpensesList";
import dataProvider from "@config/dataProvider";
import darkTheme from "@config/theme";
import MainLayout from "@layouts/MainLayout";
import { ThemeProvider } from "@mui/material/styles";
import "@style/App.css";
import React from "react";
import { Admin, Resource } from "react-admin";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Admin layout={MainLayout} dataProvider={dataProvider} theme={darkTheme}>
        <Resource
          name="expenses"
          list={ExpensesList}
          create={ExpenseCreate}
          edit={ExpenseEdit}
        />
      </Admin>
    </ThemeProvider>
  );
};

export default App;
