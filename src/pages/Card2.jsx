import React from "react";
import SingleCard from "./SingleCard";
import { useNavigate } from "react-router-dom";

const Card2 = () => {
  const navigate = useNavigate();
  const goToHome = () => {
    navigate("/");
  };
  return (
    <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center mt-28">
      <SingleCard
        to="/cards/card2"
        src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        text="Laptop that makes you go yay"
        desc="Laptops - versatile devices that empower individuals to work, create, connect, and entertain. With the ability to bring the digital world to your fingertips, laptops have become essential tools for productivity, learning, and leisure"
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

export default Card2;
