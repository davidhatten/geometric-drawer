export const BEGIN_EDITING = `BEGIN_EDITING`;
export const STOP_EDITING = `STOP_EDITING`;

export const beginEditing = id => ({ type: BEGIN_EDITING, payload: id });
export const stopEditing = id => ({ type: STOP_EDITING, payload: id });