import AbstractHistory from "./AbstractHistory.js";
import {
    basicHistoryDispatch,
    basicRingProps, changeHistoryInnerRadius, changeHistoryOuterRadius, lineWidthDispatch,
    lineWidthState
} from "../shapeConstants";
import PointedPetal from "../containers/shapes/PointedPetal";
import PointedPetalForm from "../components/forms/PointedPetalForm";

export default class PointedPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return PointedPetal;
    }

    form() {
        return PointedPetalForm;
    }

    stateToPropsMap(state) {
        return {
            ...basicRingProps(state.shapeProps.byId, this.id),
            lineWidth: lineWidthState(state, this.id),
        };
    }

    dispatchToPropsMap(dispatch) {
        return basicHistoryDispatch(dispatch, this.id);
    }
}
