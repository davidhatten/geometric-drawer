export const CHANGE_MANUAL_CLAW_PETAL_CONFIG = `CHANGE_MANUAL_CLAW_PETAL_CONFIG`;

export const changeManualClawPetalConfig = (key, value) => ({ type: CHANGE_MANUAL_CLAW_PETAL_CONFIG, payload: { key: key, value: value } });