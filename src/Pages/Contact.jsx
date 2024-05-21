import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function Contact() {
  /* const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
*/

  return (
    <div className="bg-white">
      <Navbar />
      <h2 className="text-center p-3 mt-10 mb-3">Contact Us</h2>
      <div className="main-container flex items-center justify-center">
        <div className="bg-gray-100 p-7 rounded-xl shadow-md">
          <form>
            <div className="flex">
              <div className="mb-4 p-2">
                <label className="block text-black">FIRST NAME</label>
                  <input
                    type="text"
                    className="shadow border rounded p-1"
                  />
                
              </div>
              <div className="mb-4 p-2">
                <label className="block">LAST NAME</label>
                  <input
                    type="text"
                    className="shadow border rounded p-1"
                  />
              </div>
            </div>
            <div className="mb-4 p-2">
              <label className="block">EMAIL</label>
                <input  
                  type="text"
                  className="shadow border rounded w-full p-1"
                />
            </div>
            <div className="mb-4 p-2">
              <label className="block">MESSAGE</label>
                <textarea
                  className="shadow border rounded w-full p-1"
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