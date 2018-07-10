export const CHANGE_RECTANGLE_CONFIG = `CHANGE_RECTANGLE_CONFIG`;

export const changeRectangleConfig = (key, value) => ({ type: CHANGE_RECTANGLE_CONFIG, payload: { key: key, value: value }});
