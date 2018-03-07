import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import {
    basicHistoryDispatch,
    basicRingProps, changeHistoryInnerRadius, changeHistoryOuterRadius, CURVEY_PETAL_CONFIG, lineWidthDispatch,
    lineWidthState
} from "../shapeConstants";
import CurveyPetal from "../containers/shapes/CurveyPetal";
import CurveyPetalForm from "../components/forms/CurveyPetalForm";

export default class CurveyPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return CurveyPetal;
    }

    form() {
        return CurveyPetalForm;
    }

    stateToPropsMap(state) {
        return {
            ...basicRingProps(state.shapeProps.byId, this.id),
            outerXControl: state.shapeProps.byId[this.id].outerXControl,
            outerYControl: state.shapeProps.byId[this.id].outerYControl,
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            ...basicHistoryDispatch(dispatch, this.id),
            updateOuterXControl: value => {dispatch(changeHistoryProp(this.id, `outerXControl`, parseInt(value)));},
            updateOuterYControl: value => {dispatch(changeHistoryProp(this.id, `outerYControl`, parseInt(value)));},
            ...this.universalDispatch(dispatch),
        };
    }
}
