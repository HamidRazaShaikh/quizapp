importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');

const firebaseConfig = {
    
    apiKey: "AIzaSyBpGOTjxg3ICkwhd87z76y_LUaISTO8Rqk",
    authDomain: "hello-b74ce.firebaseapp.com",
    databaseURL: "https://hello-b74ce.firebaseio.com",
    projectId: "hello-b74ce",
    storageBucket: "hello-b74ce.appspot.com",
    messagingSenderId: "936404029165",
    appId: "1:936404029165:web:612654fda825654f"

  };

  firebase.initializeApp(firebaseConfig);
  firebase.messaging();


