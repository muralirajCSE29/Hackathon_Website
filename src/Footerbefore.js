import React from "react";
import blue1 from "./assets/blue-1.png";
import blue2 from "./assets/blue-2.png";
import blue3 from "./assets/blue-3.png";
import blue4 from "./assets/230.png";
import blue5 from "./assets/0.png";
import blue6 from "./assets/350.png";
import blue7 from "./assets/180.png"

const FooterBefore = () => {
  return (
    <div className="bg-midnight min-h-screen pt-8">
      <div className="container mx-auto">
        <h1 className="text-white font-bold text-4xl md:text-6xl">
          Everything's ready <br />
          for your journey in trading ...
        </h1>
        <h1 className="text-lime1 text-2xl md:text-3xl font-bold pt-10">
          Time-proven tools for beginners and pros.
        </h1>
      </div>
      <div className="container mx-auto pt-8">
        <div className="flex flex-wrap justify-center md:justify-start">
          {/* First Card - Big Size */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center">
              <img
                src={blue2}
                alt="First Card Image"
                className="mb-4 md:mb-0 w-32 h-auto object-cover"
              />
              <div className="ml-auto md:ml-4">
                <h2 className="text-2xl text-white md:text-2xl font-bold mb-4">
                Three trading platforms
                </h2>
                <p className="text-slate text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl">
                  maximum leverage ratio
                </p>
              </div>
            </div>
          </div>

          {/* Second Card - Medium Size */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center">
              <img
                src={blue2}
                alt="Second Card Image"
                className="mb-4 md:mb-0 w-32 h-auto object-cover"
              />
              <div className="ml-auto md:ml-4">
                <h2 className="text-2xl text-white md:text-2xl font-bold mb-4">
                  1:500
                </h2>
                <p className="text-slate text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl">
                  maximum leverage ratio
                </p>
              </div>
            </div>
          </div>

          {/* Third Card - Medium Size */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex flex-col md:flex-row items-center">
              <img
                src={blue3}
                alt="Third Card Image"
                className="mb-4 md:mb-0 w-32 h-auto object-cover"
              />
              <div className="ml-auto md:ml-4">
                <h2 className="text-2xl text-white md:text-2xl font-bold mb-4">
                20 USD
                </h2>
                <p className="text-slate text-lg md:text-xl lg:text-3xl xl:text-2xl 2xl:text-4xl">
                  maximum leverage ratio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto pt-8">
        <div className="flex flex-wrap justify-center md:justify-start">
          {/* Card 4 */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex items-center">
              <img
                src={blue4}
                alt="Fourth Card Image"
                className="mr-4 w-32 h-auto object-cover"
              />
              <div>
                <h2 className="text-2xl text-white md:text-2xl lg:text-xl 2xl:text-4xl font-bold mb-4">
                  230
                </h2>
                <p className="text-slate text-lg p-4 lg:text-2xl xl:text-2xl 2xl:text-4xl">
                  powerful and easy-to-use
                </p>
                {/* Add additional content here */}
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex items-center">
              <img
                src={blue5}
                alt="Fifth Card Image"
                className="mr-4 w-32 h-auto object-cover"
              />
              <div>
                <h2 className="text-2xl text-white md:text-2xl lg:text-xl 2xl:text-4xl font-bold mb-4">
                  0%
                </h2>
                <p className="text-slate text-lg p-4 lg:text-2xl xl:text-2xl 2xl:text-4xl">
                  no swaps or other charges
                </p>
                {/* Add additional content here */}
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex items-center">
              <img
                src={blue6}
                alt="Sixth Card Image"
                className="mr-4 w-32 h-auto object-cover"
              />
              <div>
                <h2 className="text-2xl text-white md:text-2xl lg:text-xl 2xl:text-4xl font-bold mb-4">
                  350+
                </h2>
                <p className="text-slate text-lg p-4 lg:text-2xl xl:text-2xl 2xl:text-4xl">
                  hours of educational materials
                </p>
                {/* Add additional content here */}
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex items-center">
              <img
                src={blue7}
                alt="Seventh Card Image"
                className="mr-4 w-32 h-auto object-cover"
              />
              <div>
                <h2 className="text-2xl text-white md:text-2xl lg:text-xl 2xl:text-4xl font-bold mb-4">
                  180+
                </h2>
                <p className="text-slate text-lg p-4 lg:text-2xl xl:text-2xl 2xl:text-4xl">
                  countries enjoy our services
                </p>
                {/* Add additional content here */}
              </div>
            </div>
          </div>
          {/* Card 8 */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex items-center">
              <img
                src={blue4}
                alt="Sixth Card Image"
                className="mr-4 w-32 h-auto object-cover"
              />
              <div>
                <h2 className="text-2xl text-white md:text-2xl lg:text-xl 2xl:text-4xl font-bold mb-4">
                  350+
                </h2>
                <p className="text-slate text-lg p-4 lg:text-2xl xl:text-2xl 2xl:text-4xl">
                  hours of educational materials
                </p>
                {/* Add additional content here */}
              </div>
            </div>
          </div>
          {/* Card 9 */}
          <div className="flex w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-2/6 p-4">
            <div className="bg-indico1 border border-white rounded-2xl shadow-lg p-6 flex items-center">
              <img
                src={blue4}
                alt="Sixth Card Image"
                className="mr-4 w-32 h-auto object-cover"
              />
              <div>
                <h2 className="text-2xl text-white md:text-2xl lg:text-xl 2xl:text-4xl font-bold mb-4">
                  350+
                </h2>
                <p className="text-slate text-lg p-4 lg:text-2xl xl:text-2xl 2xl:text-4xl">
                  hours of educational materials
                </p>
                {/* Add additional content here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBefore;
