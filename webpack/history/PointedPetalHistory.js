import AbstractHistory from "./AbstractHistory.js";
import PointedPetal from "../containers/shapes/PointedPetal";
import PointedPetalForm from "../components/forms/PointedPetalForm";
import {basicRingProps} from "../shapeConstants";

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
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            ...this.basicHistoryDispatch(dispatch, this.id),
            ...this.universalDispatch(dispatch),
        };
    }
}
