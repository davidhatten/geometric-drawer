import AbstractHistory from "./AbstractHistory";
import {manualDoubleControlPointRingProps} from "../shapeConstants";

export default class ManualCurveyPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    stateToPropsMap(state) {
        return {
            ...manualDoubleControlPointRingProps(state.shapeProps.byId, this.id),
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            ...this.manualHistoryDoubleControlPointRingDispatch(dispatch, this.id),
            ...this.universalDispatch(dispatch),
        };
    }
}
