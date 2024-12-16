import React from "react";
import { Link } from "react-router-dom"; 
import image1 from "../../public/Asserts/service-1-1.png"; 
import image2 from "../../public/Asserts/service-1-2.png"; 
import image3 from "../../public/Asserts/service-1-3.png"; 

const content = [
    {
        image: <img src={image1} className="lg:h-48 md:h-36 w-full object-center object-cover" alt="service" />, // Fixed <img> tag
        title: "Private Security",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        learn_more: "/" // Added text to Link component
    },
    {
        image: <img src={image2} className="lg:h-48 md:h-36 w-full object-center object-cover" alt="service" />, // Fixed <img> tag
        title: "Transport Security",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        learn_more: "/" // Added text to Link component
    },
    {
        image: <img src={image3} className="lg:h-48 md:h-36 w-full object-center object-cover" alt="service" />, // Fixed <img> tag
        title: "Home Security",
        description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
        learn_more:  "/"// Added text to Link component
    }
];

const Services = () => {
  return (
    <div className="">
      <div className="section-banner text-center w-full h-2/3 lg:flex-row p-3 lg:p-14 items-center mt-20">
        <p className="mb-2 text-white text-lg">What We Do</p>
        <p className="text-5xl text-white">
          Our <span className="font-bold">Services</span>
        </p>
      </div> 

      {/* Cards */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap justify-center md:mt-[-8rem] mt-[-20%]">
            {content.map((card, index) => (
              <div key={index} className="p-4 md:w-[28%]">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  {card.image}
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      {card.title}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      {card.description}
                    </p>
                    <Link to={card.learn_more} className=" bg-blue-700 inline-flex items-center py-2 px-8 rounded-2xl text-white hover:bg-blue-500 md:mb-2 lg:mb-0">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
