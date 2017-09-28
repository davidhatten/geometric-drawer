import { SELECT_SHAPE } from '../actions/selectShape';
import { FOL_CONFIG } from '../shapeConstants';

const initialState = {
    selectedShape: FOL_CONFIG,
};

const selectShape = (state = initialState, action) => {
    switch (action.type) {
    case SELECT_SHAPE:
        console.log("selectShape state is ", state);
        console.log("selectShape action is ", action);
        return {selectedShape: action.payload};
    default:
        return state;
    }
};

export default selectShape;
