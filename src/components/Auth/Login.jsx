import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => submithandler(e)}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-lg font-medium py-2 px-6 rounded-full placeholder:text-gray-500"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-lg font-medium py-2 px-6 mt-3 rounded-full placeholder:text-gray-500"
            type="password"
            placeholder="Enter your password"
          />
          <button className="mt-7 text-white border-none outline-none bg-emerald-600 hover:bg-emerald-700 rounded-full font-semibold text-lg py-2 px-8 w-full">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
