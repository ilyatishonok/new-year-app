import React from 'react';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Game from '../../containers/Game';
import Timer from '../../containers/Timer';

const MiddlePaper = styled(Paper)`
    margin-top: 10px;
    margin-left: 300px;
    margin-right: 300px;
    border-radius: 10px !important;
    box-shadow: 0 0 20px gold !important;
    flex-grow: 1;

    @media (max-width: 1094px) {
        margin-left: 150px;
        margin-right: 150px;
    }

    @media (max-width: 660px) {
        margin-left: 50px;
        margin-right: 50px;
    }

    @media (max-width: 330px) {
        margin: 0px;
    }
`;

const Header = styled(AppBar)`
    padding: 10px;
    text-align: center;
    font-style: sens-serif;
    font-family: cursive;
    font-size: 15px;
`;

const GameLayout = () => {
    return (
        <MiddlePaper>
            <Header position="static" color="default">
                <Timer />
            </Header>
            <Game />
        </MiddlePaper>
    );
}

export default GameLayout;