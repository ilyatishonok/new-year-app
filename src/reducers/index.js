import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import activeHeroReducer from './activeHeroReducer';
import timerReducer from './timerReducer';

export default combineReducers({
    form: formReducer.plugin({
        keyForm: (state, action) => {
            switch (action.type) {
                case 'NEXT_STEP':
                    return undefined;
                default:
                    return state;
            }
        }
    }),
    hero: activeHeroReducer,
    timer: timerReducer,
});