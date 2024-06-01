import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { useFormik } from 'formik';

function Contact() {
  /* const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
*/
  const formik = useFormik({
    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      message: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2))
    },
  });

  return (
    <div className="bg-white">
      <Navbar />
      <h2 className="text-center p-3 mt-10 mb-3">Contact Us</h2>
      <div className="main-container flex items-center justify-center">
        <div className="bg-gray-100 p-7 rounded-xl shadow-md">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex">
              <div className="mb-4 p-2">
                <label className="block text-black">FIRST NAME</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    className="shadow border rounded p-1"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                  />
                
              </div>
              <div className="mb-4 p-2">
                <label className="block">LAST NAME</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className="shadow border rounded p-1"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                  />
              </div>
            </div>
            <div className="mb-4 p-2">
              <label className="block">EMAIL</label>
                <input  
                  id="email"
                  name="email"
                  type="text"
                  className="shadow border rounded w-full p-1"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
            </div>
            <div className="mb-4 p-2">
              <label className="block">MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  className="shadow border rounded w-full p-1"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                />
            </div>
            <div>
              <button
                type="submit"
                className="p-2 bg-green-200 rounded-md w-20">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;