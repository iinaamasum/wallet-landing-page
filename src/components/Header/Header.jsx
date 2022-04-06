import React from 'react';
import img1 from '../../assets/img1.svg';
const Header = () => {
  return (
    <div className="container mx-auto px-4 sm:px-0 md:flex md:justify-between md:items-center">
      <div>
        <h1 className="text-6xl text-white font-mono font-bold tracking-wide py-4">
          SaaS Landing <br /> Page Template
        </h1>
        <p className="text-orange-500 text-lg">
          This is a template Figma file, turned into code using Anima. Learn
          more at AnimaApp.com
        </p>
        <button
          className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-10 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-3"
          type="button"
        >
          Get Started
        </button>
      </div>
      <div className="h-[400px] md:h-[800px]">
        <img className="object-contain h-full w-full" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Header;
