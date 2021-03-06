import './App.css';
import Landing from './Components/Landing';
import InfoBoxes from './Components/InfoBoxes';
import {trigger} from './Utilities/Events';

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
