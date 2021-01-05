import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFirestore } from '../firebase';
import firebase from 'firebase/app';

import { createStage, checkCollision } from '../gameHelpers';
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';
import { StyledStartButton } from './StartButton';
import Zoom from 'react-reveal/Zoom';
import Swal from 'sweetalert2';

// Custom Hooks
import { useInterval } from '../hooks/useInterval';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';
import { useGameStatus } from '../hooks/useGameStatus';
import { setDropTime, setGameOver, setCurrentPlayer, setButtonCount } from '../redux/actions ';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import Loading from './loading';

const Tetris = () => {
	const dispatch = useDispatch();
	const dropTime = useSelector(state => state.dropTime);
	const gameOver = useSelector(state => state.gameOver);
	const currentPlayer = useSelector(state => state.currentPlayer);

	const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer();
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer);
	const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(rowsCleared);
	const [loading, setLoading] = useState(true);
	const [visit, setVisit] = useState(0);
	const [puntaje, setPuntaje] = useState([
		{
			user: '',
			number: 0
		},
		{
			user: '',
			number: 0
		},
		{
			user: '',
			number: 0
		}
	]);
	//Firebase ==>

	useEffect(() => {
		const db = getFirestore();
		const scores = db.collection('Tetris666').doc('FrancoTetris')
		scores.get().then(puntajes => {
			setLoading(false)
			scores.update({
				visits: firebase.firestore.FieldValue.increment(1)
			})
			const data = puntajes.data();
			setVisit(data.visits)
			setPuntaje([
				{
					user: data.maxName,
					number: data.maxScore
				},
				{
					user: data.secName,
					number: data.secScore
				},
				{
					user: data.thirdName,
					number: data.thirdScore
				}
			])
		})
	}, [])

	useEffect(() => {
		if (gameOver) {
			let objeto = {
				user: currentPlayer,
				number: score
			}
			let array = [...puntaje];

			if (score > puntaje[0].number) {
				array.unshift(objeto);
				array.pop();
				setPuntaje(array);
			} else if (score > puntaje[1].number) {
				array.pop();
				let player = array.pop();
				array.push(objeto);
				array.push(player);
				setPuntaje(array);
			} else if (score > puntaje[2].number) {
				array.pop();
				array.push(objeto);
				setPuntaje(array);
			}

			const db = getFirestore();
			const scores = db.collection('Tetris666').doc('FrancoTetris')
			scores.update({
				maxName: puntaje[0].user,
				maxScore: puntaje[0].number,
				secName: puntaje[1].user,
				secScore: puntaje[1].number,
				thirdName: puntaje[2].user,
				thirdScore: puntaje[2].number,
			}).then(() => (
				dispatch(setButtonCount(true))
			)).then(() => (
				dispatch(setGameOver(true))
			))
		}
	}, [gameOver, dispatch, currentPlayer, puntaje, score])

	//-------- <==

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
		dispatch(setButtonCount(false));
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
	const [input, setInput] = useState('');
	const handleChange = (e) => {
		setInput(e.target.value);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setCurrentPlayer(input));
	}

	const handleError = (e) => {
		e.preventDefault();
		Swal.fire({
			heightAuto: false,
			title: 'Error!',
			text: 'Put a player name to play!',
			icon: 'error',
			confirmButtonText: 'Ok',
			confirmButtonColor: '#ec85e1',
		})
	}

	return (
		<>
			{loading === false ? (
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
											<p>Developed by</p>
											<p>Franco Ortiz</p>
										</div>
										<a href='https://github.com/Pakvothe/ReactTetris' target='_blank' rel='noreferrer' className='amarillo'> ~ Repository ~ </a>
									</aside>
									<aside className='box_info'>
										<h2>Controls</h2>
										<div>
											<p className='controls'><span className='amarillo'>⇧ </span>,  Spin Tetromino</p>
											<p className='controls'><span className='amarillo'>⇩ </span>,  Fast Fall</p>
											<p className='controls'><span className='amarillo'>⇨ </span>,  Right</p>
											<p className='controls'><span className='amarillo'>⇦ </span>,  Left</p>
										</div>
									</aside>
								</div>
								<div className='info_container score_container'>
									<aside className='box_info '>
										<h2 >Scores</h2>
										<div >
											<ul>
												<li>
													<h4>Max Score</h4>
													<p className='amarillo'>{puntaje[0].user}</p>
													<p className='amarillo'>{puntaje[0].number}</p>
												</li>
												<li>
													<h4>Second Score</h4>
													<p className='amarillo'>{puntaje[1].user}</p>
													<p className='amarillo'>{puntaje[1].number}</p>
												</li>
												<li>
													<h4>Third Score</h4>
													<p className='amarillo'>{puntaje[2].user}</p>
													<p className='amarillo'>{puntaje[2].number}</p>
												</li>
											</ul>
										</div>
									</aside>
									<aside className='box_info '>
										<h4>Visits</h4>
										<p className='amarillo'>{visit}</p>
									</aside>
								</div>
							</div>
						</Zoom>
						<Stage stage={stage} />
						<Zoom right>
							<aside>
								{gameOver ? (
									<Display text="Game Over" />
								) : (
										<div>
											<Display text={`Score: ${score}`} />
											<Display text={`rows: ${rows}`} />
											<Display text={`Level: ${level}`} />
											<Display text={`Speed: ${Math.round(dropTime)} ms`} />
										</div>
									)}

								<aside className='box_info' >
									<form onSubmit={handleSubmit}>
										{!currentPlayer ? (
											<input className='user_input' onChange={handleChange} value={input} type='text' placeholder='Player Name' required />
										) : (
												<h2 className='user_name'>{currentPlayer}</h2>
											)}
										{input.length > 2 ? (

											<StartButton type='submit' callback={startGame} />
										) : (
												<StyledStartButton onClick={handleError} className='btn-sec'>Start Game</StyledStartButton>
											)}
									</form>
								</aside>
							</aside>
						</Zoom>
					</StyledTetris>
				</StyledTetrisWrapper >
			) : (
					<Loading loading={loading} />
				)}
		</>
	);
};

export default Tetris;