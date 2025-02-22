import React from 'react';
import Navbar from '../Components/Navbar';

function Account() {

  return (
    <div>
      <Navbar />
      <h1>Account</h1>
      <div className="account-settings">
        <h2>Account Settings</h2>
        <p>Email address</p>
        <p>Password</p>
        <p>Notification settings</p>
      </div>
      <div className="account-info">
        <h2>Danger Zone</h2>
        <p>Delete account</p>
      </div>
      <p>Sign Out</p>
    </div>
  );
}

export default Account;