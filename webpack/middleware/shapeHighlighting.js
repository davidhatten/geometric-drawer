import { CHANGE_STYLE } from "../actions/changeHistoryProp";

export const shapeHighlighting = store => next => action => {
    switch (action.type) {
    case CHANGE_STYLE:
        console.log(`Middleware - shapeHighlighting`, store);
        const editingPropId = store.getState().currentlyEditing;
        if (editingPropId === action.payload.id &&
            `stroke` === action.payload.style) {
            console.log(`Middleware - dropping action on the floor`);
            return;
        }
        return next(action);
    default:
        return next(action);
    }
};