import React from "react";


function About() {
    const videoUrl = "https://youtu.be/Sl3xawhMBiM";
    const videoId = videoUrl.split("/").pop();
    return (
      <div className="bg-emrald">
      <div className="flex flex-col  md:flex-row m-4 md:m-9">
        <div className="md:w-1/2">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube Video"
            allowFullScreen
          />
        </div>
        <div className="md:w-1/2 md:m-4">
          <h1 className="text-2xl md:text-4xl font-extrabold text-blue mb-4">
            About the Blue-Cloud Hackathon
          </h1>
          <p className="text-lg md:text-2xl font-serif p-4">
            The Blue-Cloud Hackathon is an open invitation to
            <span className="text-gray font-semibold">
              marine scientists & researchers, data scientists, ICT experts,
              innovators, students,
            </span>{" "}
            and anyone who is passionate about the Ocean to explore and test
            <span className="text-gray font-semibold">Blue-Cloud: </span>{" "} A new,
            Open Science platform for the marine domain offering a wealth of
             <span className="text-gray font-semibold">
              data, analytical tools and computing power
            </span>{" "}
            to support you in developing solutions for a
            <span className="text-gray font-semibold">
              safe, healthy, productive, predictive and transparent
            </span>{" "}
            Ocean.
          </p>
          <p className="text-lg md:text-2xl font-serif p-4">
            Participants will be challenged to develop applications that
            contribute to improving
            <span className="text-gray font-semibold">knowledge of marine ecosystems;</span>
            support the
            <span className="text-gray font-semibold">
              transition to a greener, blue economy;
            </span>
            advance
            <span className="text-gray font-semibold">Ocean literacy;</span> and/or
            <span className="text-gray font-semibold">
              enhance international collaboration
            </span>
            towards achieving the
            <span className="text-gray font-semibold">
              Sustainable Development Goals
            </span>
            (SDGs) of The
            <span className="text-gray font-semibold">
              United Nations Agenda 2030.
            </span>
          </p>
        </div>
      </div>
      </div>
    );
  }
  
  export default About;
  
