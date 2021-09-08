import logo from './logo.svg';
import './App.css';
import Landing from './Components/Landing';
import InfoBoxes from './Components/InfoBoxes';
import { trigger } from './Utilities/Events';
import GdImage from './Components/GDriveImage';

function App() {

  const onScroll = e => {
    trigger("main:scroll");
  }

  return (
    <div className="App" id="App" onScroll={onScroll}>
      <header className="App-header">
        <Landing></Landing>
        
        <InfoBoxes></InfoBoxes>
      </header>
    </div>
  );
}

export default App;
