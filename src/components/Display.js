import React from 'react';
import { useSelector } from 'react-redux';
import { StyledDisplay } from './styles/StyledDisplay';

const Display = ({ text }) => {
	const gameOver = useSelector(state => state.gameOver);
	return (
		<StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
	)
};

export default Display;