const isInteger = num => Number.isInteger(num);

const checkOperators = equation => '÷×−+'.includes(equation[equation.length - 1]);

const splitNumbers = equation =>
  equation
    .replace(/\+/g, ' ')
    .replace(/÷/g, ' ')
    .replace(/×/g, ' ')
    .replace(/−/g, ' ')
    .trim()
    .split(' ');

export const validation = (element, state, submit) => {
  console.log();
  switch (element) {
    case 'C':
      state.setEquation(prevState => prevState.slice(0, -1));
      break;
    case 'AC':
      state.setEquation('');
      break;
    case '=':
      submit();
      break;
    case '.':
      state.setEquation(prevState => {
        const numbers = splitNumbers(prevState);
        if (prevState.trim() == false) return '0.';
        if (!numbers[numbers.length - 1].includes('.')) return prevState + element;
        return prevState;
      });
      break;
    case '÷':
    case '×':
    case '+':
      if (state.hasCalculated) state.setHasCalculated(false);
      state.setEquation(prevState => {
        if (checkOperators(prevState)) return prevState;
        if (prevState == false) return '';
        return prevState + element;
      });
      break;
    case '−':
      if (state.hasCalculated) state.setHasCalculated(false);
      state.setEquation(prevState => {
        if (checkOperators(prevState)) return prevState;
        return prevState + element;
      });
      break;
    default:
      state.setEquation(prevState => {
        if (prevState === '0') return element;
        if (state.hasCalculated) {
          state.setHasCalculated(false);
          return '' + element;
        }
        return prevState + element;
      });
      break;
  }
};
