export const updateShapeState = (state, config, payload) => {
    return { ...state, [config]: { ...state[config], value: payload } };
};