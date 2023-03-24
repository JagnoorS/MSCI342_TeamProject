import React, {useContext, useState, useEffect} from 'react';
import {auth} from './firebase';

const FirebaseContext = React.createContext();

export function useAuth() {
  return useContext(FirebaseContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  
  function Create(firstName, lastName, email, password) {
    return auth.createUserWithEmailAndPassword(firstName, lastName, email, password);
  }
  function Login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }
  
  useEffect(() => {
    const U_S = auth.onAuthStateChanged(user => {
        setCurrentUser(user);
      })
      return U_S;
  }, []);

  



  const value = {
    currentUser,
    Create,
    Login
  }



  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  )
  }





// export const withFirebase = Component => props => (
//   <FirebaseContext.Consumer>
//     {firebase => <Component {...props} firebase={firebase} />}
//   </FirebaseContext.Consumer>
// );

// export default FirebaseContext;