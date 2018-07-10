import {connect} from "react-redux";
import ManualRoundedPetalForm from "../../components/forms/ManualRoundedPetalForm";
import { MANUAL_ROUNDED_PETAL_CONFIG, manualSingleControlPointRingProps, manualSingleControlPointRingDispatch } from "../../shapeConstants";
import {changeManualRoundedPetalConfig} from "../../actions/changeManualRoundedPetalConfig";

const mapStateToProps = state => ({
    ...manualSingleControlPointRingProps(state, MANUAL_ROUNDED_PETAL_CONFIG),
});

const mapDispatchToProps = dispatch => ({
    ...manualSingleControlPointRingDispatch(dispatch, changeManualRoundedPetalConfig),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManualRoundedPetalForm);