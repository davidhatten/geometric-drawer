import { connect } from "react-redux";
import { basicRingDispatch, basicRingProps, POINTED_PETAL_CONFIG } from "../../shapeConstants";
import { changePointedPetalConfig } from "../../actions/changePointedPetalConfig";
import PointedPetalForm from "../../components/forms/PointedPetalForm";

const mapStateToProps = state => (basicRingProps(state, POINTED_PETAL_CONFIG));

const mapDispatchToProps = dispatch => (basicRingDispatch(dispatch, changePointedPetalConfig));

export default connect(mapStateToProps, mapDispatchToProps)(PointedPetalForm);