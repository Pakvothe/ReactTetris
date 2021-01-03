import styled from 'styled-components';

export const StyledDisplay = styled.div`
	box-sizing: border-box;
	display: flex;
	align-items: center;
	margin: 0 0 1em 2em;
	padding: 20px;
	border: 3px solid #2a9d8f;
	min-height: 30px;
	width: 100%;
	border-radius: 20px;
	color: ${props => (props.gameOver ? 'red' : 'white')};
	background-color: rgba(42, 157, 143,0.6);
	font-family: Pixel, Arial, Helvetica, sans-serif;
	font-size: 0.8rem;
`;
