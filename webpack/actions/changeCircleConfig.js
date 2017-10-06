export const CHANGE_CIRCLE_RADIUS = `CHANGE_CIRCLE_RADIUS`;
export const CHANGE_CIRCLE_HISTORY_RADIUS = `CHANGE_CIRCLE_HISTORY_RADIUS`;

export const changeRadius = (value) => ({ type: CHANGE_CIRCLE_RADIUS, payload: value });

export const changeHistoryRadius = (id, value) => ({ type: CHANGE_CIRCLE_HISTORY_RADIUS, payload: { id, value } });