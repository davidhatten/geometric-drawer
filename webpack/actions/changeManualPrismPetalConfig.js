export const CHANGE_MANUAL_PRISM_PETAL_CONFIG = `CHANGE_MANUAL_PRISM_PETAL_CONFIG`;

export const changeManualPrismPetalConfig = (key, value) => ({ type: CHANGE_MANUAL_PRISM_PETAL_CONFIG, payload: { key: key, value: value }});