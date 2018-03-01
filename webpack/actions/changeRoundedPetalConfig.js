export const CHANGE_ROUNDED_PETAL_CONFIG = `CHANGE_ROUNDED_PETAL_CONFIG`;

export const changeRoundedPetalConfig = (key, value) => ({ type: CHANGE_ROUNDED_PETAL_CONFIG, payload: { key: key, value: value }});