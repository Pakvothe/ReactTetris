import { SET_GAME_OVER, SET_DROP_TIME } from '../constants';



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