import React from 'react';
import logo1 from "./assets/coding-icon_brain.png";
import bgimage from "./assets/heptagon.png";

function CardComponent() {
  return (
    <div className="rounded-lg p-6 mx-4 mb-8 md:w-1/3 lg:w-1/4">
      <img className="w-16 h-16 mx-auto mb-4" src={logo1} alt="logo1" />
      <h2 className="text-2xl p-4 md:p-10 font-extrabold text-gray-800 mb-2">Form a team and propose your idea</h2>
      <p className="text-gray text-xl">During the warm-up, you will be invited to form a Team and shape the idea that you will work on during the hackathon.</p>
    </div>
  );
}

function Participate() {
  return (
    <div className="bg-orange">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl md:text-6xl p-4 md:p-10 text-blue font-extrabold text-gray-800 mb-4 text-center">Participants</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-wrap justify-center">
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </div>
          <div
            className="ml-auto bg-cover bg-center h-80 md:h-auto w-full md:w-80"
            style={{
              backgroundImage: `url(${bgimage})`
            }}
            role="presentation"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

export default Participate;
