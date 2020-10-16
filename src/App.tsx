import React, { useEffect, useState } from "react";
import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import Routes from "./Components/Routes";
import { AppContext } from "./libs/AppContext";


const theme = createMuiTheme({
  typography: {
    fontFamily: ["Quicksand", "sans-serif"].join(","),
  },
  palette: {
    primary: { main: "#242B48" },
    secondary: { main: "#6BECCF" },
  },
});

type Props = {
  children: React.ReactNode;
};
export const AuthProvider = ({ children }: Props) => {
  const [isAuthenticated, userHasAuthenticated] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("user") !== null;
    userHasAuthenticated(isLoggedIn);
  }, []);

  return (

    <AppContext.Provider value={{ isAuthenticated, userHasAuthenticated }}>
      {children}
    </AppContext.Provider>

  );
};

function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
