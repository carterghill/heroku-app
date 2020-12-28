import Layout from './components/Layout'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Layout>

        Hello world!!!

    </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;
