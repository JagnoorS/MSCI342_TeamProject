import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import App from '../App';
import { AuthProvider } from '../Firebase/context';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBDvbfY1noXYGEbjaIpRO66l_a2cLAIG7k",
  authDomain: "fuel-flex-2def1.firebaseapp.com",
  projectId: "fuel-flex-2def1",
  storageBucket: "fuel-flex-2def1.appspot.com",
  messagingSenderId: "10226649345",
  appId: "1:10226649345:web:4bcedde9b691e7ed20b300"
});


// class Firebase {
//   constructor() {
//     app.initializeApp(firebaseConfig);
//     this.auth = app.auth();
//   }
  
  // *** Auth API ***

  // doCreateUserWithEmailAndPassword = (email, password) =>
  // this.auth.createUserWithEmailAndPassword(email, password);

  // doSignInWithEmailAndPassword = (email, password) =>
  // this.auth.signInWithEmailAndPassword(email, password);

  // doSignOut = () => this.auth.signOut();

  // doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  // doPasswordUpdate = password =>
  //   this.auth.currentUser.updatePassword(password);

  // doGetIdToken = (bool) => {
  //   return this.auth.currentUser.getIdToken(/* forceRefresh */ bool);
  // }

  // doGetUserByEmail = email => this.auth.getUserByEmail(email);

//}
export const auth = app.auth();
export default app 