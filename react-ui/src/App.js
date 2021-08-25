import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import InfoBoxes from './Components/InfoBoxes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Landing></Landing>
        <InfoBoxes></InfoBoxes>
      </header>
    </div>
  );
}

export default App;
