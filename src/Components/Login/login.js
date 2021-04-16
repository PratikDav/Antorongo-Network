import React, { useContext, useState } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';



if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [newUser, setNewUser] = useState(false)
  const [user, setUser] = useState({
    isSignedIn: false,
    name:'',
    email:'',
    password:'',
    photo:''
  });

  
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const location = useLocation();
  console.log(loggedInUser)

  let { from } = location.state || { from: { pathname: "/" } };

  const provider = new firebase.auth.GoogleAuthProvider();
  
  const handleSignIn = () => {
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      const {displayName, photoURL, email} = res.user;
      const isSignedInUser = {
        isSignedIn: true,
        name : displayName,
        email : email,
        photo: photoURL
      }
      setUser(isSignedInUser)
      setLoggedInUser(isSignedInUser);
      history.replace(from);
      
      
    })
    .catch(err => {
      console.log(err)
      console.log(err.message)
    })
  }

  const handleSignOut = () =>{
    firebase.auth().signOut()
    .then(res =>{
      const signedOutUser = {
        isSignedIn: false,
        name :'',
        email:'' ,
        photo:'',
        error:'',
        success:false
      }
      setUser(signedOutUser)

    })
    .catch(err =>{

    })
  }
  const handleBlur = (event) =>{
    let isFieldValid = true;
    if (event.target.name === 'email') {
       isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
      
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value)
      isFieldValid= isPasswordValid && passwordHasNumber
    }
    if (isFieldValid) {
      const newUserInfo = {...user}
      newUserInfo[event.target.name] = event.target.value
      setUser(newUserInfo)
    }
  }
  const handleSubmit = (event) => {
      if (newUser && user.email && user.password) {
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res =>{
          const newUserInfo = {...user}
          newUserInfo.error='';
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUseName(user.name);
          console.log(res)
        }) 
        .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message
          newUserInfo.success = false;
          setUser(newUserInfo)
        });
      
      }

      if(!newUser && user.email && user.password){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res =>{
          const newUserInfo = {...user}
          newUserInfo.error='';
          newUserInfo.success = true;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
          console.log('sign in user info',res.user)
        })
        .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message
          newUserInfo.success = false;
          setUser(newUserInfo)
        });
      }

      event.preventDefault();
  }

  const updateUseName = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name
      }).then(function() {
          console.log('user name updated successfully')
      }).catch(function(error) {
          console.log(error)
      });
  }

  return (
    <div style={{textAlign: 'center'}}>
       { 
    newUser  ? <div className = 'From'>
                   <h4 className="heading">Create an Account</h4>
                   <form onSubmit={handleSubmit}>
                       <label  htmlFor="name" >Username</label><br/>
                       <input name='name' type="text"  onBlur = {handleBlur} />
                       <br/>
                       <label htmlFor="email">Email</label><br/>
                       <input type="text" name="email" onBlur = {handleBlur}  required/>
                       <br/>
                       <label htmlFor="password">Password</label><br/>
                       <input type="password" onBlur = {handleBlur}  name="password" required/>
                       <br/>
                       <br/>
                       <input className="btn" type="submit" value="Create an account"/>
                   </form><br/>
                   <p>Already have an account? <input type="button" className="btn" onClick={() => setNewUser(!newUser)} name="newUser" value="Login"/> </p>
               </div>
             : <div className = 'From'>
                  <h3 className="heading">Login</h3>
                 <form onSubmit={handleSubmit}>
                   <label htmlFor="email">Email</label><br/>
                   <input type="text" name="email"  onBlur = {handleBlur} required/>
                   <br/>
                   <label htmlFor="password">Password</label><br/>
                   <input type="password" onBlur = {handleBlur}  name="password" required/>
                   <br/>
                   <br/> 
                   <input className="btn" type="submit" value="Login"/>
                 </form><br/>
                 <p>Don't Have an Account? <input type="button" className="btn"  onClick={() => setNewUser(!newUser)} name="newUser" value="Create an account"/> </p>
                 
               </div>     
  }   
     <p style={{color: 'red'}}>{user.error}</p>
     {user.success && <p style={{color: 'green'}}>User {newUser ? 'created' : 'logged in'} successfully! Go to Login</p>}
     { 
        user.isSignedIn ?<button className="btn-google" onClick={handleSignOut}>Sign out with Google</button>
                        : <button className="btn-google" onClick={handleSignIn}>Sign in with Google</button>
      
    }
    <br/>
    </div>
  );
};

export default Login;