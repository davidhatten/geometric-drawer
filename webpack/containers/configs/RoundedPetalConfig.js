import RoundedPetalForm from "../../components/forms/RoundedPetalForm";
import { connect } from "react-redux";
import { basicRingDispatch, basicRingProps, ROUNDED_PETAL_CONFIG } from "../../shapeConstants";
import { changeRoundedPetalConfig } from "../../actions/changeRoundedPetalConfig";

const mapStateToProps = state => (basicRingProps(state, ROUNDED_PETAL_CONFIG));

const mapDispatchToProps = dispatch => (basicRingDispatch(dispatch, changeRoundedPetalConfig));

export default connect(mapStateToProps, mapDispatchToProps)(RoundedPetalForm);