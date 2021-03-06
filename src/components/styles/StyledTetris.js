import styled from 'styled-components';

export const StyledTetrisWrapper = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #264653;
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23e76f51' stroke-width='2'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23e9c46a'%3E%3Ccircle cx='769' cy='229' r='9'/%3E%3Ccircle cx='539' cy='269' r='9'/%3E%3Ccircle cx='603' cy='493' r='9'/%3E%3Ccircle cx='731' cy='737' r='9'/%3E%3Ccircle cx='520' cy='660' r='9'/%3E%3Ccircle cx='309' cy='538' r='9'/%3E%3Ccircle cx='295' cy='764' r='9'/%3E%3Ccircle cx='40' cy='599' r='9'/%3E%3Ccircle cx='102' cy='382' r='9'/%3E%3Ccircle cx='127' cy='80' r='9'/%3E%3Ccircle cx='370' cy='105' r='9'/%3E%3Ccircle cx='578' cy='42' r='9'/%3E%3Ccircle cx='237' cy='261' r='9'/%3E%3Ccircle cx='390' cy='382' r='9'/%3E%3C/g%3E%3C/svg%3E");
	overflow: hidden;
`;

export const StyledTetris = styled.div`
	display: flex;
	flex-direction: row-reverse;
	align-items: flex-start;
	justify-content: center;
	padding: 40px;
	margin: 0 auto;
	width: 100vw;

	.user_name {
		text-align: center;
		color: #ec85e1;
		letter-spacing: 1px;
	}
	.user_input {
		width: 100%;
		max-width: 200px;
		border-radius: 20px;
		background-color: rgba(255, 255, 255,0.9);
		border: 3px solid #2a9d8f;
		padding: 0.5em 1em;
	}

	.box_containers{
		display: flex;
		align-items: flex-start;
		justify-content: center;
	}
	aside {
		width: 100%;
		max-width: 200px;
		display: block;
		margin-right: 3em;
	}

	.info_container{
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 3em;
		width: 100%;
		align-items: center;
	
		.box_info{
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			box-sizing: border-box;
			border: 3px solid #2a9d8f;
			border-radius: 20px;
			margin-bottom: 2em;
			padding: 1em;
			background-color: rgba(42, 157, 143,0.6);
			color: white;
			width: 100%;
			
			p {
				text-align: center;
				margin: -0.1em;
	
				&:last-child{
					margin-bottom: 0.5em;
				}
			}
			.controls{
				display:flex;
			}

			a {
				margin-bottom: 1em;
				text-decoration: none;
				color: white;
				font-weight: 600;
	
				&:hover {
					color: #ec85e1;
				}
			}

			ul {
				list-style: none;
			}

			label {
				display: block;
				width: 100%;
				text-align: center;
			}

			h2{
				margin-bottom: 0.5em;
			}
			h4 {
				text-align: center;
				margin-bottom: 0.5em;
			}
			.amarillo{
				color: #E9C46A;
				font-weight: 600;
			}

			span {
				font-size: 1.4em;
			}
		}
	}
`;
