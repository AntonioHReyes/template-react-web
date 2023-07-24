import React from 'react';
import logo from './logo.svg';
import 'src/App.scss';
import CustomThemedProvider from "src/theme/styles/CustomThemedProvider";
import {darkTheme, lightTheme} from "src/theme/styles/StyledThemes";
import styled from "styled-components";

function App() {
  return (
    <CustomThemedProvider theme={darkTheme}>
      <AppWrapper>
        <header className="App-header">
          <img src={logo} className="App-logo animated infinite bounce" alt="logo" />
          <p className="animated-slow fadeIn">
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </AppWrapper>
    </CustomThemedProvider>
  );
}

export const AppWrapper = styled.div`
  text-align: center;
  background: ${props => props.theme.colors.themeBackground};
`

export default App;
