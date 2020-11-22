import React, { useState } from 'react';

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

 const [player] = usePlayer();
 const [stage, setStage] = useStage(player);

 console.log('re-render');
 return (
  <StyledTetrisContainer>
   <StyledTetris>
    <Stage stage={stage} />
    <aside>
     {gameOver ? (
      <Display gameover={gameOver} text="Game Over" />
     ) : (
      <div>
       <Display text="Score" />
       <Display text="Rows" />
       <Display text="Level" />
      </div>
     )}
     <StartButton />
    </aside>
   </StyledTetris>
  </StyledTetrisContainer>
 );
};

export default Tetris;
