import { DRINK_BEER } from '../actions/drinkBeer';

const initialState = {
    beer: `DRINK THE BEER!`,
};

const drinkBeer = (state = initialState, action) => {
    switch (action.type) {
    case DRINK_BEER:
        console.log("Got a beer reducer about writing to a console");
        console.log("My state is ", state);
        let newstate = {beer: "lolololololol"};
        console.log("my newstate is ", newstate)
        return newstate;
    default:
        return state;
    }
};

export default drinkBeer;
