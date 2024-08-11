import React from "react";
import {
  List,
  Datagrid,
  TextField,
  DateField,
  DeleteButton,
  ListProps,
} from "react-admin";

const ExpensesList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="total" />
      <TextField source="description" />
      <DateField source="date" />
      <DeleteButton />
    </Datagrid>
  </List>
);

export default ExpensesList;
