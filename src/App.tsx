import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Admin, Resource } from "react-admin";
import "./App.css";
import CommentList from "./CommentList";
import dataProvider from "./config/dataProvider";
import PostList from "./PopList";
import MyLayout from "./layouts/MyLayout";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Admin layout={MyLayout} dataProvider={dataProvider} theme={theme}>
      <Resource name="posts" list={PostList} />
      <Resource name="comments" list={CommentList} />
    </Admin>
  </ThemeProvider>
);

export default App;
