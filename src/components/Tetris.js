import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import Zoom from 'react-reveal/Zoom';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
import { setDropTime, setGameOver } from '../redux/actions ';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Player from './player';

const Tetris = () => {
	const dispatch = useDispatch();
	const dropTime = useSelector(state => state.dropTime);
	const gameOver = useSelector(state => state.gameOver);

	const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
	const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);

	console.log('re-render');

	const movePlayer = dir => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 });
		}
	};

	const keyUp = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 40) {
				dispatch(setDropTime(1000 / (level + 1)));
			}
		}
	};

	const startGame = () => {
		setStage(createStage());
		dispatch(setDropTime(1000));
		resetPlayer();
		setScore(0);
		setLevel(0);
		setRows(0);
		dispatch(setGameOver(false));
	};

	const drop = () => {
		// Increase level when player has cleared 10 rows
		if (rows > (level + 1) * 10) {
			setLevel(prev => prev + 1);
			// Also increase speed
			dispatch(setDropTime(1000 / (level + 1) + 200));
		}

		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false });
		} else {
			// Game over!
			if (player.pos.y < 1) {
				console.log('GAME OVER!!!');
				dispatch(setGameOver(true));
				dispatch(setDropTime(null));
			}
			updatePlayerPos({ x: 0, y: 0, collided: true });
		}
	};

	const dropPlayer = () => {
		dispatch(setDropTime(null));
		drop();
	};


	useInterval(() => {
		drop();
	}, dropTime);

	const move = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 37) {
				movePlayer(-1);
			} else if (keyCode === 39) {
				movePlayer(1);
			} else if (keyCode === 40) {
				dropPlayer();
			} else if (keyCode === 38) {
				playerRotate(stage, 1);
			}
		}
	};

	return (
		<StyledTetrisWrapper
			role="button"
			tabIndex="0"
			onKeyDown={e => move(e)}
			onKeyUp={keyUp}
		>
			<StyledTetris>
				<Zoom left>
					<div className='box_containers'>
						<div className='info_container'>
							<aside className='box_info'>
								<h2>Tetris Game</h2>
								<div>
									<p>Created by</p>
									<p>Franco Ortiz</p>
								</div>
								<a href='https://github.com/Pakvothe/ReactTetris' target='_blank' rel='noreferrer'> ~ Repository ~ </a>
							</aside>
							<aside className='box_info'>
								<h2>Controls</h2>
								<div>
									<p className='controls'><span>⇧ </span> = Spin Tetromino</p>
									<p className='controls'><span>⇩ </span> = Fast Fall</p>
									<p className='controls'><span>⇨ </span> = Right</p>
									<p className='controls'><span>⇦ </span> = Left</p>
								</div>
							</aside>
						</div>
						<div className='info_container score_container'>
							<aside className='box_info scores'>
								<h2>Scores</h2>
								<Player />
							</aside>
						</div>
					</div>
				</Zoom>
				<Stage stage={stage} />
				<Zoom right>
					<aside>
						{gameOver ? (
							<Display gameOver={gameOver} text="Game Over" />
						) : (
								<div>
									<Display text={`Score: ${score}`} />
									<Display text={`rows: ${rows}`} />
									<Display text={`Level: ${level}`} />
									<Display text={`Down Speed: ${Math.round(dropTime)} ms`} />
								</div>
							)}
						<StartButton callback={startGame} />
					</aside>
				</Zoom>
			</StyledTetris>
		</StyledTetrisWrapper>
	);
};

export default Tetris;