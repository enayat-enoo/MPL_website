import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

function RegistrationForm() {

  const [name,setName] = useState('');
  const [number,setNumber] = useState(0)
  const [mohallaName, setMohallaName] = useState('');
  const [role, setRole] = useState('')

  const notify=()=>toast("Alert all fields are mandatory")
  const playerNotify=()=>toast("Player added successfully")
  const registeredUserNotify=()=>toast("Already registerd")
  const errorNotify=()=>toast("Some error has occured please try again")

  const navigate = useNavigate()
  async function submitHandler(e){
    e.preventDefault();
    if(!name || !number || !mohallaName || !role){
      notify();
      return;
    }

    const result = await fetch('https://mpl-backend-ct21.onrender.com/',{
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body : JSON.stringify({name,number,mohallaName,role})
    })
    const data = await result.json();
    if(data.message){
      navigate('/')
      playerNotify();
    }else if(!data.message){
        navigate('/registration')
        registeredUserNotify();
    }else{
        navigate('/registration')
        errorNotify();
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
      <h1 className="text-2xl font-bold text-center text-cyan-600 mb-6">
        Registration Form
      </h1>

      <form className="space-y-4" onSubmit={submitHandler}>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            name="name"
            onChange={(e)=>setName(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Mobile No
          </label>
          <input
            type="number"
            name="number"
            onChange={(e)=>setNumber(e.target.value)}
            placeholder="Enter mobile number"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Mohalla
          </label>
          <input
            type="text"
            name="mohallaName"
            onChange={(e)=>setMohallaName(e.target.value)}
            placeholder=""
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
        </div>
        <div>
          <span className="block text-gray-700 font-medium mb-2">Role</span>
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                onChange={(e)=>setRole(e.target.value)}
                value="Batsman"
                className="text-cyan-500 focus:ring-cyan-400"
              />
              <span>Batsman</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                onChange={(e)=>setRole(e.target.value)}
                value="Bowler"
                className="text-cyan-500 focus:ring-cyan-400"
              />
              <span>Bowler</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="role"
                onChange={(e)=>setRole(e.target.value)}
                value="Allrounder"
                className="text-cyan-500 focus:ring-cyan-400"
              />
              <span>Allrounder</span>
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
        >
          Submit
        </button>
      </form>
      <ToastContainer position="top-center"/>
    </div>
  );
}

export default RegistrationForm;
