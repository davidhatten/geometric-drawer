import { DRAW_SHAPE } from '../action/drawShape';

const drawShape = (state, action) => {

    switch(action.type) {
    case DRAW_SHAPE:
        console.log("drawShape - state ", state);
        console.log("drawShape - action", action);
                
    default:
        return state;
    }
}