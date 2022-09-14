import {useRef, useState, useEffect} from 'react';
import './App.scss';
import Button from './Button';

export default function Calculator(props) {
  const [equation, setEquation] = useState('');
  const [hasCalculated, setHasCalculated] = useState(false);
  const [error, setError] = useState(false);
  // prettier-ignore
  const numbers = ['AC', '(', ')', 7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, 'C'];
  const operators = ['÷', '×', '−', '+', '='];

  const screen = useRef();

  useEffect(() => {
    const height = screen.current.getBoundingClientRect().height;
    const scrollHeight = screen.current.scrollHeight;
    screen.current.scrollTo(0, scrollHeight - height);
  }, [equation]);

  const state = {
    equation: equation,
    setEquation: setEquation,
    hasCalculated: hasCalculated,
    setHasCalculated: setHasCalculated,
    error: error,
    setError: setError,
  };

  return (
    <div className="calculator">
      <div className="screen" style={{border: error ? 'solid 4px #ff0000' : null}}>
        <div className="screen__container" ref={screen}>
          <span>{equation}</span>
        </div>
      </div>

      <div className="buttons">
        <div className="numbers">
          {numbers.map((num, i) => (
            <Button key={i} label={num} state={state} />
          ))}
        </div>

        <div className="operators">
          {operators.map((num, i) => (
            <Button key={i} label={num} color="#6b758a" state={state} />
          ))}
        </div>
      </div>
    </div>
  );
}
