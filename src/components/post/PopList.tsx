// src/posts/PostList.tsx
import React from "react";
import { List, Datagrid, TextField, DateField, ListProps } from "react-admin";

const PostList: React.FC<ListProps> = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <DateField source="published_at" />
    </Datagrid>
  </List>
);

export default PostList;
