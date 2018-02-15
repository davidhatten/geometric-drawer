export default class AbstractHistory {
    constructor (id){
        this.id = id;

        if (new.target === AbstractHistory) {
            throw new TypeError(`Cannot create an abstract history directly.`);
        }

        if (this.shape === undefined) {
            throw new TypeError(`Must define 'shape' parameter with a name constant`);
        }

        if (this.form === undefined) {
            throw new TypeError(`Must define 'form' parameter with a shape form`);
        }
    }

    stateToProps() {
        return state => (this.stateToPropsMap(state));
    }

    dispatchToProps() {
        return dispatch => (this.dispatchToPropsMap(dispatch));
    }
}