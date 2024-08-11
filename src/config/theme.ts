import { createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontWeight: "600 !important",
          color: "#FFFFFF !important",
          "&.Mui-selected": {
            color: "#EE6983 !important",
            "& .MuiSvgIcon-root": {
              color: "#EE6983 !important",
            },
          },
          "&:hover": {
            "& .MuiSvgIcon-root, & .MuiListItemText-root": {
              color: "#EE6983 !important",
            },
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          fontWeight: "600 !important",
          color: "#FFFFFF !important",
          "&.Mui-selected, &.Mui-selected:hover": {
            color: "#EE6983 !important",
            "& .MuiListItemIcon-root, & .MuiListItemText-root, & .MuiSvgIcon-root":
              {
                color: "#EE6983 !important",
              },
          },
          "&:hover": {
            color: "#EE6983 !important",
            "& .MuiListItemIcon-root, & .MuiListItemText-root, & .MuiSvgIcon-root":
              {
                color: "#EE6983 !important",
              },
          },
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontWeight: "600 !important",
        },
        primary: {
          fontWeight: "600 !important",
        },
      },
    },
  },
});

export default darkTheme;
