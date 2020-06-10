import { createGlobalStyle } from 'styled-components';

// Styles that affect top level index.html elements and global resets ONLY
const GlobalStyle = createGlobalStyle`
  body,
  #root {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
  }

  body {
    background: ${props => props.theme.palette.background};
  }
`;

export { GlobalStyle };
