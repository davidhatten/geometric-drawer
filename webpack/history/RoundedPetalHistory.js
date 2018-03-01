import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import { changeHistoryInnerRadius, changeHistoryOuterRadius, lineWidthDispatch, lineWidthState } from "../shapeConstants";
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
            innerRadius: state.shapeProps.byId[this.id].innerRadius,
            outerRadius: state.shapeProps.byId[this.id].outerRadius,
            xControl: state.shapeProps.byId[this.id].xControl,
            yControl: state.shapeProps.byId[this.id].yControl,
            axes: state.shapeProps.byId[this.id].axes,
            innerGap: state.shapeProps.byId[this.id].innerGap,
            outerGap: state.shapeProps.byId[this.id].outerGap,
            rotation: state.shapeProps.byId[this.id].rotation,
            lineWidth: lineWidthState(state, this.id),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            updateInnerRadius: value => {dispatch(changeHistoryInnerRadius(this.id, parseInt(value)));},
            updateOuterRadius: value => {dispatch(changeHistoryOuterRadius(this.id, parseInt(value)));},
            updateXControl: value => {dispatch(changeHistoryProp(this.id, `xControl`, parseInt(value)));},
            updateYControl: value => {dispatch(changeHistoryProp(this.id, `yControl`, parseInt(value)));},
            updateAxes: value => {dispatch(changeHistoryProp(this.id, `axes`, parseInt(value)));},
            updateInnerGap: value => {dispatch(changeHistoryProp(this.id, `innerGap`, parseInt(value)));},
            updateOuterGap: value => {dispatch(changeHistoryProp(this.id, `outerGap`, parseInt(value)));},
            updateRotation: value => {dispatch(changeHistoryProp(this.id, `rotation`, parseInt(value)));},
            updateLineWidth: lineWidthDispatch(dispatch, this.id),
        };
    }
}
