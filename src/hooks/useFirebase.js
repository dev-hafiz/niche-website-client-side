import { useEffect, useState } from "react";
import initializAuthentication from "../Pages/Login/Firebse/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,  signOut , onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider , updateProfile  } from "firebase/auth";

initializAuthentication()


const useFurebase = () =>{

     const [user, setUser] = useState({});
     const [isLoading, setIsLoading] = useState(true);
     const [authError, setAuthError] = useState('')


     const auth = getAuth();
     const googleProvider = new GoogleAuthProvider()

     //registerUser
     const registerUser =(email, password, name, history) =>{
          setIsLoading(true)
          createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {

              setAuthError('')
              const newUser = {email, displayName:name}
              setUser(newUser)
              
              //Send name to firebase 
              updateProfile(auth.currentUser, {
               displayName: name
             }).then(() => {
               
             }).catch((error) => {
               
             });
            history.replace('/');
          })
          .catch((error) => {
          setAuthError(error.message);
          
          })
          .finally(()=> setIsLoading(false));
          
     }

      //LoginUser
      const loginUser = (email , password, location, history) =>{
          setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
          .then((result) => {
               const destination = location?.state?.from || '/';
               history.replace(destination)
               setUser(result.user)
               setAuthError('')
          })
          .catch((error) => {
          setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));;

     }

     //Google SignIn
     const googleUserSignIn = (location, history) =>{
          setIsLoading(true)
          signInWithPopup(auth, googleProvider)
          .then((result) => {
               
               const user = result.user;
               
               const destination = location?.state?.from || '/';
               history.replace(destination)
               setAuthError('');
          }).catch((error) => {
               setAuthError(error.message);
          })
          .finally(()=> setIsLoading(false));
     }

     //LogoutUser
     const logOut = () =>{
          setIsLoading(true)
          signOut(auth).then(() => {
               setUser({})
             }).catch((error) => {
               setAuthError(error.message);
             })
             .finally(()=> setIsLoading(false));;
     }

     //Observer user state
     useEffect( ()=>{
          const unsubscribe = onAuthStateChanged(auth, (user) => {
                  if (user) {
                    setUser(user)
                    
                  } else {
                    setUser({})
                  }
                  setIsLoading(false)
                });
             return ()=> unsubscribe;
        },[])

     return{
          user,
          isLoading,
          authError,
          registerUser,
          loginUser,
          logOut,
          googleUserSignIn

     }

}

export default useFurebase;