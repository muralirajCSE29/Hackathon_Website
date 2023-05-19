import img2 from "./assets/Bg-img.png";
import bgimg from "./assets/sea.jpg";
import './App.css';
import { useEffect } from "react";
import { useState } from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [countdown, setCountdown] = useState(null);
  useEffect(() => {
    const targetDate = new Date('2023-09-16');
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / (1000 * 60)) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setCountdown({ days, hours, minutes, seconds });
      if (difference < 0) {
        clearInterval(interval);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-emrald">
      <div className="overflow-x-auto">
        <div className="flex flex-col items-center justify-center relative min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bgimg})` }}>
          <div className="flex flex-col justify-center items-center p-9 mx-auto">
            <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:space-y-0 md:mb-8 lg:space-x-4">
            <div className="flex items-center space-x-2">
  <a href="#" className="text-blue1 text-2xl md:text-3xl lg:text-4xl">
    <FaFacebook />
  </a>
  <a href="#" className="text-blue1 text-2xl md:text-3xl lg:text-4xl">
    <FaInstagram />
  </a>
  <a href="#" className="text-blue1 text-2xl md:text-3xl lg:text-4xl">
    <FaLinkedin />
  </a>
</div>

<div className="flex items-center space-x-2">
  <input type="text" className="p-2 bg-emrald rounded-md  hover:border-blue focus:border-blue md:text-3xl" placeholder="Search" />
  <button className="p-2 bg-white rounded-md "><FaSearch /></button>
</div>

            </div>
            <img className="object-top mx-auto mt-12 w-3/4 md:w-full lg:w-1/2" src={img2} alt="Ocean" />
            <h1 className="p-8 text-center text-white text-4xl md:text-6xl lg:text-8xl font-extrabold">DECODE THE OCEAN!</h1>
            <h1 className="p-8 text-center text-white text-2xl md:text-3xl lg:text-4xl font-extrabold">7, 8 &amp; 9 February 2022</h1>
            <h1 className="text-center text-white text-xl md:text-2xl lg:text-3xl font-extrabold">GEAR UP AT YOUR OWN PACE OVER A 3-WEEK IDEATION JOURNEY, JOIN</h1>
            <span className="text-center text-white text-xl md:text-2xl lg:text-3xl font-extrabold">A 3-DAY VIRTUAL HACKATHON AND WIN UP TO <span className="text-yellow">€60,000 IN PRIZES!</span></span>
            {countdown && (
              <div className="text-midnight text-xl md:text-2xl lg:text-3xl font-extrabold mt-8">
                Countdown: {countdown.days} days, {countdown.hours} hours, {countdown.minutes} minutes, {countdown.seconds} seconds
              </div>
            )}
            <div className="flex space-x-4 mt-8">
            <Link to="/login">
              <button className="p-2 bg-blue  border border-white text-3xl font-bold rounded-md focus:outline-none">Login</button>
              </Link>

              <Link to="/signup">
              <button className="p-2 bg-emrald1 border border-white text-3xl font-bold rounded-md focus:outline-none">Sign Up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
