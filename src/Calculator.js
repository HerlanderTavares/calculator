import {useRef, useState} from 'react';
import './App.scss';
import Button from './Button';
import useFitText from 'use-fit-text';

export default function Calculator(props) {
  const [equation, setEquation] = useState('');
  // prettier-ignore
  const numbers = ['AC', '(', ')', 7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, 'C'];
  const operators = ['÷', '×', '−', '+', '='];

  return (
    <div className="calculator">
      <div className="screen">
        <span>{equation}</span>
      </div>

      <div className="buttons">
        <div className="numbers">
          {numbers.map((num, i) => (
            <Button key={i} label={num} onClick={setEquation} />
          ))}
        </div>

        <div className="operators">
          {operators.map((num, i) => (
            <Button key={i} label={num} onClick={setEquation} color="#6b758a" />
          ))}
        </div>
      </div>
    </div>
  );
}
