import { useState } from 'react';
import { createStage } from '../gameHelpers.jsx';

export const useStage = () => {
 const [stage, setStage] = useState(createStage());

 return [stage, setStage];
};
