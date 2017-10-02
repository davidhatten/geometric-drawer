export const CHANGE_PROP = `CHANGE_PROP`;
export const CHANGE_STYLE = `CHANGE_STYLE`;

export const changeHistoryProp = (id, prop, value) => ({ type: CHANGE_PROP, payload: { id: id, prop: prop, value: value } });
export const changeHistoryStyle = (id, style, value) => ({ type: CHANGE_STYLE, payload: { id: id, style: style, value: value } });