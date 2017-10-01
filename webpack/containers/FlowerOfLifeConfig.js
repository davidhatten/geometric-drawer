import { FOL_CONFIG } from '../shapeConstants';
import { connect } from 'react-redux';
import { changeIterations, changeRadius } from '../actions/changeFOLConfig';
import FlowerOfLifeForm from "../components/FlowerOfLifeForm";

const mapStateToProps = state => ({
    iterations: state[FOL_CONFIG].iterations,
    radius: state[FOL_CONFIG].radius,
});

const mapDispatchToProps = dispatch => ({
    updateIterations: (value) => {dispatch(changeIterations(parseInt(value)));},
    updateRadius: (value) => {dispatch(changeRadius(parseInt(value)));},
});

export default connect(mapStateToProps, mapDispatchToProps)(FlowerOfLifeForm);
