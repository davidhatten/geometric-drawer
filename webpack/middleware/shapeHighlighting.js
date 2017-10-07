import { CHANGE_STYLE } from "../actions/changeHistoryProp";

export const shapeHighlighting = store => next => action => {
    switch (action.type) {
    case CHANGE_STYLE:
        const editingPropId = store.getState().currentlyEditing;
        if (editingPropId === action.payload.id &&
            `stroke` === action.payload.style) {
            return;
        }
        return next(action);
    default:
        return next(action);
    }
};