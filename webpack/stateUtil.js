export const updateShapeConfigValue = (state, config, payload) => {
    return { ...state, [config]: { ...state[config], value: payload } };
};