import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  padding: 0;
  box-sizing: border-box;
   scrollbar-width: 0.4rem;
  scrollbar-color: #363636;
  font-family: exo-soft, sans-serif;


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

  h1 {
    font-size: 3.5rem;
font-weight: 700;
  }
  h2 {
    font-size: 2.75rem;
    font-weight: 500;
  }
  h3 {
    font-size: 2.25rem;
  }
  h4 {
    font-size: 2rem;
  }
  h5 {
    font-size: 1.5rem;
  }
  h6 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1rem;
  }
  h3,h4,h5,h6 {
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,p {
    letter-spacing: 2px;
    font-style: normal;
  }




`;

export default GlobalStyle;
