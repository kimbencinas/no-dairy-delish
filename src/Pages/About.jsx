import React from 'react';
import Navbar from '../Components/Navbar';

function About() {

  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        <h2>About Us</h2>
        <div>
          <p>
          Welcome to NoDairyDelish! I'm Kimberly, the developer behind this app, and I'm thrilled to share my journey with you.
          </p>
          <p>
          As someone who has navigated the challenges of lactose intolerance firsthand, I understand the frustration of constantly 
          having to scrutinize ingredients and miss out on beloved dairy-filled dishes. That's why I created NoDairyDelish — to 
          provide a solution for those seeking delicious dairy-free alternatives without compromising on taste or satisfaction.
          </p>
          <p>
          My own experience with lactose intolerance inspired me to embark on this journey of creating a comprehensive resource 
          for individuals like myself. I've spent countless hours researching, testing recipes, and refining the app to ensure 
          it meets the diverse needs of the lactose intolerant community.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;