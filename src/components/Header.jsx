import React from 'react';

const Header = () => {
  return (
    <>
      <div className="bg-teal-100 flex justify-end w-full">
        <ul className="flex gap-4 p-1 text-sm bg-neutral-300 bg-opacity-50 rounded-lg shadow-sm" role="tablist">
          <li className="flex-1 px-6">
            <button
              className="w-full py-2 text-black font-medium rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none active:bg-blue-600 active:text-white"
              role="tab"
              aria-selected="false"
            >
              Home
            </button>
          </li>
          <li className="flex-1 px-6">
            <button
              className="w-full py-2 text-black font-medium rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none active:bg-blue-600 active:text-white"
              role="tab"
              aria-selected="false"
            >
              Profile
            </button>
          </li>
          <li className="flex-1 px-6">
            <button
              className="w-full py-2 text-black font-medium rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none active:bg-blue-600 active:text-white"
              role="tab"
              aria-selected="false"
            >
              About
            </button>
          </li>
          <li className="flex-1 px-6">
            <button
              className="w-full py-2 text-black font-medium rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none active:bg-blue-600 active:text-white"
              role="tab"
              aria-selected="false"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
      <div
        className="bg-cyan-500 h-screen flex flex-col justify-between p-4 bg-cover  bg-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1440050060/photo/cleaning-service-portrait-and-cleaner-in-an-office-with-spray-bottle-of-disinfectant-bleach.jpg?s=612x612&w=0&k=20&c=Fo5LYd-f7qyTr6W9IXWUWcbga2DbwlsbVbsPzWpF4XQ=')",
        }}
      >
        {/* Main Text Section */}
        <div className="flex flex-col items-start justify-center text-white mt-12">
          <h4 className="mt-4">RENEW YOUR LOOK</h4>
          <h2 className="text-3xl font-bold mt-4">
            A TRADITION OF <br /> QUALITY CLEANING
          </h2>
          <button className="border-4 mt-8 px-4 rounded-full py-2">Contact Us</button>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-3 gap-16 mt-12 px-12">
          <div className="bg-white text-lg w-72 h-36 flex flex-col justify-center items-center text-center">
            <span>Professional Cleaning</span>
            <p className="text-xs">Housekeeping is responsible for minor security in hotel Ecosystem</p>
          </div>
          <div className="bg-white text-lg w-72 h-36 flex flex-col justify-center items-center text-center">
            <span>Fast and Efficient</span>
            <p className="text-xs">Our aim is to keep the house clean. Your aim will help!</p>
          </div>
          <div className="bg-white text-lg w-72 h-36 flex flex-col justify-center items-center text-center">
            <span>Renew Your Look</span>
            <p className="text-xs">Both of us take a lot of time in getting cleaned and maintaining the beauty of the home.</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-12 px-12">
          <h2 className="text-2xl font-bold text-center mt-24">A Clean House is a Happy Place!</h2>
          <p>Washla has met the demands of its clients and continues to provide exceptional services.</p>
          <p className="mt-24 text-black">
            Washla customers have a tremendous<br /> opportunity to answer the call of <br /> needs across the globe. It has 26 affiliated<br /> soybean-product states.
          </p>
          <p className="mt-24 text-black">
            World's leading non-asset-based supply chain<br /> management companies. We design and implement industry-leading solutions. We specialize in<br />
            intelligent & effective search and believe in<br /> the power of business.
          </p>
        </div>

        {/* Last Section */}
        <div className=" text-center bg-teal-100 w-full mt-3  py-4">
          <h4 className="">WHY CHOOSE US</h4>
          <h2 className='text-lg font-bold mt-4'>Tradition of Trust</h2>
          <p>we specialise in intelligent & effective Search and believes in the power of<br/>partnership to grow business</p>
        
        <div className="grid grid-cols-3 gap-16 mt-12 px-12">
          <div className="bg-white text-lg w-72 h-36 flex flex-col justify-center items-center text-center">
            <span className='text-xl'>Profesional Team</span>
            <p className="text-xs">Our team use a Sanitizing solution to <br/></p>
          </div>
          <div className="bg-white text-lg w-72 h-36 flex flex-col justify-center items-center text-center">
            <span className='text-xl'> 24/7 Services</span>
            <p className="text-xs">Our aim is to keep the house clean. Your aim will help!</p>
          </div>
          <div className="bg-white text-lg w-72 h-36 flex flex-col justify-center items-center text-center">
            <span className='text-xl'>Service Guarantee</span>
            <p className="text-xs">Both of us take a lot of time in getting cleaned and maintaining the beauty of the home.</p>
          </div>
        </div>
        
      </div>
      <div>
      <div
        className="bg-cyan-500 h-screen flex  mt-2 flex-col grid-cols-2 justify-left w-96 h-96 p-4 bg-cover  bg-center"
        style={{
          backgroundImage: "url(https://media.istockphoto.com/id/1974456209/photo/selective-focus-on-happy-african-american-volunteer-helping-senior-lady-to-clean-house.webp?b=1&s=612x612&w=0&k=20&c=dtNs6d4JnyH7_eHHUa29h3EOhOtR28qF62HIdKo9NAc=)",
        }}
      >
        </div>

<div></div>
        <div>
            <h2 className='text-xs'> MADE FOR YOU</h2>
            <h1 className='text-xl bold'>A Cleaner Place is a Safe Place</h1>
            <p>Washla Cleaninfklgmdfgndgindfgindfndfgndrgidfglnfpoispgos<br/>sdfgsdfgvsdgsdgs</p>


        </div>

      </div>
      </div>
     
    </>
  );
};

export default Header;
