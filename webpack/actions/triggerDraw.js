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

        if (style.lockHorizontal) {
            location.x = style.canvasWidth/2;
        }

        if (style.lockVertical) {
            location.y = style.canvasHeight/2;
        }

        // Style will eventually come from state
        // But it will be assembled here
        const id = generateId(shape);
        const payload = {
            shape: shape,
            props: {
                ...location,
                ...config,
                style: id,
            },
            style: {
                strokeWidth: style.strokeWidth,
                fill: `none`,
                stroke: `black`,
                strokeLinecap: `round`,
            },
            id: id,
        };
        dispatch(drawShape(payload));
    };
};
