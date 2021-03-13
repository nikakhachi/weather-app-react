import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header/main';
import RandomInfo from './components/Random-Info/randominfo';
import SearchInfo from './components/Search-Info/searchinfo';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App(){

  const [searchedCity, searchedCitySet] = useState('');

  function storeCity(e){
    searchedCitySet(e.target.value);
  }

  return(
    <Router>
      <Header search={storeCity} input={searchedCity}/>
      <Switch>
        <Route path='/' exact component={RandomInfo}/>
        <Route path='/:city' component={SearchInfo} />
      </Switch>
    </Router>
  )
}


ReactDOM.render(<App />,document.getElementById('root'));