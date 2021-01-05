import React, { useState } from 'react';
import styled from 'styled-components';

export const StyledStartButton = styled.button`
	box-sizing: border-box;
	margin-bottom: 1em;
	padding: 1.5em;
	width: 100%;
	border-radius: 20px;
	border: 3px solid #2A9D8F;
	color: white;
	background: rgba(38, 70, 83, 0.7);
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 1rem;
	outline: none;
	cursor: pointer;
	transition: background .2s ease-in-out;
	margin-top: 1em;

	&:focus{
		outline: none;
 		box-shadow: none;
	}
	&:hover{
		background: #2a9d8f;
	}

	&.btn-sec{
		border: 3px solid #ec85e1;
	}
`;

const StartButton = ({ callback }) => {
	const [count, setCount] = useState(true);

	const onCount = () => {
		setCount(!count);
		callback();
	}

	return (
		<StyledStartButton onClick={onCount}>
			{count === true ? 'Start Game' : 'Reset Game'}
		</StyledStartButton>
	);
}
export default StartButton;
