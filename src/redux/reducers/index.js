import {
	SET_DROP_TIME,
	SET_GAME_OVER,
	SET_CURRENT_PLAYER,
	SET_BUTTON_COUNT,
} from '../constants';

const initialState = {
	dropTime: null,
	gameOver: false,
	currentPlayer: '',
	buttonCount: true
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
		case SET_CURRENT_PLAYER:
			return {
				...state,
				currentPlayer: action.payload
			}
		case SET_BUTTON_COUNT:
			return {
				...state,
				buttonCount: action.payload
			}

		default: return state;
	}
}

export default Reducer;