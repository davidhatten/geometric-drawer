import AbstractHistory from "./AbstractHistory.js";
import {basicHistoryDispatch, basicRingProps, lineWidthState, positionProps, xPosState} from "../shapeConstants";
import RoundedPetalForm from "../components/forms/RoundedPetalForm";
import RoundedPetal from "../containers/shapes/RoundedPetal";

export default class RoundedPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return RoundedPetal;
    }

    form() {
        return RoundedPetalForm;
    }

    stateToPropsMap(state) {
        return {
            ...basicRingProps(state.shapeProps.byId, this.id),
            ...positionProps(state.shapeProps.byId, this.id),
            lineWidth: lineWidthState(state, this.id),
        };
    }

    dispatchToPropsMap(dispatch) {
        return basicHistoryDispatch(dispatch, this.id);
    }
}
