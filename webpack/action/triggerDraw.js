import { DRAW_SHAPE } from '../action/drawShape';

export const triggerDraw = (location) => {
    return (dispatch, getState) => {
        console.log("triggerDraw - state", getState());
        // Fuck it, just put the whole state in for now
        const currentState = getState();
        const shape = currentState.selectShape.selectedShape;
        const config = currentState.shapeConfig[shape];

        // Style will eventually come from state
        // But it will be assembled here
        const payload = {
            shape: shape,
            config: config,
            location: location,
            style: {
                fill:`none`,
                stroke:`black`,
                strokeWidth:`10`,
            },
        };
        dispatch({type: DRAW_SHAPE, payload: payload});
    };
};;
