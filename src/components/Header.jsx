import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* Responsive Navigation */}
      <div className="bg-teal-100 flex justify-end w-full">
        <ul
          className="flex flex-wrap gap-4 p-2 text-sm bg-neutral-300 bg-opacity-50 rounded-lg shadow-sm md:gap-8"
          role="tablist"
        >
          {["Home", "Profile", "About", "Contact"].map((item) => (
            <li key={item} className="flex-1">
              <Link
                to={`/${item.toLowerCase()}`}
                className="block text-center text-black font-medium rounded-lg hover:bg-white hover:text-blue-600 focus:outline-none active:bg-blue-600 active:text-white py-2 px-4"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Hero Section */}
      <div
        className="bg-cyan-500 min-h-screen flex flex-col justify-between p-4 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://media.istockphoto.com/id/1440050060/photo/cleaning-service-portrait-and-cleaner-in-an-office-with-spray-bottle-of-disinfectant-bleach.jpg?s=612x612&w=0&k=20&c=Fo5LYd-f7qyTr6W9IXWUWcbga2DbwlsbVbsPzWpF4XQ=')",
        }}
      >
        {/* Intro Text */}
        <div className="text-white mt-12 md:mt-24">
          <h4 className="text-sm md:text-lg">RENEW YOUR LOOK</h4>
          <h2 className="text-2xl md:text-4xl font-bold mt-4">
            A TRADITION OF <br /> QUALITY CLEANING
          </h2>
          <button className="border-4 mt-8 px-4 py-2 rounded-full">
            Contact Us
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-16 mt-12 px-4 md:px-12">
          {[
            {
              img: "https://cdn-icons-gif.flaticon.com/14251/14251133.gif",
              title: "Professional Cleaning",
              text: "Housekeeping is responsible for minor security in hotel ecosystems.",
            },
            {
              img: "https://cdn-icons-gif.flaticon.com/13275/13275329.gif",
              title: "Fast and Efficient",
              text: "Our aim is to keep the house clean. Your aim will help!",
            },
            {
              img: "https://cdn-icons-gif.flaticon.com/13275/13275383.gif",
              title: "Renew Your Look",
              text: "Both of us take time in getting cleaned and maintaining the beauty of the home.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-4 text-center flex flex-col items-center"
            >
              <img src={feature.img} alt={feature.title} className="h-12 mb-4" />
              <h5 className="text-lg font-semibold">{feature.title}</h5>
              <p className="text-xs">{feature.text}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-emerald-400 py-6 mt-12">
          <h4 className="text-white">WHY CHOOSE US</h4>
          <h2 className="text-lg font-bold mt-4">Tradition of Trust</h2>
          <p className="text-sm text-white">
            We specialize in intelligent & effective search and believe in the power of
            partnership to grow business.
          </p>
          </div>
       
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 px-4 sm:px-8 md:px-12">
  {/* Professional Team */}
  <div className="bg-white text-lg w-full max-w-xs h-36 flex flex-col justify-center items-center text-center mx-auto">
    <img
      src="https://cdn-icons-gif.flaticon.com/13893/13893651.gif"
      className="h-12 mb-2"
      alt="Professional Team"
    />
    <span className="text-xl font-semibold">Professional Team</span>
    <p className="text-xs mt-2">
      Our team uses a sanitizing solution to ensure cleanliness.
    </p>
  </div>

  {/* 24/7 Services */}
  <div className="bg-white text-lg w-full max-w-xs h-36 flex flex-col justify-center items-center text-center mx-auto">
    <img
      src="https://cdn-icons-gif.flaticon.com/17569/17569422.gif"
      className="h-12 mb-2"
      alt="24/7 Services"
    />
    <span className="text-xl font-semibold">24/7 Services</span>
    <p className="text-xs mt-2">
      Our aim is to keep your house clean. Your support helps us achieve it!
    </p>
  </div>
  </div>

  {/* Service Guarantee */}
  <div className="bg-white text-lg w-full max-w-xs h-36 flex flex-col justify-center items-center text-center mx-auto">
    <img
      src="https://cdn-icons-png.flaticon.com/128/10521/10521208.png"
      className="h-12 mb-2"
      alt="Service Guarantee"
    />
    <span className="text-xl font-semibold">Service Guarantee</span>
    <p className="text-xs mt-2">
      Together, we ensure the beauty and cleanliness of your home.
    </p>
  </div>
</div>
<div className="flex flex-col lg:flex-row h-auto lg:h-screen">
  {/* Left side with the image */}
  <div
    className="w-full lg:w-1/2 h-64 lg:h-full bg-cyan-500 bg-cover bg-center"
    style={{
      backgroundImage:
        "url(https://media.istockphoto.com/id/1974456209/photo/selective-focus-on-happy-african-american-volunteer-helping-senior-lady-to-clean-house.webp?b=1&s=612x612&w=0&k=20&c=dtNs6d4JnyH7_eHHUa29h3EOhOtR28qF62HIdKo9NAc=)",
    }}
  ></div>

  {/* Right side with the content */}
  <div className="p-6 lg:p-8 lg:pt-24 flex flex-col items-center">
    {/* First section */}
    <div className="mb-8 text-center">
      <h2 className="text-sm lg:text-xs font-medium text-gray-500">MADE FOR YOU</h2>
      <h1 className="text-2xl lg:text-3xl font-bold mt-2">
        A Cleaner Place is a Safe Place
      </h1>
      <p className="mt-4 text-sm lg:text-base">
        Washla Cleaning Service. We are a company dedicated to giving our
        customers back the time they deserve to enjoy the things they love.
      </p>
    </div>

    {/* Features grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 w-full max-w-xl">
      {/* Box 1 */}
      <div className="bg-white shadow-lg rounded-lg flex flex-col justify-center items-center text-center p-4">
        <img
          src="https://cdn-icons-gif.flaticon.com/13893/13893637.gif"
          className="h-12 mb-2"
          alt="Professional Team"
        />
        <span className="text-lg font-semibold">Professional Team</span>
        <p className="text-sm mt-2">
          Our team uses a sanitizing solution to ensure cleanliness and hygiene.
        </p>
      </div>

      {/* Box 2 */}
      <div className="bg-white shadow-lg rounded-lg flex flex-col justify-center items-center text-center p-4">
        <img
          src="https://cdn-icons-gif.flaticon.com/11706/11706667.gif"
          className="h-12 mb-2"
          alt="Fast and Efficient"
        />
        <span className="text-lg font-semibold">Fast and Efficient</span>
        <p className="text-sm mt-2">
          Both of us take a lot of time getting cleaned and maintaining the beauty of the home.
        </p>
      </div>
    </div>
  </div>



  <div
  className="flex flex-col w-full max-w-md mx-auto mt-12 pt-8 px-4 sm:px-8 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://imgs.search.brave.com/B7jv3PLqIOmbHcqZX_LH9em8cqwqjatHEMSygc-p9Rw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90cmFm/ZnQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzExL3Rv/d2ZpcXUtYmFyYmh1/aXlhLWhvLXA3cUxC/ZXdrLXVuc3BsYXNo/LTc2OHg1MTIucG5n')",
  }}
>
  {/* Header Section */}
  <div className="mb-6 text-center">
    <h2 className="text-lg sm:text-2xl font-bold text-black">
      Our Great Service
    </h2>
    <p className="text-sm sm:text-base text-sky-500 mt-2">
      Restoring the beauty and freshness of all your upholstered fabrics and 
      taking the work out of house chores for you.
    </p>
  </div>

  {/* Features Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
    {/* Card 1 */}
    <div className="bg-sky-500 text-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center">
      <img
        src="https://cdn-icons-gif.flaticon.com/13275/13275394.gif"
        className="h-12 mb-2"
        alt="Home Cleaning"
      />
      <span className="text-lg font-semibold">Home Cleaning</span>
      <p className="text-xs mt-2">
        Home and thoroughly launder them between usage. We ensure cleanliness and comfort.
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-sky-500 text-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center">
      <img
        src="https://cdn-icons-gif.flaticon.com/10053/10053386.gif"
        className="h-12 mb-2"
        alt="Windows Cleaning"
      />
      <span className="text-lg font-semibold">Windows Cleaning</span>
      <p className="text-xs mt-2">
        We closely monitor health agencies for the latest updates to ensure safe cleaning services.
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-sky-500 text-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/128/15300/15300135.png"
        className="h-12 mb-2"
        alt="Service Guarantee"
      />
      <span className="text-lg font-semibold">Service Guarantee</span>
      <p className="text-xs mt-2">
        Both of us take the time to ensure cleanliness and maintain the beauty of your home.
      </p>
    </div>
  </div>
</div>


<div className=" mt-12 pt-12 pb-12">
<h2 className='text-black text-2xl'>Our Team</h2>

<p className='text-l'>The member of our highly experienced team is dedicated to providing you<br/> with only the best service can possibly provide.</p>
        <div className="grid grid-cols-4 gap-6 px-12">
          <div className="bg-white rounded-lg p-4 text-center">
            <img
              src="https://imgs.search.brave.com/WKDmyq13HAIWbAfvsTTtHuANMUcWLBonxCszSK9DG0k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjIy/MjExOTAyL3Bob3Rv/L2ZlbWFsZS1ob3Vz/ZWtlZXBlci1jbGVh/bmluZy1uaWdodHN0/YW5kLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz15Mi1QLU5I/NWtfaTJ3eHY5UVRB/akFqSHZYODNrejRw/b3otcXBKbzJTcmdJ/PQ"
              alt="Kovai Pudur"
              className="rounded-lg w-full"
            />
            <h5 className="mt-4 font-bold w-full">Monica Gordon</h5>
            <p>House Cleaning</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <img
              src="https://media.gettyimages.com/id/496688546/photo/maid-working-at-a-hotel.jpg?s=612x612&w=0&k=20&c=-NM52SrDXJKR1P6mAkbkkX_ymIOJTM0AOWUguowxvFg="
              alt="Race Course"
              className="rounded-lg w-full"
            />
            <h5 className="mt-4 font-bold">Laura Jones</h5>
            <p>Cleaner</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <img
              src="https://imgs.search.brave.com/A3QE7sQlwRZxkzauxJ6aTzgzPLUI6Ct4xWOXliSpWPI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTk5/NzY4NzUwL3Bob3Rv/L2hvdXNla2VlcGVy/LWhvbGRpbmctY2xl/YW5pbmctcHJvZHVj/dHMuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPWdES2ZOSU1w/YS1NalF6XzE5Tkxj/aGhkUjJjbDJ0ZVN4/V0gtYVFITmcxWFU9"
              alt="Race Course"
              className="rounded-lg w-full"
            />
            <h5 className="mt-4 font-bold">House Cleaner</h5>
            <p>House Cleaning</p>
          </div>
          <div className="bg-white rounded-lg p-4 text-center">
            <noafnsn></noafnsn>
            <img
              src="https://imgs.search.brave.com/ZtKbd1mUyzSttfaCzJ4wVSpVh5_fKC5oHzJ1rPT-NFA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9kaXN0/aW5ndWlzaGVkLWlt/YWdlcy5jb20vbWVk/aWEvaW1hZ2VzL2Ns/ZWFuaW5nLWxhZHku/anBn"
              alt="Pn Pudur"
              className="rounded-lg w-full"
            />
            <h5 className="mt-4 font-bold">Angle</h5>
            <p>Maintaince</p>
            <button className="bg-blue-500 text-white rounded-full px-4 py-2 mt-4">
              View More
            </button>
          </div>

          <div >
     </div>
        </div>

        <div
  className="flex flex-col w-full max-w-md mx-auto mt-8 pt-8 px-4 sm:px-8 bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://media.istockphoto.com/id/1613082024/photo/sponge-on-green-background.jpg?s=612x612&w=0&k=20&c=iyk6c1or9b03tdEwbYkJfi-NFecwctoVTtcst9AwMYY=')",
  }}
