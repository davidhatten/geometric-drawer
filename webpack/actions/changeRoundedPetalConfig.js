export const CHANGE_ROUNDED_PETAL_INNER_RADIUS = `CHANGE_ROUNDED_PETAL_INNER_RADIUS`;
export const CHANGE_ROUNDED_PETAL_OUTER_RADIUS = `CHANGE_ROUNDED_PETAL_OUTER_RADIUS`;
export const CHANGE_ROUNDED_PETAL_X_CONTROL = `CHANGE_ROUNDED_PETAL_X_CONTROL`;
export const CHANGE_ROUNDED_PETAL_Y_CONTROL = `CHANGE_ROUNDED_PETAL_Y_CONTROL`;
export const CHANGE_ROUNDED_PETAL_AXES = `CHANGE_ROUNDED_PETAL_AXES`;

export const changeInnerRadius = value => ({ type: CHANGE_ROUNDED_PETAL_INNER_RADIUS, payload: value });
export const changeOuterRadius = value => ({ type: CHANGE_ROUNDED_PETAL_OUTER_RADIUS, payload: value });
export const changeXControl = value => ({ type: CHANGE_ROUNDED_PETAL_X_CONTROL, payload: value });
export const changeYControl = value => ({ type: CHANGE_ROUNDED_PETAL_Y_CONTROL, payload: value });
export const changeAxes = value => ({ type: CHANGE_ROUNDED_PETAL_AXES, payload: value });