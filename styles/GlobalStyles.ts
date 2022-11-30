import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    input, textarea { 
      -moz-user-select: auto;
      -webkit-user-select: auto;
      -ms-user-select: auto;
      user-select: auto;
    }
    input:focus {
      outline: none;
    }

    button {
      border: none;
      background: none;
      padding: 0;
      cursor: pointer;
    }
    .TodoList li.on span {
      color: rgb(199, 197, 197);
    }
    .TodoList li.on em {
      color: rgb(199, 197, 197); text-decoration: line-through rgb(159, 127, 231);
      }
`;

export default GlobalStyles;
