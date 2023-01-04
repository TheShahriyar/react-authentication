import React from "react";

import {
  getAuth,
  GithubAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase.init";
import { GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //Google Sign in
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Github Sign in
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Sign Out
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      {user.email ? (
        <button
          onClick={handleSignOut}
          className="bg-gray-300 px-6 py-3 rounded-md mx-2"
        >
          Sign Out
        </button>
      ) : (
        <div>
          <button
            onClick={handleGoogleSignIn}
            className="bg-gray-300 px-6 py-3 rounded-md mx-2"
          >
            Google Sign in
          </button>
          <button
            onClick={handleGithubSignIn}
            className="bg-gray-300 px-6 py-3 rounded-md mx-2"
          >
            Github Sign in
          </button>
        </div>
      )}

      <div className="mt-6">
        <h2>User Name: {user.displayName}</h2>
        <h3>Email: {user.email}</h3>
        <h4>ID: {user.uid}</h4>
        <img
          src={user.photoURL}
          alt={user.displayName}
          className="text-center inline-block mt-4"
        />
      </div>
    </div>
  );
};

export default Home;
