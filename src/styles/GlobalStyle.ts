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

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--grey-300) !important;
    -webkit-box-shadow: 0 0 0px 1000px var(--light) inset;
    box-shadow: 0 0 0px 1000px var(--light) inset;
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

    &::-webkit-scrollbar {
            background-color: transparent;
            width: 8px;
            background-color: var(--light);
        }
        
        &::-webkit-scrollbar-thumb {
            background: var(--color-primary);
        }
  }


`;
