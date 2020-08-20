import React , { useState} from 'react';


import NavbarQuizApp from './components/nav';
import UserInfo from './components/userInfo';
import QuestionCard from './components/questioncard'



const App = () => {
  const [registered , setRegistered] = useState<boolean>(false);
  const [user , setUser] = useState<any>({});

  return (
    <div>
      <NavbarQuizApp/>
      {!registered? (<UserInfo setRegistered = {setRegistered} setUser = {setUser}/>) : (<QuestionCard setRegistered = {setRegistered} userData = {user}/>)}


      

    </div>
    
  );
}

export default App;
