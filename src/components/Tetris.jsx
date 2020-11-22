import React, { useState } from 'react';
import { createStage } from '../gameHelpers.jsx';

//Styled Componentes
import { StyledTetris, StyledTetrisContainer } from './styles/StyledTetris.jsx';

//Custom Hooks
import { usePlayer } from '../hooks/usePlayer.jsx';
import { useStage } from '../hooks/useStage.jsx';

//Components
import Stage from './Stage.jsx';
import Display from './Display.jsx';
import StartButton from './StartButton.jsx';

const Tetris = () => {
 const [dropTime, setDropTime] = useState(null); // este estado maneja la velocidad dependiendo el nivel
 const [gameOver, setGameOver] = useState(false);

 const [player, updatePlayerPos, resetPlayer] = usePlayer();
 const [stage, setStage] = useStage(player);

 console.log('re-render');

 const movePlayer = (dir) => {
  //se encarga del movimiento de izquierda a derecha
  updatePlayerPos({ x: dir, y: 0 });
 };

 const startGame = () => {
  //resetea todo, crea un nuevo stage y un nuevo jugador
  setStage(createStage());
  resetPlayer();
 };

 const drop = () => {
  updatePlayerPos({ x: 0, y: 1, collided: false });
 };

 const dropPlayer = () => {
  drop();
 };

 const move = ({ keyCode }) => {
  //37 = flecha izquierda, 39 = flecha derecha, 40 = flecha abajo
  if (!gameOver) {
   if (keyCode === 37) {
    movePlayer(-1);
   } else if (keyCode === 39) {
    movePlayer(1);
   } else if (keyCode === 40) {
    dropPlayer();
   }
  }
 };

 return (
  //StyledTetrisContainer sirve para tomar registro del teclado
  <StyledTetrisContainer role="button" tabIndex="0" onKeyDown={(e) => move(e)}>
   <StyledTetris>
    <Stage stage={stage} />
    <aside>
     {gameOver ? (
      <Display gameOver={gameOver} text="Game Over" />
     ) : (
      <div>
       <Display text="Score" />
       <Display text="Rows" />
       <Display text="Level" />
      </div>
     )}
     <StartButton callback={startGame} />
    </aside>
   </StyledTetris>
  </StyledTetrisContainer>
 );
};

export default Tetris;
