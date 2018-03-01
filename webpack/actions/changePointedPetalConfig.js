export const CHANGE_POINTED_PETAL_CONFIG = `CHANGE_POINTED_PETAL_CONFIG`;

export const changePointedPetalConfig = (key, value) => ({ type: CHANGE_POINTED_PETAL_CONFIG, payload: { key: key, value: value }});