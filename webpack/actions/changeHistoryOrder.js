export const CHANGE_ORDER = `CHANGE_ORDER`;

export const changeHistoryOrder = (id, index) => ({type: CHANGE_ORDER, payload: { id: id, index: index}});