import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useSignInWithGithub,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import app from "../../firebase.init";

const auth = getAuth(app);

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);
  const [user] = useAuthState(auth);
  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleCreateUserForm = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    if (password !== confirmPassword) {
      setError("Both password must me same!!");
      return;
    }
    if (password.length < 6) {
      setError("Password must be minimum 6 character");
      return;
    }

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });

    console.log(user);
  };

  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h2 className="font-bold text-2xl mb-6">Please Register!!</h2>
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
      <form
        onSubmit={handleCreateUserForm}
        className="flex flex-col w-1/3 mx-auto"
      >
        <input
          onBlur={handleName}
          type="text"
          placeholder="Your Name"
          className="border px-6 py-3 mb-6"
          required
        />
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
        <input
          onBlur={handleConfirmPassword}
          type="password"
          placeholder="Confirm Password"
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Registration;