>
  {/* Header Section */}
  <div className="mb-6 text-center">
    <h2 className="text-white text-xl sm:text-2xl font-bold">
      Need Help With Cleaning?
    </h2>
    <button className="mt-4 text-white rounded-full h-10 px-6 bg-blue-500 hover:bg-blue-600 transition">
      Request Call Back
    </button>
  </div>

  {/* Stats Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
    {/* Stat Card 1 */}
    <div className="bg-sky-500 text-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center">
      <img
        src="https://cdn-icons-gif.flaticon.com/15579/15579015.gif"
        className="h-12 mb-2"
        alt="Happy Customer"
      />
      <span className="text-2xl text-black font-semibold">385</span>
      <p className="text-sm">Happy Customers</p>
    </div>

    {/* Stat Card 2 */}
    <div className="bg-sky-500 text-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center">
      <img
        src="https://cdn-icons-gif.flaticon.com/16678/16678014.gif"
        className="h-12 mb-2"
        alt="House Cleaned"
      />
      <span className="text-2xl text-black font-semibold">842</span>
      <p className="text-sm">Houses Cleaned</p>
    </div>

    {/* Stat Card 3 */}
    <div className="bg-sky-500 text-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center">
      <img
        src="https://cdn-icons-gif.flaticon.com/13311/13311710.gif"
        className="h-12 mb-2"
        alt="Awards Received"
      />
      <span className="text-2xl text-black font-semibold">489</span>
      <p className="text-sm">Awards Received</p>
    </div>

    {/* Stat Card 4 */}
    <div className="bg-sky-500 text-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center text-center">
      <img
        src="https://cdn-icons-gif.flaticon.com/13893/13893658.gif"
        className="h-12 mb-2"
        alt="Glass Cleaned"
      />
      <span className="text-2xl text-black font-semibold">1344</span>
      <p className="text-sm">Glass Cleaned</p>
    </div>
  </div>


        
