import React from 'react';
import Navbar from '../Components/Navbar';

function Signup() {

  return (
    <div className="bg-gray-200 h-screen">
      <Navbar />
      <div className="main-container flex justify-center">
        <div className="bg-white p-4 rounded-xl shadow-md mt-60 px-10 py-14">
            <h2 className="text-center text-2xl font-semibold mb-5">Sign Up</h2>
            <form>
                <div className="flex">
                    <div className="mb-1 p-3">
                        <label className="text-black block">
                            Name
                        </label>
                        <input
                            type="text"
                            className="p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-1 p-3">
                        <label className="text-black block">
                            Username
                        </label>
                        <input
                            type="text"
                            className="p-2 border rounded-md"
                        />
                    </div>
                </div>
                <div className="flex">
                    <div className="mb-4 p-3">
                        <label className="text-black block">
                                Password
                        </label>
                        <input
                            type="password"
                            className="p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4 p-3">
                        <label className="text-black block">
                                Confirm Password
                        </label>
                        <input
                            type="password"
                            className="p-2 border rounded-md w-full"
                        />
                    </div>
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