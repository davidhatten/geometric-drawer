export const CHANGE_MANUAL_ROUNDED_PETAL_CONFIG = `CHANGE_MANUAL_ROUNDED_PETAL_CONFIG`;

export const changeManualRoundedPetalConfig = (key, value) => ({ type: CHANGE_MANUAL_ROUNDED_PETAL_CONFIG, payload: { key: key, value: value }});