import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import React, { useState } from "react";
import app from "../firebase.init";

const auth = getAuth(app);

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmitForm = (event) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });

    event.preventDefault();
  };

  return (
    <>
      <div>
        <h2 className="font-bold text-2xl mb-6">
          Login with Email and Password
        </h2>
        <form
          onSubmit={handleSubmitForm}
          className="flex flex-col w-1/3 mx-auto"
        >
          <input
            onBlur={handleEmailBlur}
            type="email"
            placeholder="Email address"
            className="border px-6 py-3 mb-6"
          />
          <input
            onBlur={handlePasswordBlur}
            type="password"
            placeholder="Password"
            className="border px-6 py-3 mb-6"
          />
          <button
            type="submit"
            className="bg-red-400 px-8 py-3 rounded-sm text-white"
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
