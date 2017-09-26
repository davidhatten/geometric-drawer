import { TRIGGER_DRAW } from '../action/triggerDraw';
import { DRAW_SHAPE } from '../action/drawShape';

const triggerDraw = (location) => {
    return (dispatch, getState) => {
        // const state = getState();
        console.log("triggerDraw triggered");
    };
};

export default triggerDraw;