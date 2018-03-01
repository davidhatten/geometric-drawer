import { connect } from "react-redux";
import CurveyPetalForm from "../../components/forms/CurveyPetalForm";
import { changeCurveyPetalConfig } from "../../actions/changeCurveyPetalConfig";
import { basicRingDispatch, basicRingProps, CURVEY_PETAL_CONFIG } from "../../shapeConstants";

const mapStateToProps = state => ({
    ...basicRingProps(state, CURVEY_PETAL_CONFIG),
    outerXControl: state[CURVEY_PETAL_CONFIG].outerXControl,
    outerYControl: state[CURVEY_PETAL_CONFIG].outerYControl,
});

const mapDispatchToProps = dispatch => ({
    ...basicRingDispatch(dispatch, changeCurveyPetalConfig),
    updateOuterXControl: value => {dispatch(changeCurveyPetalConfig(`outerXControl`, value));},
    updateOuterYControl: value => {dispatch(changeCurveyPetalConfig(`outerYControl`, value));},
});

export default connect(mapStateToProps, mapDispatchToProps)(CurveyPetalForm);