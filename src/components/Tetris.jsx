import React from 'react';
import { createStage } from '../gameHelpers.jsx';
import { StyledTetris, StyledTetrisContainer } from './styles/StyledTetris.jsx';
//Componentes
import Stage from './Stage.jsx';
import Display from './Display.jsx';
import StartButton from './StartButton.jsx';

const Tetris = () => {
 return (
  <StyledTetrisContainer>
   <StyledTetris>
    <Stage stage={createStage()} />
    <aside>
     <div>
      <Display text="Score" />
      <Display text="Rows" />
      <Display text="Level" />
     </div>
     <StartButton />
    </aside>
   </StyledTetris>
  </StyledTetrisContainer>
 );
};

export default Tetris;
