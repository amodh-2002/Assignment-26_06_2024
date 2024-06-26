import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-screen-xl flex items-center mx-auto justify-center h-screen space-x-8">
      <Link
        target="_blank"
        to="/cards"
        className="w-1/2 flex flex-col items-center justify-center space-y-6 text-center"
      >
        <div className="w-full flex flex-col items-center justify-center space-y-6">
          <img
            src="/card.png"
            alt="card"
            className="w-80 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Cards that make you go yayayyyy!!
            </h1>
            <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
              Explore!
            </button>
          </div>
        </div>
      </Link>
      <Link
        target="_blank"
        to="/axios"
        className="w-1/2 flex flex-col items-center justify-center space-y-6 text-center"
      >
        <div className="w-full flex flex-col items-center justify-center space-y-6">
          <img
            src="/grid.png"
            alt="grid"
            className="max-w-160 object-cover rounded-lg shadow-lg"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">
              Grid that lets you make your work easy
            </h1>
            <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-opacity-75">
              Explore!
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Home;
