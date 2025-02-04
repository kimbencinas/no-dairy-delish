import React from 'react';
import Navbar from '../Components/Navbar';
import { useFormik } from 'formik';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    <div className="bg-gray-200">
      <Navbar />
      <div className="main-container flex justify-center">
        <div className="bg-white p-4 rounded-xl shadow-md mt-60 px-16 py-14">
            <h2 className="text-center text-2xl font-semibold mb-5">Sign Up</h2>
            <form onSubmit={formik.handleSubmit}>
                <div className="">
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
                <div className="">
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
                </div>
                <div className="flex justify-end">
                    <button
                        type="submit"
                        className="p-2 bg-green-200 rounded-md">
                        Signup
                    </button>
                </div>
            </form>
            <span>Already have an account? <Link to="/contact" className="text-green-400">Sign In</Link></span>
        </div>
    </div>
    </div>
  );
}

export default Signup;