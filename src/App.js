import './App.scss';
import Calculator from './Calculator';

const resize = () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
};

resize();
window.addEventListener('resize', resize);

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
