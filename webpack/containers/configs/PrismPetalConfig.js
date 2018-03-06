import { connect } from "react-redux";
import PrismPetalForm from "../../components/forms/CurveyPetalForm";
import { changePrismPetalConfig } from "../../actions/changePrismPetalConfig";
import { basicRingDispatch, basicRingProps, CURVEY_PETAL_CONFIG } from "../../shapeConstants";

const mapStateToProps = state => ({
    ...basicRingProps(state, CURVEY_PETAL_CONFIG),
    outerXControl: state[CURVEY_PETAL_CONFIG].outerXControl,
    outerYControl: state[CURVEY_PETAL_CONFIG].outerYControl,
});

const mapDispatchToProps = dispatch => ({
    ...basicRingDispatch(dispatch, changePrismPetalConfig),
    updateOuterXControl: value => {dispatch(changePrismPetalConfig(`outerXControl`, value));},
    updateOuterYControl: value => {dispatch(changePrismPetalConfig(`outerYControl`, value));},
});

export default connect(mapStateToProps, mapDispatchToProps)(PrismPetalForm);