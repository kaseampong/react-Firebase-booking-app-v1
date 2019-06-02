import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';




const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL:process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

// console.log("NODE_ENV",process.env.NODE_ENV) 
// console.log("API_KEY",process.env.API_KEY)

// console.log(config.databaseURL);
// console.log(config.databaseURL);

  firebase.initializeApp(config);


//   if (!firebase.apps.length) {
//   firebase.initializeApp(config);
// }

// const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  const database = firebase.database();
  const auth = firebase.auth();



export { firebase, auth,database as default };


//  firebase.database().ref().set({
//      name:'james mogambi'
//  });



// console.log('I made a request to change the data.');
