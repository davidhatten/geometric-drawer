import { standardSquareLength } from "../shapeConstants";
import { CHANGE_SQUARE_CONFIG } from "../actions/changeSquareConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    length: standardSquareLength.value,
};

const changeSquareConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_SQUARE_CONFIG:
        return updateShapeConfigValue(state, action.payload.key, action.payload.value);
    default:
        return state;
    }
};

export default changeSquareConfig;