import { DRAW_SHAPE } from '../action/drawShape';

export const triggerDraw = (location) => {
    return (dispatch, getState) => {
        console.log("triggerDraw - state", getState());
        // Fuck it, just put the whole state in for now
        const currentState = getState();
        const shape = currentState.selectShape.selectedShape;
        const config = currentState.shapeConfig[shape];

        const payload = {
            shape: shape,
            config: config,
            location: location,
        };
        dispatch({type: DRAW_SHAPE, payload: payload});
    };
};;
