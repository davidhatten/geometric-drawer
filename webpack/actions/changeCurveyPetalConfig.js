export const CHANGE_CURVEY_PETAL_CONFIG = `CHANGE_CURVEY_PETAL_CONFIG`;

export const changeCurveyPetalConfig = (key, value) => ({ type: CHANGE_CURVEY_PETAL_CONFIG, payload: { key: key, value: value }});