import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import { basicHistoryDispatch, basicRingProps, lineWidthDispatch, lineWidthState } from "../shapeConstants";
import PrismPetal from "../containers/shapes/PrismPetal";
import PrismPetalForm from "../components/forms/PrismPetalForm";

export default class PrismPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return PrismPetal;
    }

    form() {
        return PrismPetalForm;
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
