import { drawShape } from './drawShape';

export const triggerDraw = (location) => {
    return (dispatch, getState) => {
        console.log("triggerDraw - state", getState());
        // Fuck it, just put the whole state in for now
        const currentState = getState();
        const shape = currentState.selectShape.selectedShape;
        const config = currentState[shape];
        const style = currentState.generalConfig;

        // Style will eventually come from state
        // But it will be assembled here
        const payload = {
            shape: shape,
            config: config,
            location: location,
            style: {
                ...style,
                fill:`none`,
                stroke:`black`,
            },
        };
        dispatch(drawShape(payload));
    };
};;
