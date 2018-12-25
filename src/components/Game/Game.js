import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import KeyForm from '../KeyForm';
import { KateGame, OlyaGame, LizaGame, OlyaKGame } from '../Games';
import { handleSubmitOnEnter } from '../../actions/heroActions';
import { KATYA_ID, OLYA_ID, LIZA_ID, OLYAK_ID } from '../../consts/names';

const GameContent = styled.div`
    padding: 30px;
    overflow: auto;
`;

const renderGame = props => {
    const { heroId, step, reset } = props;
    let gameComponent;

    if (heroId === KATYA_ID) {
        gameComponent = <KateGame step={step} reset={reset} />;
    }

    if (heroId === OLYAK_ID) {
        gameComponent = <OlyaKGame step={step} reset={reset} />;
    }

    if (heroId === OLYA_ID) {
        gameComponent = <OlyaGame step={step} reset={reset} />;
    }

    if (heroId === LIZA_ID) {
        gameComponent = <LizaGame step={step} reset={reset} />;
    }

    return (
        <GameContent>
            {gameComponent}
        </GameContent>
    );
}

const Game = props => {
    const { heroId } = props;

    if (!heroId) {
        return (
            <GameContent>
                <KeyForm
                    onSubmitForm={handleSubmitOnEnter}
                />
            </GameContent>
        );
    }

    return renderGame(props);
}

Game.propTypes = {
    heroId: PropTypes.string,
    step: PropTypes.number.isRequired,
    reset: PropTypes.func.isRequired,
}

export default Game;