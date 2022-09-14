import './App.scss';
import {validation} from './helpers';

export default function Button(props) {
  const styles = {
    gridRow: props.row || null,
    gridColumn: props.column || null,
    background: props.color || null,
  };

  const calculate = () => {
    const equation = props.state.equation.replace('÷', '/').replace('×', '*').replace('−', '-');

    try {
      const calculation = eval(equation);
      props.state.setEquation(`${calculation}`);
      props.state.setHasCalculated(true);
    } catch (error) {
      props.state.setError(true);
    }
  };

  const click = () => {
    if (props.state.error) props.state.setError(false);
    validation(props.label, props.state, calculate);
  };

  return (
    <button className="button" style={styles} onClick={click}>
      <span className="no-select">{props.label}</span>
    </button>
  );
}
