import logo from './logo.svg';
import './App.css';

import BrokenButton from './BrokenButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrokenButton />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{ background: 'red' }} onClick={() => {
          console.log('potatoes are cool')
          const blah = {}
          console.log(blah.potatoes.cool);
        }}>potatoes</div>
      </header>
    </div>
  );
}

export default App;
