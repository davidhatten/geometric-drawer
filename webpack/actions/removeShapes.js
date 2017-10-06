export const CLEAR_HISTORY = `CLEAR_HISTORY`;
export const DELETE_SHAPE = `DELETE_SHAPE`;

export const clearShapeHistory = () => ({ type: CLEAR_HISTORY, payload: {} });
export const deleteShape = (id) => ({ type: DELETE_SHAPE, payload: id });