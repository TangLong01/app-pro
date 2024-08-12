import CurrencyField from "@common/CurrencyField";
import CustomDateField from "@common/CustomDateField";
import React from "react";
import {
  Datagrid,
  DateInput,
  Filter,
  FilterProps,
  List,
  ListProps,
  TextField,
  TextInput,
} from "react-admin";

const ExpenseFilter: React.FC<FilterProps> = (props) => (
  <Filter {...props}>
    <TextInput label="Description" source="description" alwaysOn />
    <DateInput label="Start Date" source="startDate" alwaysOn />
    <DateInput label="End Date" source="endDate" alwaysOn />
  </Filter>
);

const ExpensesList: React.FC<ListProps> = (props) => {
  return (
    <List
      {...props}
      filters={<ExpenseFilter children={undefined} />}
      sort={{ field: "date", order: "DESC" }}
      perPage={50}
    >
      <Datagrid bulkActionButtons={false}>
        <CustomDateField source="date" />
        <TextField source="description" />
        <CurrencyField source="total" />
        {/* <DeleteButton /> */}
      </Datagrid>
    </List>
  );
};

export default ExpensesList;
