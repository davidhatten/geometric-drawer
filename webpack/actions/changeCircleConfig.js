export const CHANGE_CIRCLE_CONFIG = `CHANGE_CIRCLE_CONFIG`;

export const changeCircleConfig = (key, value) => ({ type: CHANGE_CIRCLE_CONFIG, payload: { key, value } });

