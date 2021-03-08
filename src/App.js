import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Country from './components/Country/Country';
import CountryDetail from './components/CountryDetail/CountryDetail';


function App() {
 
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route exact path="/">
            <Home />
        </Route>

        <Route path="/country/:countryName">
          <CountryDetail/>
        </Route>

      
        <Route path="*">
            <NoMatch />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
