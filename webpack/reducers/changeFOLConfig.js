import { CHANGE_FOL_ITERATIONS, CHANGE_FOL_RADIUS } from '../actions/changeFOLConfig';
import { updateShapeState } from "../stateUtil";
import { standardRadius } from "../shapeConstants";

const initialState = {
    iterations: {
        name: `Iterations`,
        min: 2,
        max: 10,
        value: 2,
    },
    radius: { ...standardRadius },
};

const changeFOLConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_FOL_ITERATIONS:
        return updateShapeState(state, `iterations`, action.payload);
    case CHANGE_FOL_RADIUS:
        return updateShapeState(state, `radius`, action.payload);
    default:
        return state;
    }
};


export default changeFOLConfig;