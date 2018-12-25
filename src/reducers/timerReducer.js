import { START_TIMER, STOP_TIMER, INCREMENT_TIMER } from '../actions/timerActions';
import { RESET } from '../actions/heroActions';

const timerSeconds = localStorage.getItem('timerSeconds');
const isTimerTurnedOn = localStorage.getItem('isTimerTurnedOn') === 'true' ? true : false;

const initialState = {
    seconds: +timerSeconds,
    isTimerTurnedOn: isTimerTurnedOn,
    interval: null,
};

const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_TIMER:      
            return { ...state, interval: action.payload.interval, isTimerTurnedOn: true };

        case STOP_TIMER:
            return { ...state, interval: null, isTimerTurnedOn: false };

        case INCREMENT_TIMER:
            return { ...state, seconds: state.seconds + 1 };

        case RESET:
            localStorage.removeItem('timerSeconds');
            localStorage.removeItem('isTimerTurnedOn');
            return { ...state, seconds: 0, isTimerTurnedOn: false, interval: null };
            
        default:
            return state;
    }
}

export default timerReducer;