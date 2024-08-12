import React from "react";
import {
  Create,
  DateInput,
  minLength,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";

const ExpenseCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <DateInput source="date" validate={[required()]} />
      <TextInput source="description" validate={[required(), minLength(1)]} />
      <TextInput source="total" validate={[required(), minLength(1)]} />
    </SimpleForm>
  </Create>
);

export default ExpenseCreate;
