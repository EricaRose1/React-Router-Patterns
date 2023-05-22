import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import dogs from "./dogs";
import DogDetails from './DogDetails';
import DogList from './DogsList';

function App() {
  return (
    <Switch>
      <Route exact path = '/dogs'>
        <DogList dogs={dogs}/>
      </Route>

      <Route exact path = '/dogs/:name'>
        <DogDetails dogs={dogs}/>
      </Route>

      <Redirect to='/dogs' />
    </Switch>
  )
}


export default App;