import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NavbarQuizApp from './components/nav';
import UserInfo from './components/userInfo';
import NotFound from './components/notfound';
import QuestionCard from './components/questioncard'



function App() {
  return (
    <div>
      <NavbarQuizApp/>

      <Router>
        <Switch>
          <Route exact path = '/' component = {UserInfo}/>
          <Route path = '/questionCard/:name?/:subject?/:level?' component = {QuestionCard}/>
          <Route path = '*'  component = {NotFound} />
        </Switch>
      </Router>
      

    </div>
    
  );
}

export default App;
