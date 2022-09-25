import React from "react";
import { Header } from "./components/header";
import { Router } from "./router";
import { GlobalStyle } from "./styles";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
      <Header />
    </div>
  );
};
