export const CHANGE_PRISM_PETAL_CONFIG = `CHANGE_PRISM_PETAL_CONFIG`;

export const changePrismPetalConfig = (key, value) => ({ type: CHANGE_PRISM_PETAL_CONFIG, payload: { key: key, value: value } });