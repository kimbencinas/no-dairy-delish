import React from 'react';
import Navbar from '../Components/Navbar';


function ResetPassword() {

  return (
    <div className="bg-gray-200 h-screen">
      <Navbar />
      <div className="main-container flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-md mt-60">
          <h1 className="text-center text-2xl font-semibold">Forgot Password?</h1>
          <form>
            <div className="mb-2 p-4">
              <label className="text-black block">
                Email
              </label>
              <input 
                className="p-2 border rounded-md"
              />
            </div>
            <div className="flex justify-end">
              <button className="bg-green-200 p-2 mb-2 rounded-md">Reset Password</button>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
}

export default ResetPassword;