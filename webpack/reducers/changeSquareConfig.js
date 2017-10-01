import { standardSquareLength } from "../shapeConstants";
import { CHANGE_SQUARE_LENGTH } from "../actions/changeSquareConfig";
import { updateShapeConfigValue } from "../stateUtil";

const initialState = {
    length: { ...standardSquareLength },
};

const changeSquareConfig = (state = initialState, action) => {
    switch (action.type) {
    case CHANGE_SQUARE_LENGTH:
        return updateShapeConfigValue(state, `length`, action.payload);
    default:
        return state;
    }
};

export default changeSquareConfig;