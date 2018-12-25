import config from '../config';
import { getTimerInterval, getTimerSeconds } from '../selectors';

export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const INCREMENT_TIMER = 'INCREMENT_TIMER';

export const startTimer = () => {
    return (dispatch, getState) => {
        const isIntervalAlreadyExist = getTimerInterval(getState());

        localStorage.setItem('isTimerTurnedOn', true);

        if (!isIntervalAlreadyExist) {
            const interval = setInterval(() => {
                const seconds = getTimerSeconds(getState());

                if (config.maxTimeInSeconds <= seconds) {
                    dispatch(stopTimer());
                }
    
                localStorage.setItem('timerSeconds', seconds + 1);
    
                dispatch({type: INCREMENT_TIMER});
            }, 1000);
    
            dispatch({
                type: START_TIMER,
                payload: {
                    interval,
                },
            });
        }
    }
}

export const stopTimer = () => {
    return (dispatch, getState) => {
        clearInterval(getState().timer.interval);

        localStorage.removeItem('isTimerTurnedOn');
        
        dispatch({type: STOP_TIMER});
    }
}