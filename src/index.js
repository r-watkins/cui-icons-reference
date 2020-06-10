import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

import CalciteThemeProvider from 'calcite-react/CalciteThemeProvider';
import { Theme } from './theme';
import { GlobalStyle } from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <CalciteThemeProvider theme={Theme}>
      <GlobalStyle />
      <App />
    </CalciteThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
