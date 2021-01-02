import './App.css';
import Wrapper from './components/Wrapper';
import Globalstate from './Context/Globalstate';
import "./components/all.min.css";
import CartModal from './components/CartModal';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <Globalstate>
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Wrapper} />
            <Route path='/checkout' exact component={Checkout} />
          </Switch>
          <CartModal/>
        </div>
      </Router>
    </Globalstate>
  );
}

export default App;
