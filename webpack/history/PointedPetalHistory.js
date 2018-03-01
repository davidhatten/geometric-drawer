import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import {
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
        return ({
            ...basicRingProps(state.shapeProps.byId, this.id),
            lineWidth: lineWidthState(state, this.id),
        });
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateInnerRadius: value => {dispatch(changeHistoryInnerRadius(this.id, parseInt(value)));},
            updateOuterRadius: value => {dispatch(changeHistoryOuterRadius(this.id, parseInt(value)));},
            updateXControl: value => {dispatch(changeHistoryProp(this.id, `innerXControl`, parseInt(value)));},
            updateYControl: value => {dispatch(changeHistoryProp(this.id, `innerYControl`, parseInt(value)));},
            updateAxes: value => {dispatch(changeHistoryProp(this.id, `axes`, parseInt(value)));},
            updateInnerGap: value => {dispatch(changeHistoryProp(this.id, `innerGap`, parseInt(value)));},
            updateOuterGap: value => {dispatch(changeHistoryProp(this.id, `outerGap`, parseInt(value)));},
            updateRotation: value => {dispatch(changeHistoryProp(this.id, `rotation`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, this.id),
        };
    }
}
