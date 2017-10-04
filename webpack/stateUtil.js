export const updateShapeConfigValue = (state, config, payload) => {
    return { ...state, [config]: payload };
};