import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        font-family: 'Roboto', sans-serif;
    }
    
    body{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    
    #root{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
    }

`;

export default GlobalStyle;
