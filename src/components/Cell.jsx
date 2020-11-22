import React from 'react';
import { StyledCell } from './styles/StyledCell.jsx';
import { TETROMINOS } from '../tetrominos.jsx';

const Cell = ({ type }) => (
 <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
