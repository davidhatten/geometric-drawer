export const CHANGE_MANUAL_CURVEY_PETAL_CONFIG = `CHANGE_MANUAL_CURVEY_PETAL_CONFIG`;

export const changeManualCurveyPetalConfig = (key, value) => ({ type: CHANGE_MANUAL_CURVEY_PETAL_CONFIG, payload: { key: key, value: value }});