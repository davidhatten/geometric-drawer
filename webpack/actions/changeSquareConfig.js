export const CHANGE_SQUARE_CONFIG = `CHANGE_SQUARE_CONFIG`;

export const changeSquareConfig = (key, value) => ({ type:CHANGE_SQUARE_CONFIG, payload: { key: key, value: value }});
