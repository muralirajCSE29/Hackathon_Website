import React from "react";
import prizelogo from "./assets/Prize-pool.png";
import firstprize from "./assets/1st-prize.png";
import secondprize from "./assets/2nd-prize.png";
import thirdprize from "./assets/3rd-prize.png";
import Blueprize from "./assets/Blue-skies-award.png";

function Prize() {
  return (
    <div className="bg-rose min-h-screen flex flex-col justify-start items-center py-12">
      <img className="object-top mx-auto" src={prizelogo} alt="Prize-Pool" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
          <div className="flex flex-col items-center">
            <img
              className="object-top p-8 mx-auto"
              src={firstprize}
              alt="Prize Pool 1"
            />
            <div className="p-4">
              <h2 className="text-violet font-extrabold text-3xl sm:text-5xl text-center mb-6">
                €25,000
              </h2>
              <p className="text-violet font-extrabold text-center text-lg">
                Towards further evolving and giving outreach to the winning
                solution, promoting its uptake. 2 "innovation" coaching sessions
                to guide Team in evolving the solution. Travel costs covered for
                up to 2 Team members to participate in Blue-Cloud Final
                Conference.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-top p-8 mx-auto"
              src={secondprize}
              alt="Prize Pool 2"
            />
            <div className="p-4">
              <h2 className="text-violet font-extrabold text-3xl sm:text-5xl text-center mb-6">
                €20,000
              </h2>
              <p className="text-violet font-extrabold text-center text-lg">
                Towards further evolving and giving outreach to the winning
                solution, promoting its uptake. 2 "innovation" coaching sessions
                to guide Team in evolving the solution. Travel costs covered for
                up to 2 Team members to participate in Blue-Cloud Final
                Conference.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-top p-8 mx-auto"
              src={thirdprize}
              alt="Prize Pool 3"
            />
            <div className="p-4">
              <h2 className="text-violet font-extrabold text-3xl sm:text-5xl text-center mb-6">
                €15,000
              </h2>
              <p className="text-violet font-extrabold text-center text-lg">
                Towards further evolving and giving outreach to the winning
                solution, promoting its uptake. 2 "innovation" coaching sessions
                to guide Team in evolving the solution. Travel costs covered for
                up to 2 Team members to participate in Blue-Cloud Final
                Conference.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              className="object-top p-8 mx-auto"
              src={Blueprize}
              alt="Prize Pool 4"
            />
            <div className="p-4">
              <h2 className="text-violet font-extrabold text-3xl sm:text-5xl text-center mb-6">
                Blue Skies
              </h2>
              <p className="text-violet font-extrabold text-center text-lg">
                Granted by "popular vote" of participants that join the "Pitch &
                Award Event". Travel costs covered for up to 2 Team members to
                participate in Blue-Cloud Final Conference.
              </p>
            </div>
          </div>
        </div>
        <h1 className="text-violet font-bold text-center text-2xl mt-12">
          The Winners commit to investing the awarded prize to further develop,
          boost, and promote their solutions as explained in the applicable
          Terms & Conditions.
        </h1>
      </div>
    </div>
  );
}

export default Prize;
