import { SET_GAME_OVER, SET_DROP_TIME, SET_CURRENT_PLAYER, SET_BUTTON_COUNT } from '../constants';

export const setDropTime = (payload) => {
	return {
		type: SET_DROP_TIME,
		payload
	}
}
export const setGameOver = (payload) => {
	return {
		type: SET_GAME_OVER,
		payload
	}
}
export const setCurrentPlayer = (payload) => {
	return {
		type: SET_CURRENT_PLAYER,
		payload
	}
}
export const setButtonCount = (payload) => {
	return {
		type: SET_BUTTON_COUNT,
		payload
	}
}