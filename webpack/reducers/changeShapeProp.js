import { DRAW_SHAPE } from "../actions/drawShape";
import { CHANGE_PROP, CHANGE_STYLE } from "../actions/changeHistoryProp";
import { CLEAR_HISTORY, DELETE_SHAPE } from "../actions/removeShapes";

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
        return { ...state, byId: { ...state.byId, [id]: { ...state.byId[id], [action.payload.prop]: action.payload.value } } };
    case DELETE_SHAPE:
        const newById = Object.keys(state.byId).filter(styleId => styleId !== action.payload)
            .reduce((obj, key) => {
                obj[key] = state.byId[key];
                return obj;
            }, {});

        const newAllIds = state.allIds.filter(styleId => styleId !== action.payload);

        return { byId: newById, allIds: newAllIds };
    case CLEAR_HISTORY:
        return { byId: {}, allIds: [] };
    default:
        return state;
    }
};

export default changeShapeProp;
