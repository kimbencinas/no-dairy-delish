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
          <form>
            <div className="">
              <label>FIRST NAME
                <input
                  type="text"
                  value={firstName}
                />
              </label>
              <label>LAST NAME
                <input
                  type="text"
                  value={lastName}
                />
              </label>
            </div>
            <label>EMAIL
              <input  
                type="text"
                value={email}
              />
            </label>
            <label>MESSAGE
              <textarea
                value={message}
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