import AbstractHistory from "./AbstractHistory";
import {manualSingleControlPointRingProps} from "../shapeConstants";

export default class ManualPointedPetalHistory extends AbstractHistory {
    constructor(id) {
        super(id);
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
