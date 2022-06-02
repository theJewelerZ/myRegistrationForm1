import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Join <code>The Fledge</code> Dao
        </p>
        <a
          className="App-link"
          href="https://snapshot.org/#/thefledge.eth"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn How
        </a>
      </header>
    </div>
  );
}

export default App;
