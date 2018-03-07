import AbstractHistory from "./AbstractHistory.js";
import {changeHistoryProp} from "../actions/changeHistoryProp";
import {
    basicHistoryDispatch,
    basicRingProps, changeHistoryInnerRadius, changeHistoryOuterRadius, lineWidthDispatch,
    lineWidthState
} from "../shapeConstants";
import ClawPetal from "../containers/shapes/ClawPetal";
import ClawPetalForm from "../components/forms/ClawPetalForm";

export default class ClawPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape(){
        return ClawPetal;
    }

    form(){
        return ClawPetalForm;
    }

    stateToPropsMap(state) {
        return ({
            ...basicRingProps(state.shapeProps.byId, this.id),
            ...this.universalProps(state),
        });
    }

    dispatchToPropsMap(dispatch) {
        return {
            ...basicHistoryDispatch(dispatch, this.id),
            ...this.universalDispatch(dispatch),
        };
    }
}
