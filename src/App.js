import Layout from './components/Layout'
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Resources from "./pages/Resources"
import Contact from "./pages/Contact"
import './App.css';

const PageNotFound = () => (
    <div>
        <h1>Error - 404</h1>
        <p>The page you've tried to acces does not seem to exist</p>
    </div>
)

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Layout>

        <div className='page'>
            <Route render={({location}) => (

                    <Switch location={location}>
                        <Route path="/" component={Home} exact={true}/>
                        <Route path="/home" component={Home} exact={true}/>
                        <Route path="/projects" component={Projects} exact={true}/>
                        <Route path="/about" component={About} exact={true}/>
                        <Route path="/resources" component={Resources} exact={true}/>
                        <Route path="/contact" component={Contact} />
                        <Route component={PageNotFound} exact={true}/>
                    </Switch>
            )} />

        </div>


    </Layout>
    </BrowserRouter>
    </div>
  );
}

export default App;
