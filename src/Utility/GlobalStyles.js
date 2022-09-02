import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
   scrollbar-width: 0.4rem;
  scrollbar-color: #363636;

  &::-webkit-scrollbar {
     width: 0.4rem;
     &-track {
       background: #363636;
     }
     &-thumb {
        background-color: #242424;
  width: 5rem;
  border-radius: 2.5rem;
  border: transparent;
     }
  }
  }
  body {
    background: #424242
  }
`;

export default GlobalStyle;
