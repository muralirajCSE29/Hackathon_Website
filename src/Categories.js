import React from "react";
import seaimage from "./assets/seaimg.png";
import fishimg from "./assets/fish.png";
import envimg from "./assets/env.png";
import boatimg from "./assets/boat.png";

function Categories() {
  return (
    <div className="flex flex-col justify-center bg-lime">
      <h1 className="text-center text-3xl md:text-5xl lg:text-6xl text-blue font-extrabold">
        Challenge Categories
      </h1>
      <p className="text-center text-lg md:text-xl lg:text-2xl p-5 text-gray">
        You will be asked to deliver a "proof of concept" for an innovative
        solution{" "}
        <span className="flex flex-col text-gray">
          that could be developed to address an Ocean challenge.
        </span>{" "}
        Check out the challenge categories envisioned!
      </p>
      <div className="flex flex-col justify-center items-center p-5 md:p-10 lg:p-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <img className="w-full rounded-lg" src={seaimage} alt="Logo" />
          </div>
          <div className="w-full lg:w-1/2 px-5 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blue mb-4">
              Understanding the Ocean.
            </h1>
            <p className="text-base md:text-xl lg:text-3xl text-gray">
              How might we use collaborative science to advance knowledge of
              plankton and the key role it plays in supporting life in the
              Ocean? Plankton is the fabric of marine ecosystems. They support
              the Ocean food webs and our fisheries, and they produce an
              estimated 50% of the Planet’s oxygen. However, in spite of
              successful efforts to gather a wealth of data, our knowledge of
              plankton remains difficult to analyze with integrative approaches.
              With your help, we can hack available plankton Big Data to address
              important knowledge gaps.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 md:p-10 lg:p-28">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 px-5 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blue mb-4">
              Feeding the World.
            </h1>
            <p className="text-base md:text-xl lg:text-3xl text-gray">
              How might we balance our need to source healthy food from the
              Ocean to feed the World today with the need to secure a healthy
              Ocean for future generations? Aquaculture has a crucial role in
              meeting the challenge of feeding a growing population while
              reducing the environmental impacts of food production. It has
              already overtaken fisheries as the main source of fish for human
              consumption. But aquaculture also poses risks to the marine
              environment. And it is affected by marine events that impact its
              productivity. With your help, we can make smarter aquaculture
              choices to feed the World without harming the Ocean.
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <img className="w-full rounded-lg" src={fishimg} alt="Logo" />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 md:p-10 lg:p-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <img className="w-full rounded-lg" src={envimg} alt="Logo" />
          </div>
          <div className="w-full lg:w-1/2 px-5 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blue mb-4">
              Predicting environmental risks.
            </h1>
            <p className="text-base md:text-xl lg:text-3xl text-gray">
              How might we use environmental indicators to understand complex
              phenomena affecting marine ecosystems and detect changes in their
              status with sufficient time to respond? Climate change is causing
              severe impacts on marine ecosystems. However, these changes are
              often difficult to anticipate, leading to delays in the
              implementation of actions that could mitigate risks and help us
              adapt to new conditions. With your help, we can evolve early
              warning mechanisms to anticipate a more effective response.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center p-5 md:p-10 lg:p-28">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 px-5 lg:px-8">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blue mb-4">
              Wild Card: Hack the Blue-Cloud!
            </h1>
            <p className="text-base md:text-xl lg:text-3xl text-gray">
              How might we use Blue-Cloud to advance knowledge of the Ocean? Or
              to support the transition to a more sustainable Blue Economy? Or
              to promote Ocean literacy? Or to advance international cooperation
              to deliver the UN Sustainable Development Goals? The Ocean does so
              much for us. And our health and wellbeing are intrinsically
              connected to it. With your help, we can make Blue-Cloud a powerful
              tool that brings people together to drive science-based action in
              support of the Ocean!
            </p>
          </div>
          <div className="w-full lg:w-1/2 mt-5 lg:mt-0">
            <img className="w-full rounded-lg" src={boatimg} alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
