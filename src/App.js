import tuna from './tuna.png'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="wrapper">
      <div className="App">
        <header className="App-header">
          <img src={tuna} className="App-logo" alt="logo" />
          <p style={{fontSize:100}}>
            TUNA
          </p>
        </header>
      </div>
    </div>
  );
}

export default App;
