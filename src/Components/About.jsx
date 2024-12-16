import React from 'react';
import { Link } from 'react-router-dom';
import image from "../../public/Asserts/about-1.png"

const About = () => {
  return (
    <div className="parent p-9 lg:px-20">
        <div className="wrapper p-4 md:p-8 flex flex-col lg:flex-row-reverse  border">
            <div className="img w-full text-center lg:w-3/4">
                <img src={image} alt="image" className='hover:translate-y-4 lg:w-full' />
            </div>
            <div className="text-div w-full py-4 px-2 lg:px-8">
                <p className='text-xl'>Welcome</p>
                <p className='lg:w-[10em] lg:text-4xl text-2xl lg:my-8 my-2'>We Have 20 Years of <span className='font-bold'>Experience</span></p>
                <p className='lg:my-8 my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae unde sunt, praesentium optio, aspernatur fugit labore quo doloremque et vel ad! Itaque architecto consectetur iste excepturi. Libero voluptatibus dignissimos asperiores.</p>
                <div className=" mt-5">
          <Link to='/' className='font-semibold bg-blue-700 p-3 rounded-xl text-white mr-4 text-[17px]  hover:bg-blue-600'>Learn More →</Link>
          </div>
            </div>
        </div>
  </div>
  )
}

export default About;