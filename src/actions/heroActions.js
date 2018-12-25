import { SubmissionError } from 'redux-form';
import { startTimer, stopTimer } from './timerActions';
import { stepsData, secretKeys } from '../data';

export const SELECT_HERO = 'SELECT_HERO';
export const NEXT_STEP = 'NEXT_STEP';
export const RESET = 'RESET';

export const selectHero = heroId => ({
    type: SELECT_HERO,
    payload: {
        heroId,
    },
});

export const nextStep = () => ({
    type: NEXT_STEP,
});

export const handleSubmitOnStep = (heroId, step) => {
    return (values, dispatch) => {
        const isKeyCorrect = stepsData[heroId][step - 1] === values.secretKey;

        if (!isKeyCorrect) {
            throw new SubmissionError({ _error: 'Неправильный секретный ключ!',  });
        }

        dispatch(nextStep());

        if (step + 1 === 5) {
            dispatch(stopTimer());
        }
    }
}

export const handleSubmitOnEnter = (values, dispatch) => {
    const newHeroId = secretKeys[values.secretKey];

    if (!newHeroId) {
        throw new SubmissionError({ _error: 'Неправильный секретный ключ!' });
    }

    dispatch(selectHero(newHeroId));
    dispatch(startTimer());
}

export const reset = () => ({
    type: RESET,
});