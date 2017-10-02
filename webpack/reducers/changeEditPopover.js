import { BEGIN_EDITING, STOP_EDITING } from "../actions/changeEditPopover";

const initialState = null;
const changeEditPopover = (state = initialState, action) => {
    switch(action.type) {
    case BEGIN_EDITING:
        return action.payload;
    case STOP_EDITING:
        return null;
    default:
        return state;
    }
};

export default changeEditPopover;