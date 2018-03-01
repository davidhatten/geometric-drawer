export const CHANGE_CLAW_PETAL_CONFIG = `CHANGE_CLAW_PETAL_CONFIG`;

export const changeClawPetalConfig = (key, value) => ({ type: CHANGE_CLAW_PETAL_CONFIG, payload: { key: key, value: value } });