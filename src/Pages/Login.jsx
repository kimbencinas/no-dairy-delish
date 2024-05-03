import React from 'react';
import Navbar from '../Components/Navbar';

function Login() {

  return (
    <div>
    <Navbar />
    <div className="main-container flex items-center justify-center h-screen">
        <div className="bg-green-200 p-4 rounded-xl">
            <h2 className="text-center">Log In</h2>
            <form>
                <div className="mb-2 p-4">
                    <label className="text-black block">
                        Username
                    </label>
                    <input
                        type="text"
                        className="p-2"
                    />
                </div>
                <div className="mb-2 p-4">
                    <label className="text-black block">
                            Password
                    </label>
                    <input
                        type="password"
                        className="p-2"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-white p-2">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
    </div>
  );
}

export default Login;