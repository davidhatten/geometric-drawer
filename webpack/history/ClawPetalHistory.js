import AbstractHistory from "./AbstractHistory.js";
import { basicRingProps } from "../shapeConstants";
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
            ...this.basicHistoryDispatch(dispatch, this.id),
            ...this.universalDispatch(dispatch),
        };
    }
}
