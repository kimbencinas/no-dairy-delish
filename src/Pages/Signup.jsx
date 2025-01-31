import React from 'react';
import Navbar from '../Components/Navbar';
import { useFormik } from 'formik';
import axios from 'axios';

function Signup() {
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (values) => {
            if (values.password !== values.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            try {
                const response = await axios.post('http://localhost:5000/signup', {
                    username: values.username,
                    email: values.email,
                    password: values.password,
                });
                alert(response.data.message);
            } catch (error) {
                console.error(error.response.data);
                alert(error.response.data.message);
            }
    },
});

  return (
    <div className="bg-gray-200 h-screen">
      <Navbar />
      <div className="main-container flex justify-center">
        <div className="bg-white p-4 rounded-xl shadow-md mt-60 px-10 py-14">
            <h2 className="text-center text-2xl font-semibold mb-5">Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex">
                    <div className="mb-1 p-3">
                        <label className="text-black block">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            className="p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-1 p-3">
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
                </div>
                <div className="flex">
                    <div className="mb-4 p-3">
                        <label className="text-black block">
                                Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            className="p-2 border rounded-md"
                        />
                    </div>
                    <div className="mb-4 p-3">
                        <label className="text-black block">
                                Confirm Password
                        </label>
                        <input
                             id="confirmPassword"
                             name="confirmPassword"
                             type="password"
                             value={formik.values.confirmPassword}
                             onChange={formik.handleChange}
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