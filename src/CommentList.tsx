// src/posts/CommentList.tsx
import React from "react";
import { List, Datagrid, TextField, DateField, ListProps } from "react-admin";

const CommentList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="body" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);

export default CommentList;
