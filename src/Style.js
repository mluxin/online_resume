import { createGlobalStyle } from 'styled-components';
import { MAX } from "./constants";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap');
  * {
    margin:0;
    padding: 0;
    line-height: 1.5em;
  }
  body {
    font-family: 'Raleway';
  }
  p {
    font-size: 1.2rem;
    font-weight: 400;

      ${MAX.MEDIA_XS} {
      font-size: 1rem;
      }
  }
`

export default GlobalStyles;