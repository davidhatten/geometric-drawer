export const CHANGE_PROP = `CHANGE_PROP`;

export const changeHistoryProp = (id, prop, value) => ({ type: CHANGE_PROP, payload: { id: id, prop: prop, value: value } });