import './App.scss';

export default function Button(props) {
  const styles = {
    gridRow: props.row || null,
    gridColumn: props.column || null,
    background: props.color || null,
  };

  const click = () => {
    if (props.label !== 'C' && props.label !== 'AC' && props.label !== '=')
      props.onClick(prevState => prevState + props.label);
  };

  return (
    <button className="button" style={styles} onClick={click}>
      <span className="no-select">{props.label}</span>
    </button>
  );
}
