import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../../firebase.init";
import {
  useSignInWithGoogle,
  useSignInWithGithub,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignInUser = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(email, password);

    if (user?.email !== email) {
      setError("User not exist");
    }
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mb-6">Sign in!!</h2>
      <div className="my-10">
        <button
          onClick={() => signInWithGoogle()}
          className="bg-gray-400 px-8 py-4 rounded-md"
        >
          Sign in with Google
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="bg-gray-400 px-8 py-4 rounded-md mx-6"
        >
          Sign in with Github
        </button>
      </div>
      {console.log(user?.user)}
      <form onSubmit={handleSignInUser} className="flex flex-col w-1/3 mx-auto">
        <input
          onBlur={handleEmail}
          type="email"
          placeholder="Email address"
          className="border px-6 py-3 mb-6"
          required
        />
        <input
          onBlur={handlePassword}
          type="password"
          placeholder="Password"
          className="border px-6 py-3 mb-6"
          required
        />
        {error && (
          <div className="px-6 py-2 bg-red-300 rounded-md my-4">{error}</div>
        )}
        <button
          type="submit"
          className="bg-red-400 px-8 py-3 rounded-sm text-white"
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
