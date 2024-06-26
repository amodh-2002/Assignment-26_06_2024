import React from "react";
import SingleCard from "./SingleCard";
import { useNavigate } from "react-router-dom";

const Card3 = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-28">
      <SingleCard
        to="/cards/card3"
        src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Lets learn the first thing we do in programming"
        desc="The foundational concept in programming - the 'Hello, World!' program. Serving as the traditional starting point for beginners, this simple program typically involves printing the phrase 'Hello, World!' to the screen."
      />
      <button
        className="mt-4 bg-orange-500 px-3 py-2 rounded-md text-white"
        onClick={goToHome}
      >
        Go to home
      </button>
    </div>
  );
};

export default Card3;
