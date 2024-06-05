import React from 'react';
import Navbar from '../Components/Navbar';
import { useFormik } from 'formik'; 

function Login() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null,2));
    },
});

  return (
    <div className="bg-gray-200 h-screen">
    <Navbar />
    <div className="main-container flex items-center justify-center">
        <div className="bg-white p-10 rounded-xl shadow-md mt-60">
            <h2 className="text-center text-2xl font-semibold">Log In</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="mb-2 p-4">
                    <label className="text-black block">
                        Username
                    </label>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        className="p-2 border rounded-md"
                    />
                </div>
                <div className="mb-2 p-4">
                    <label className="text-black block">
                            Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className="p-2 border rounded-md"
                    />
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="bg-green-200 p-2 rounded-md">
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