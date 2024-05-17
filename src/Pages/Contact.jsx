import React, { useState } from 'react';
import Navbar from '../Components/Navbar';

function Contact() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div>
      <Navbar />
      <div>
        <h2>Contact Us</h2>
        <div className="flex flex-col">
          <form className="bg-white shadow-md rounded px-4">
            <div className="mb-4">
              <label className="block">FIRST NAME
                <input
                  type="text"
                  value={firstName}
                  className="shadow border rounded"
                />
              </label>
              <label className="block">LAST NAME
                <input
                  type="text"
                  value={lastName}
                  className="shadow border rounded"
                />
              </label>
            </div>
            <label className="block">EMAIL
              <input  
                type="text"
                value={email}
                className="shadow border rounded"
              />
            </label>
            <label className="block">MESSAGE
              <textarea
                value={message}
                className="shadow border rounded"
              />
            </label>
            <input type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;