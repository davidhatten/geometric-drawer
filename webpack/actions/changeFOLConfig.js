export const CHANGE_FOL_CONFIG = `CHANGE_FOL_CONFIG`;

export const changeFOLConfig = (key, value) => ({ type: CHANGE_FOL_CONFIG, payload: { key: key, value: value } });
