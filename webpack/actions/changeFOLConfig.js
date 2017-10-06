export const CHANGE_FOL_ITERATIONS = `CHANGE_FOL_ITERATIONS`;
export const CHANGE_FOL_RADIUS = `CHANGE_FOL_RADIUS`;

export const changeIterations = value => ({ type: CHANGE_FOL_ITERATIONS, payload: value });
export const changeRadius = value => ({ type: CHANGE_FOL_RADIUS, payload: value });
