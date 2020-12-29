import './App.css';
import Wrapper from './components/Wrapper';
import Globalstate from './Context/Globalstate';
import "./components/all.min.css"

function App() {
  return (
    <Globalstate>
      <div className="App">
        <Wrapper/>
      </div>
    </Globalstate>
  );
}

export default App;
