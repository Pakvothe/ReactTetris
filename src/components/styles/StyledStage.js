import styled from 'styled-components';

export const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(
		${props => props.height},
		calc(25vw / ${props => props.width})
	);
	grid-template-columns: repeat(${props => props.width}, 1fr);
	grid-gap: 1px;
	border: 3px solid #2A9D8F;
	width: 100%;
	max-width: 25vw;
	background-color: #2A9D8F;
	border-radius: 5px;
`;