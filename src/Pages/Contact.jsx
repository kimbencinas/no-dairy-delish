import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function Contact() {
  /* const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
*/

  return (
    <div className="bg-gray-200">
      <Navbar />
      <div className="main-container flex items-center justify-center h-screen">
        <div className="bg-white p-7 rounded-xl shadow-md">
          <h2 className="text-center p-3 mb-3">Contact Us</h2>
          <form>
            <div className="flex">
              <div className="mb-4 p-2">
                <label className="block text-black">FIRST NAME</label>
                  <input
                    type="text"
                    className="shadow border rounded"
                  />
                
              </div>
              <div className="mb-4 p-2">
                <label className="block">LAST NAME</label>
                  <input
                    type="text"
                    className="shadow border rounded"
                  />
              </div>
            </div>
            <div className="mb-4 p-2">
              <label className="block">EMAIL</label>
                <input  
                  type="text"
                  className="shadow border rounded w-full"
                />
            </div>
            <div className="mb-4 p-2">
              <label className="block">MESSAGE</label>
                <textarea
                  className="shadow border rounded w-full"
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