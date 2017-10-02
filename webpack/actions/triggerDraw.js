import { drawShape } from './drawShape';

const generateId = name => {
    return `${name}-${Date.now()}`;
};

export const triggerDraw = (location) => {
    return (dispatch, getState) => {
        const currentState = getState();
        const shape = currentState.selectShape.selectedShape;
        const config = currentState[shape];
        const style = currentState.generalConfig;

        // Style will eventually come from state
        // But it will be assembled here
        const payload = {
            shape: shape,
            props: {
                ...location,
                ...config,
                style: {
                    strokeWidth: style.strokeWidth,
                    fill: `none`,
                    stroke: `black`,
                },
            },
            id: generateId(shape),
        };
        dispatch(drawShape(payload));
    };
};
