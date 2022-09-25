import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --color-primary: #27AE60;
      --color-secondary: #EB5757;
      --grey-600: #333333;
      --grey-300: #828282;
      --grey-100: #E0E0E0;
      --grey-0: #F5F5F5;
      --light: #fff;
      --negative: #E60000;
      --warning: #FFCD07;
      --sucess: #168821;
      --information: #155BCB;
    }
    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", Sans-Serif;
    list-style: none;
    
  }

  html, body {
    background: var(--light);
  }

`;
