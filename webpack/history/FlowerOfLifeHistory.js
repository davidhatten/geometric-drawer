import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";

export default class FlowerOfLifeHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    stateToPropsMap(state) {
        return {
            iterations: state.shapeProps.byId[this.id].iterations,
            radius: state.shapeProps.byId[this.id].radius,
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateIterations: (value) => {dispatch(changeHistoryProp(this.id, `iterations`, parseInt(value)));},
            updateRadius: (value) => {dispatch(changeHistoryProp(this.id, `radius`, parseInt(value)));},
            ...this.universalDispatch(dispatch),
        };
    }
}
