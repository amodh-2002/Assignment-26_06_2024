import React from "react";
import SingleCard from "./SingleCard";


const Cards = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex justify-around items-center mt-36">
      <SingleCard
        to="/cards/card1"
        src="https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Social Media - Life Changing Object"
        desc="Social media - a powerful tool for connecting people worldwide, sharing information, and shaping public opinion. From reuniting long-lost friends to enabling global movements, social media has indeed proven to be a transformative force in society"
      />
      <SingleCard
        to="/cards/card2"
        src="https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
        text="Laptop that makes you go yay"
        desc="Laptops - versatile devices that empower individuals to work, create, connect, and entertain. With the ability to bring the digital world to your fingertips, laptops have become essential tools for productivity, learning, and leisure"
      />
      <SingleCard
        to="/cards/card3"
        src="https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600"
        text="Lets learn the first thing we do in programming"
        desc="The foundational concept in programming - the 'Hello, World!' program. Serving as the traditional starting point for beginners, this simple program typically involves printing the phrase 'Hello, World!' to the screen."
      />
    </div>
  );
};

export default Cards;
