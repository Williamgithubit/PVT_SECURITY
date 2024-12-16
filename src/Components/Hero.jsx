import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import { GiCctvCamera } from "react-icons/gi";
import { IoKeyOutline } from "react-icons/io5";
import { RiSafe3Line } from "react-icons/ri";
import { BiCalculator } from "react-icons/bi";

function Hero() {
  // Services Data
  const services = [
    { icon: GiCctvCamera, description: 'Video Surveillance' },
    { icon: IoKeyOutline, description: 'Locksmith Services' },
    { icon: RiSafe3Line, description: 'Safes & Locks' },
    { icon: BiCalculator, description: 'Alarm System' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section w-full h-full md:h-screen flex flex-col lg:flex-row p-6 lg:p-14 items-center mt-16 lg:mt-0">
        {/* Text Content */}
        <div className="w-full mt-8 text-white lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-3xl lg:text-5xl font-medium leading-tight">
            Protecting Your Peace of Mind
          </h1>
          <p className="my-6 lg:my-10 text-sm lg:text-lg font-inter">
            Off-Duty Officers Private Security INC offers professional private security services in Liberia's 15 counties. Trust us to safeguard your assets and ensure a secure environment.
          </p>
          <div>
            <Link
              to="/explore"
              className="font-bold text-sm lg:text-lg rounded-xl py-3 px-11 bg-blue-700 hover:bg-blue-500 hover:text-white transition duration-200"
            >
              Explore &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section w-full flex p-8 lg:p-14 text-center md:mt-[-6rem]">
        <div className="wrapper w-full flex flex-col lg:flex-row justify-center lg:justify-around gap-6">
          {services.map((box, index) => (
            <div
              key={index}
              className="service-box lg:w-[20%] p-6 bg-white border-b-4 border-gray-400 shadow-lg rounded-lg text-center hover:bg-blue-700 hover:text-white transition duration-200 group flex flex-col items-center"
            >
              <div className="icon-container text-5xl text-blue-700 group-hover:text-white mb-4">
                {React.createElement(box.icon)}
              </div>
              <p className="text-sm lg:text-base group-hover:text-white">{box.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Hero;
