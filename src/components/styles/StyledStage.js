import styled from 'styled-components';

export const StyledStage = styled.div`
	display: grid;
	grid-template-rows: repeat(
		${(props) => props.height},
		calc(22vw / ${(props) => props.width})
	);
	grid-template-columns: repeat(${(props) => props.width}, 1fr);
	grid-gap: 1px;
	border: 3px solid #2a9d8f;
	width: 100%;
	max-width: 25vw;
	max-height: 90%;
	background-color: #2a9d8f;
	border-radius: 5px;
`;
