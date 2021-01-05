import {
	SET_DROP_TIME,
	SET_GAME_OVER,
} from '../constants';

const initialState = {
	dropTime: null,
	gameOver: false,

};

const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DROP_TIME:
			return {
				...state,
				dropTime: action.payload
			}

		case SET_GAME_OVER:
			return {
				...state,
				gameOver: action.payload
			}

		default: return state;
	}
}

export default Reducer;