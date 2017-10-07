export const updateShapeConfigValue = (state, config, payload) => {
    return { ...state, [config]: payload };
};

export const clearShapeData = (byId, allIds, id) => {
    const newById = Object.keys(byId).filter(shapeId => shapeId !== id)
        .reduce((obj, key) => {
            obj[key] = byId[key];
            return obj;
        }, {});

    const newAllIds = allIds.filter(shapeId => shapeId !== id);

    return { byId: newById, allIds: newAllIds };
}