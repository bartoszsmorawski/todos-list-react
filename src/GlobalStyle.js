import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
  }
  
  *, ::after, ::before {
    box-sizing: inherit;
  }
  
  .body {
    max-width: 1000px;
    margin: 0 auto;
    font-family:"Lato", sans-serif;
    background-color: ${({ theme }) => theme.color.babygray};
    word-break: break-word;  
  }
`;
