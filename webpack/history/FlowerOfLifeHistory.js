import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import {lineWidthDispatch, lineWidthState} from "../shapeConstants";
import FlowerOfLife from "../containers/shapes/FlowerOfLife";
import FlowerOfLifeForm from "../components/forms/FlowerOfLifeForm";

export default class FlowerOfLifeHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return FlowerOfLife;
    }

    form() {
        return FlowerOfLifeForm;
    }

    stateToPropsMap(state) {
        return {
            iterations: state.shapeProps.byId[this.id].iterations,
            radius: state.shapeProps.byId[this.id].radius,
            lineWidth: lineWidthState(state, this.id),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateIterations: (value) => {dispatch(changeHistoryProp(this.id, `iterations`, parseInt(value)));},
            updateRadius: (value) => {dispatch(changeHistoryProp(this.id, `radius`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, this.id),
        };
    }
}
