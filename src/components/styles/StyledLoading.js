import styled from 'styled-components';
import LoadingOverlay from 'react-loading-overlay';

export const StyledLoader = styled(LoadingOverlay)`
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 20em;
		height: 20em;
	
	.css-df17o1{
		background: transparent;
	}

	.loading__spinner {
		width: 100px;
		& svg circle { stroke: #2a9d8f;}
	}

	.spinner{
		position: relative;
		top: 0;
	}

	.loading__content {
		position: absolute;
		top: 50px;
		left: 50%;
		transform: translateX(-50%);
		font-size: 1.2em;
		font-weight: 900;
		color: black;
	}
`