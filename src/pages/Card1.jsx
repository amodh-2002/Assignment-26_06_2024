import React from "react";
import SingleCard from "./SingleCard";
import { useNavigate } from "react-router-dom";

const Card1 = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-28">
      <SingleCard
        to="/cards/card1"
        src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Social Media - Life Changing Object"
        desc="Social media - a powerful tool for connecting people worldwide, sharing information, and shaping public opinion. From reuniting long-lost friends to enabling global movements, social media has indeed proven to be a transformative force in society"
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

export default Card1;
