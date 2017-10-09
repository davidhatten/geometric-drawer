import { FOL_CONFIG } from '../../shapeConstants';
import { connect } from 'react-redux';
import { changeFOLConfig } from '../../actions/changeFOLConfig';
import FlowerOfLifeForm from "../../components/forms/FlowerOfLifeForm";

const mapStateToProps = state => ({
    iterations: state[FOL_CONFIG].iterations,
    radius: state[FOL_CONFIG].radius,
});

const mapDispatchToProps = dispatch => ({
    updateIterations: (value) => {dispatch(changeFOLConfig(`iterations`, parseInt(value)));},
    updateRadius: (value) => {dispatch(changeFOLConfig(`radius`, parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(FlowerOfLifeForm);
