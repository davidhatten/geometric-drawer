import { DRAW_SHAPE } from "../actions/drawShape";

const initialState = {
    byId: {},
    allIds: [],
};

const changeShapeProp = (state = initialState, action) => {
    switch (action.type) {
    case DRAW_SHAPE:
        const id = action.payload.id;
        return { byId: { ...state.byId, [id]: action.payload.props }, allIds: state.allIds.concat(id) };
    default:
        return state;
    }
};

export default changeShapeProp;