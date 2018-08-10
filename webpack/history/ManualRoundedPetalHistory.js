import AbstractHistory from "./AbstractHistory.js";
import { manualSingleControlPointRingProps } from "../shapeConstants";
import ManualRoundedPetal from "../containers/shapes/ManualRoundedPetal";
import ManualRoundedPetalForm from "../components/forms/ManualRoundedPetalForm";

export default class ManualRoundedPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
    }

    shape() {
        return ManualRoundedPetal;
    }

    form() {
        return ManualRoundedPetalForm;
    }

    stateToPropsMap(state) {
        return {
            ...manualSingleControlPointRingProps(state.shapeProps.byId, this.id),
            ...this.universalProps(state),
        };
    }

    dispatchToPropsMap(dispatch) {
        return {
            ...this.manualHistorySingleControlPointRingDispatch(dispatch, this.id),
            ...this.universalDispatch(dispatch),
        };
    }
}
