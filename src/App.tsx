import React from "react";
import { Router } from "./router";
import { GlobalStyle } from "./styles";

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Router />
    </div>
  );
};
