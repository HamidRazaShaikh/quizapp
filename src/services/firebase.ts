import firebase from 'firebase';

const firebaseConfig  = {

  apiKey: "AIzaSyBpGOTjxg3ICkwhd87z76y_LUaISTO8Rqk",
  authDomain: "hello-b74ce.firebaseapp.com",
  databaseURL: "https://hello-b74ce.firebaseio.com",
  projectId: "hello-b74ce",
  storageBucket: "hello-b74ce.appspot.com",
  messagingSenderId: "936404029165",
  appId: "1:936404029165:web:612654fda825654f"

};


firebase.initializeApp(firebaseConfig);
const messaging : any = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission: any) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken :  any ) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err : any) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
};