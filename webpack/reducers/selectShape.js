import { SELECT_SHAPE } from '../actions/selectShape';
import { FOL_CONFIG } from '../shapeConstants';

const initialState = {
    selectedShape: FOL_CONFIG,
};

const selectShape = (state = initialState, action) => {
    switch (action.type) {
    case SELECT_SHAPE:
        return { selectedShape: action.payload !== undefined ? action.payload : state.selectedShape };
    default:
        return state;
    }
};

export default selectShape;
