import { SELECT_SHAPE } from '../action/selectShape';
import { FOL_CONFIG } from '../shapeConstants';

const initialState = {
    selectedShape: FOL_CONFIG,
};

const selectShape = (state = initialState, action) => {
    console.log("selectShape state is ", state);
    console.log("selectShape action is ", action);
    switch (action.type) {
    case SELECT_SHAPE:
        return {selectedShape: action.payload};
    default:
        return state;
    }
};

export default selectShape;