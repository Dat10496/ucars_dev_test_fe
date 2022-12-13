import { CssBaseline } from "@mui/material";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

const ERROR = {
  main: "#EE1B24",
};

const PRIMARY = {
  main: "#0F5EDD",
};

const SECOND = {
  main: "#232323",
};

function ThemeProvider({ children }) {
  const themeOptions = {
    palette: {
      error: ERROR,
      primary: PRIMARY,
      second: SECOND,
    },
    typography: {
      fontFamily: "Poppins",
    },
  };

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
