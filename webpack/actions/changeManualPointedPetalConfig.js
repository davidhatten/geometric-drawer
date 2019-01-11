export const CHANGE_MANUAL_POINTED_PETAL_CONFIG = `CHANGE_MANUAL_POINTED_PETAL_CONFIG`;

export const changeManualPointedPetalConfig = (key, value) => ({ type: CHANGE_MANUAL_POINTED_PETAL_CONFIG, payload: { key: key, value: value }});