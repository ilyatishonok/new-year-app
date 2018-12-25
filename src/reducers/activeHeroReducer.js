import { SELECT_HERO, NEXT_STEP, RESET } from "../actions/heroActions";

const currentHero = localStorage.getItem('currentHero');
const currentHeroStep = localStorage.getItem('currentHeroStep');

const initialState = {
    currentHeroId: currentHero,
    currentHeroStep: +currentHeroStep,
};

const activeHeroReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_HERO:
            localStorage.setItem('currentHero', action.payload.heroId);
            localStorage.setItem('currentHeroStep', 1);

            return { ...state, currentHeroId: action.payload.heroId, currentHeroStep: 1 };
            
        case NEXT_STEP:
            localStorage.setItem('currentHeroStep', state.currentHeroStep + 1);

            return { ...state, currentHeroStep: state.currentHeroStep + 1 };

        case RESET:
            localStorage.removeItem('currentHero');
            localStorage.removeItem('currentHeroStep');
            return { ...state, currentHeroStep: 0, currentHeroId: null };
            
        default:
            return state;
    }
}

export default activeHeroReducer;