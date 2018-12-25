import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import store from '../../store';
import GameLayout from '../GameLayout';

const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0px;
        padding: 0px;
        height: 100%;
        width: 100%;
    }

    body {
        background-image: url('./background.jpg');
        background-repeat: no-repeat;
        background-size: auto;
    }

    #root {
        display: flex;
    }
`;

const App = () => (
    <Provider store={store}>
        <GlobalStyle />
        <GameLayout />
    </Provider>
);

export default App;