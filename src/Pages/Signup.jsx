import React from 'react';
import Navbar from '../Components/Navbar';

function Signup() {

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="main-container flex items-center justify-center h-screen">
        <div className="bg-white p-4 rounded-xl shadow-md">
            <h2 className="text-center">Sign Up</h2>
            <form>
                <div className="mb-2 p-4">
                    <label className="text-black block">
                        Username
                    </label>
                    <input
                        type="text"
                        className="p-2 border"
                    />
                </div>
                <div className="mb-2 p-4">
                    <label className="text-black block">
                            Password
                    </label>
                    <input
                        type="password"
                        className="p-2 border"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="p-2 bg-green-200 rounded-md">
                        Signup
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
  );
}

export default Signup;