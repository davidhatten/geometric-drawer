import {connect} from "react-redux";
import {MANUAL_CURVEY_PETAL_CONFIG, manualDoubleControlPointRingProps} from "../../shapeConstants";
import {changeManualCurveyPetalConfig} from "../../actions/changeManualCurveyPetalConfig";
import ManualCurveyPetalForm from "../../components/forms/ManualCurveyPetalForm";

const mapStateToProps = state => ({
    ...manualDoubleControlPointRingProps(state, MANUAL_CURVEY_PETAL_CONFIG),
});

const mapDispatchToProps = dispatch => ({
    ...manualDoubleControlPointRingDispatch(dispatch, changeManualCurveyPetalConfig),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManualCurveyPetalForm);