import React from "react";

function Footer() {
  return (
    <footer className="bg-green py-6">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
          <div className="ml-4">
            
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