</div>
<div className="bg-blue-600 mt-12 py-12">
  <h4 className="text-white text-2xl font-semibold mb-8 text-center">
    Recent Reviews
  </h4>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
    {[
      {
        title: "Temporary Ruling Issued",
        img: "https://imgs.search.brave.com/9At3ck-I9WvpddTMvEv_xON3c0CHXOG0bzUsiHZww9A/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ3/MjUxODM4Mi9waG90/by9wcm9mZXNzaW9u/YWwtY2xlYW5pbmct/dGVhbS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9YWlxU1hu/QUJ4Yk1WMEZ5ZXhD/c3lvS002RzBEMWZD/X1hLVTN6VC1YSWQw/Zz0",
      },
      {
        title: "The Expands California",
        img: "https://imgs.search.brave.com/OlXWVzJCziGD1-UFPh8-Fq4ap3MUoawKgarJ2L3EQyU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTE1/MDI4MjEzMy9waG90/by9jbGVhbmluZy13/aW5kb3ctcGFuZS13/aXRoLWRldGVyZ2Vu/dC5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9Qmt6VmFzOHFa/X1ZMeExEV3BEQVBi/VlNEUlhnUkZNeGJJ/M19OSGNhbVVmaz0",
      },
      {
        title: "House Ruling Issued",
        img: "https://imgs.search.brave.com/9P-rMJLRqzfM5FWlDHPNJYebjts3t_poYBrsfat1-NE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/MDIxNjMzL3Bob3Rv/L21haWQtY2xlYW5p/bmctd2luZG93cy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/X1R5T2FkRUwzTFI3/elVVQ3JNX3g2aUlC/Z2tCd0REREtabFFS/aHI5cTJyaz0",
      },
      {
        title: "Glass Broken",
        img: "https://dyimg1.realestateindia.com/proj_images/project32668/proj_img-32668_1-200x200.jpg",
      },
    ].map((review, index) => (
      <div
        key={index}
        className="bg-white rounded-lg shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg"
      >
        <img
          src={review.img}
          alt={review.title}
          className="rounded-lg w-full mb-4 object-cover h-40"
        />
        <h5 className="font-semibold text-lg text-gray-800">{review.title}</h5>
        {index === 3 && (
          <button className="bg-blue-600 text-white rounded-full px-4 py-2 mt-4 hover:bg-blue-700">
            View More
          </button>
        )}
      </div>
    ))}
  </div>
</div>

    


    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        

          <div>
            <h2 className="text-lg font-bold">Cleaning Company </h2>
            <p className="mt-4 text-gray-400">
              We provide top-notch cleaning services for residential and commercial spaces. 
              Trust us to keep your spaces sparkling clean!
            </p>
          </div>

         
          <div>
            <h2 className="text-lg font-bold">Get In Touch</h2>
            <ul className="mt-4 text-gray-400 space-y-2">
              <li>Email: contact@cleaningagency.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Address: 123 Clean Street, Suite 100, Clean City</li>
            </ul>
          </div>

         
          <div>
            <h2 className="text-lg font-bold">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="/" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-gray-300">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-gray-300">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Cleaning Agency. All rights reserved.
        </div>
      </div>
    </footer>





      </div>

</div>
     
      
   
    </>
  );
};

export default Header;
