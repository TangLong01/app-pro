import React from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  required,
  minLength,
} from "react-admin";

const ExpenseEdit: React.FC = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="name" validate={[required(), minLength(1)]} />
      <TextInput source="total" validate={[required()]} />
      <TextInput source="description" validate={[required()]} />
      <DateInput source="date" validate={[required()]} />
    </SimpleForm>
  </Edit>
);

export default ExpenseEdit;
