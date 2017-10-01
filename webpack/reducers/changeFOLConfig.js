import { CHANGE_FOL, CHANGE_FOL_ITERATIONS, CHANGE_FOL_RADIUS } from '../actions/changeFOLConfig';

const initialState = {
    iterations: {
        name: `Iterations`,
        min: 2,
        max: 10,
        value: 2,
    },
    radius: {
        name: `Radius`,
        min: 1,
        max: 1000,
        value: 300,
    },
};

const changeFOLConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_FOL_ITERATIONS:
        return updateState(state, `iterations`, action.payload.value);
    case CHANGE_FOL_RADIUS:
        return updateState(state, `radius`, action.payload.value);
    default:
        return state;
    }
};

const updateState = (state, config, payload) => {
    return { ...state, [config]: { ...state[config], ...payload } };
};

export default changeFOLConfig;