import React from 'react';
import styled from 'styled-components';

const StyledStartButton = styled.button`
	box-sizing: border-box;
	margin: 0 0 1em 1.5em;
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

	&:hover{
		background: #2a9d8f;
	}
`;

const StartButton = ({ callback }) => (
	<StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;