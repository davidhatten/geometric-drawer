import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import {lineWidthDispatch, lineWidthState} from "../shapeConstants";
import {changeHistoryCurveyInnerRadius, changeHistoryCurveyOuterRadius} from "../actions/changeCurveyPetalConfig";
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
            innerRadius: state.shapeProps.byId[this.id].innerRadius,
            outerRadius: state.shapeProps.byId[this.id].outerRadius,
            innerXControl: state.shapeProps.byId[this.id].innerXControl,
            innerYControl: state.shapeProps.byId[this.id].innerYControl,
            outerXControl: state.shapeProps.byId[this.id].outerXControl,
            outerYControl: state.shapeProps.byId[this.id].outerYControl,
            axes: state.shapeProps.byId[this.id].axes,
            innerGap: state.shapeProps.byId[this.id].innerGap,
            outerGap: state.shapeProps.byId[this.id].outerGap,
            rotation: state.shapeProps.byId[this.id].rotation,
            lineWidth: lineWidthState(state, this.id),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateInnerRadius: value => {dispatch(changeHistoryCurveyInnerRadius(this.id, parseInt(value)));},
            updateOuterRadius: value => {dispatch(changeHistoryCurveyOuterRadius(this.id, parseInt(value)));},
            updateInnerXControl: value => {dispatch(changeHistoryProp(this.id, `innerXControl`, parseInt(value)));},
            updateInnerYControl: value => {dispatch(changeHistoryProp(this.id, `innerYControl`, parseInt(value)));},
            updateOuterXControl: value => {dispatch(changeHistoryProp(this.id, `outerXControl`, parseInt(value)));},
            updateOuterYControl: value => {dispatch(changeHistoryProp(this.id, `outerYControl`, parseInt(value)));},
            updateAxes: value => {dispatch(changeHistoryProp(this.id, `axes`, parseInt(value)));},
            updateInnerGap: value => {dispatch(changeHistoryProp(this.id, `innerGap`, parseInt(value)));},
            updateOuterGap: value => {dispatch(changeHistoryProp(this.id, `outerGap`, parseInt(value)));},
            updateRotation: value => {dispatch(changeHistoryProp(this.id, `rotation`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, this.id),
        };
    }
}
