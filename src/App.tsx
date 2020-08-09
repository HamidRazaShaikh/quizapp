import React , { useState} from 'react';


import NavbarQuizApp from './components/nav';
import UserInfo from './components/userInfo';
import NotFound from './components/notfound';
import QuestionCard from './components/questioncard'



const App = () => {
  const [registered , setRegistered] = useState(false);
  const [user , setUser] = useState({})
  return (
    <div>
      <NavbarQuizApp/>
      {!registered? (<UserInfo setRegistered = {setRegistered} setUser = {setUser}/>) : (<QuestionCard userData = {user}/>)}


      

    </div>
    
  );
}

export default App;
