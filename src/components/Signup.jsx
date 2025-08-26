import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const API_URL = import.meta.env.VITE_API_URL;

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const alertNotify = () => toast("Alert all fields are mandatory");
  const errorNotify = () => toast("There is some issue please try again");
  const loginNotify = () =>
    toast("Signed up successfully!! Please login now with the same credentials");
  const passwordLengthNotify = () =>
    toast("Password should contain of minimum 8 characters");
  const userExistNotify = () => toast("Username Already exist's");

  async function submitHandler(e) {
    e.preventDefault();
    if (!name || !email || !username || !password) {
      alertNotify();
      return;
    }
    if (password.length < 8){
      passwordLengthNotify();
      return;
    }
    const result = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, username, password }),
    });
    const data = await result.json();
    console.log(data);
    if (data.userName) userExistNotify();
    if (data.signup) {
      loginNotify();
      setTimeout(() => navigate("/login"), 1000);
    } else {
      errorNotify();
      setTimeout(() => navigate("/signup"), 1000);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-cyan-600 mb-6">
          Sign Up
        </h2>

        <form className="space-y-4" onSubmit={submitHandler}>
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={8}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 text-white py-2 rounded-lg font-semibold hover:bg-cyan-600 transition duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Signup;
