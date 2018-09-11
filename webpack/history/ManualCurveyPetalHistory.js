import AbstractHistory from "./AbstractHistory";
import ManualCurveyPetal from "../containers/shapes/ManualCurveyPetal";
import ManualCurveyPetalForm from "../components/forms/ManualCurveyPetalForm";
import {manualDoubleControlPointRingProps} from "../shapeConstants";

export default class ManualCurveyPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return ManualCurveyPetal;
    }

    form() {
        return ManualCurveyPetalForm;
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
