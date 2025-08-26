import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const notify = () => toast("All fields are mandatory");
  const alertUser = () => toast("User doesn't exist please register first");
  const incorrectPasswordNotify = () => toast("Password is incorrect");

  const navigate = useNavigate();
  async function submitHandler(e) {
    e.preventDefault();
    if (!email || !password) {
      notify();
      return;
    }

    const result = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    });
    const data = await result.json();
    if (data.error) alertUser();
    if (data.incorrectPassword) incorrectPasswordNotify();
    if (data.login) {
      console.log("Login successful");
      navigate("/");
    } else {
      navigate("/login");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 to-yellow-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-6">
          Login
        </h2>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
          >
            Login
          </button>
        </form>
        <br />
        <button
          className="w-full bg-orange-500 text-white py-2 rounded-lg font-semibold hover:bg-orange-600 transition duration-200"
          onClick={() => navigate("/signup")}
        >
          Signup
        </button>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Login;
