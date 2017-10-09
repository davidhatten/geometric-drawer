export const CHANGE_CIRCLE_PETAL_RING_RADIUS = `CHANGE_CIRCLE_PETAL_RING_RADIUS`;
export const CHANGE_CIRCLE_PETAL_PETAL_RADIUS = `CHANGE_CIRCLE_PETAL_PETAL_RADIUS`;
export const CHANGE_CIRCLE_PETAL_ROTATION = `CHANGE_CIRCLE_PETAL_ROTATION`;
export const CHANGE_CIRCLE_PETAL_AXES = `CHANGE_CIRCLE_PETAL_AXES`;

export const changeRingRadius = value => ({ type: CHANGE_CIRCLE_PETAL_RING_RADIUS, payload: value });
export const changePetalRadius = value => ({ type: CHANGE_CIRCLE_PETAL_PETAL_RADIUS, payload: value });
export const changeRotation = value => ({ type: CHANGE_CIRCLE_PETAL_ROTATION, payload: value });
export const changeAxes = value => ({ type: CHANGE_CIRCLE_PETAL_AXES, payload: value });