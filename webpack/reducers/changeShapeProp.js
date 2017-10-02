import { DRAW_SHAPE } from "../actions/drawShape";
import { CHANGE_PROP } from "../actions/changeHistoryProp";

const initialState = {
    byId: {},
    allIds: [],
};

const changeShapeProp = (state = initialState, action) => {
    switch (action.type) {
    case DRAW_SHAPE:
        let id = action.payload.id;
        return { byId: { ...state.byId, [id]: action.payload.props }, allIds: state.allIds.concat(id) };
    case CHANGE_PROP:
        id = action.payload.id;
        return { ...state, byId: { ...state.byId, [id]: { ...state.byId[id], [action.payload.prop]: action.payload.value }}};
    default:
        return state;
    }
};

export default changeShapeProp;
