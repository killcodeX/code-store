import React from "react";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./Theme/theme";
import { useSelector } from "react-redux";
import Home from "./Container/Home";

function App() {
  const theme = useSelector((state: any) => state.post.theme);
  console.log(theme)
  return (
    <ThemeProvider theme={theme === false ? darkTheme : lightTheme}>
      <div className="position-relative">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
