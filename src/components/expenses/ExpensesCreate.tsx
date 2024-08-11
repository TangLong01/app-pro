import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  minLength,
} from "react-admin";

const ExpenseCreate: React.FC = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" validate={[required(), minLength(1)]} />
      <TextInput source="total" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
      <DateInput source="date" validate={[required()]} />
    </SimpleForm>
  </Create>
);

export default ExpenseCreate;
