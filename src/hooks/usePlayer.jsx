import { useCallback, useState } from 'react';

import { TETROMINOS, randomTetromino } from '../tetrominos.jsx';
import { STAGE_WIDTH } from '../gameHelpers.jsx';

export const usePlayer = () => {
 const [player, setPlayer] = useState({
  pos: { x: 0, y: 0 },
  tetromino: randomTetromino().shape,
  collided: false,
 });

 //setea la posicion en el estado player, recive la posicion x/y. Y tambien si hay colision
 const updatePlayerPos = ({ x, y, collided }) => {
  setPlayer((prev) => ({
   ...prev,
   pos: { x: (prev.pos.x += x), y: (prev.pos.y += y) },
   collided,
  }));
 };

 const resetPlayer = useCallback(() => {
  setPlayer({
   pos: { x: STAGE_WIDTH / 2 - 2, y: 0 },
   tetromino: randomTetromino().shape,
   collided: false,
  });
 }, []);

 return [player, updatePlayerPos, resetPlayer];
};
