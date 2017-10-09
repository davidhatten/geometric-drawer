export const CHANGE_CIRCLE_PETAL_CONFIG = `CHANGE_CIRCLE_PETAL_CONFIG`;

export const changeCirclePetalConfig = (key, value) => ({ type: CHANGE_CIRCLE_PETAL_CONFIG, payload: { key: key, value: value }})