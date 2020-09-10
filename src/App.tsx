import React, { useState } from "react";

import NavbarQuizApp from "./components/nav";
import UserInfo from "./components/userInfo";
import QuestionCard from "./components/questioncard";
import {initNotification} from "./services/firebase";

// import firebase from "./services/firebase";

// ************tow page application setup*****************

const App = () => {

  initNotification()
  // const messaging: any = firebase.messaging();
  // messaging
  //   .requestPermission()
  //   .then(() => messaging.token())
  //   .then((token: string) => console.log("token", token));

    

  const [registered, setRegistered] = useState<boolean>(false);
  const [user, setUser] = useState<any>({});

  return (
    <div>
      <NavbarQuizApp />
      {!registered ? (
        <UserInfo setRegistered={setRegistered} setUser={setUser} />
      ) : (
        <QuestionCard setRegistered={setRegistered} userData={user} />
      )}
    </div>
  );
};

export default App;
